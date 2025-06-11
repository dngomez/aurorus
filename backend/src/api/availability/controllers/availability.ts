/**
 * A set of functions called "actions" for `availability`
 */

export default {
  getAvailability: async (ctx, next) => {
    try {
      const books = await strapi.query("api::book.book").findMany({
        where: {
          date: {
            $gte: ctx.query.filters.date.$gte,
            $lte: ctx.query.filters.date.$lte,
          },
        },
      })
      const constants = await strapi.query("api::constant.constant").findOne()
      const availability = createAvailability(books, constants)
      ctx.body = {
        data: availability,
      }
    } catch (err) {
      ctx.body = err
    }
  },
}

type BookType = {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  date: string
  time: string
  comment: any
  people: number
  email: string | null
  phone: string | null
  confirmed: boolean
  code: string
  location: string
}

type DayAvailabilityType = {
  date: string
  bar: BarAvailabilityType
  tables: AllTablesAvailabilityType
}

type BarAvailabilityType = {
  available: boolean
  availableOptions: string[]
  availability: BarTimeAvailabilityType[]
}

type BarTimeAvailabilityType = {
  time: string
  places: number
}

type AllTablesAvailabilityType = {
  availableOptions: string[]
  tablesAvailability: TableAvailabilityType[]
}

type TableAvailabilityType = {
  table: number
  available: boolean
  windows: WindowAvailabilityType[]
}

type WindowAvailabilityType = {
  start: number
  end: number
}

function dateToString(date: Date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
}

function createAvailability(books, constants) {
  const date = new Date()
  const availability: DayAvailabilityType[] = []

  // Loop through each day
  for (let i = 0; i < constants.MAX_BOOK_ANTICIPATION; i++) {
    // Start full availability
    const dayAvailability = {
      date: dateToString(date),
      bar: {
        available: true,
        availableOptions: [],
        availability: constants.BAR_TIME_OPTIONS.options.map((time) => {
          return {
            time,
            places: constants.BAR_PEOPLE,
          }
        }),
      },
      tables: {
        availableOptions: [],
        tablesAvailability: Array.from(
          { length: constants.TABLES },
          (_, i) => ({
            table: i + 1, // Table number, starts at 1
            available: true,
            windows: [
              {
                start: hhmmssToFloat(constants.OPENING_TIME),
                end: hhmmssToFloat(constants.CLOSING_TIME),
              },
            ],
          })
        ),
      },
    }

    // Check availability for current date
    const booksInDate = books.filter((book) => book.date === dateToString(date))

    for (let book of booksInDate) {
      // For bar, check botch possible schedule times
      if (book.location === "bar") {
        // Bar has only 2 possible times
        dayAvailability.bar.availability.find(
          (time) => time.time === book.time.substring(0, 5)
        )!.places -= book.people
      } else if (book.location === "table") {
        removeWindow(book, dayAvailability, constants)
      }
    }

    // Calculate available options
    calculateAvailableOptions(dayAvailability, constants)

    if (dayAvailability.bar.availability.every((av) => av.places === 0)) {
      dayAvailability.bar.available = false
    }

    availability.push(dayAvailability)

    // Go to next day
    date.setDate(date.getDate() + 1)
  }

  return availability
}

function hhmmssToFloat(time: string) {
  const timeArray = time.split(":")
  const hour = timeArray[0]
  const minute = timeArray[1]
  return parseFloat(hour) + parseFloat(minute) / 60
}

function floatToHhmmss(time: number) {
  const hour = Math.floor(time)
  const minute = Math.round((time - hour) * 60)
  return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
}

function removeWindow(
  book: BookType,
  dayAvailability: DayAvailabilityType,
  constants: any
) {
  // Easier represent times using float hours
  // 19:00 -> 19 | 19:15 -> 19.25 |19:30 -> 19.5
  const bookStartTime = hhmmssToFloat(book.time)
  const bookEndTime = bookStartTime + constants.TABLE_USAGE_TIME / 60

  // Start with a huge wasted time
  let wasted = 600 // 10 Hours
  let table = null // Best table to remove window
  let startRemoving = null // Start time to remove window
  let endRemoving = null // End time to remove window
  // Find available window in tables
  for (let i = 0; i < constants.TABLES; i++) {
    if (!dayAvailability.tables.tablesAvailability[i].available) {
      continue
    }

    // Loop through windows
    // If there is some available, should be just one
    for (
      let j = 0;
      j < dayAvailability.tables.tablesAvailability[i].windows.length;
      j++
    ) {
      const window = dayAvailability.tables.tablesAvailability[i].windows[j]
      if (bookStartTime >= window.start && bookEndTime <= window.end) {
        // Calculate window wasted time
        let startTime = bookStartTime
        let endTime = bookEndTime

        // If window start time is not enough to create a new windows
        if (window.start + constants.TABLE_USAGE_TIME / 60 > bookStartTime) {
          startTime = window.start
        }

        // If window end time is not enough to create a new windows
        if (window.end - constants.TABLE_USAGE_TIME / 60 < bookEndTime) {
          endTime = window.end
        }

        // Calculate window wasted time
        const windowWasted = endTime - startTime

        // We should keep the window with the least wasted time
        if (windowWasted < wasted) {
          wasted = windowWasted
          table = i
          startRemoving = startTime
          endRemoving = endTime
        }
      }
    }
  }

  if (table !== null && startRemoving !== null && endRemoving !== null) {
    // TODO: Remove time from table and create windows if needed
    let auxWindows = [
      ...dayAvailability.tables.tablesAvailability[table].windows,
    ]
    let newWindows: WindowAvailabilityType[] = []

    for (let window of auxWindows) {
      if (window.start === startRemoving && window.end === endRemoving) {
        // Don't do anything, this window is completely removed
      } else if (window.start === startRemoving && window.end > endRemoving) {
        // Create a window that starts at endRemoving and ends at window.end
        newWindows.push({
          start: endRemoving,
          end: window.end,
        })
      } else if (window.start < startRemoving && window.end === endRemoving) {
        // Create a window that starts at window.start and ends at startRemoving
        newWindows.push({
          start: window.start,
          end: startRemoving,
        })
      } else if (window.start < startRemoving && window.end > endRemoving) {
        // Create 2 windows
        // First window starts at window.start and ends at startRemoving
        newWindows.push({
          start: window.start,
          end: startRemoving,
        })
        // Second window starts at endRemoving and ends at window.end
        newWindows.push({
          start: endRemoving,
          end: window.end,
        })
      } else {
        // Add entire window
        newWindows.push(window)
      }
    }

    dayAvailability.tables.tablesAvailability[table].windows = newWindows
  }
}

function calculateAvailableOptions(
  dayAvailability: DayAvailabilityType,
  constants: any
) {
  // Bar availability
  dayAvailability.bar.availableOptions =
    dayAvailability.bar.availability.reduce(
      (acc, opt) => (opt.places > 0 ? [...acc, opt.time] : acc),
      [] as string[]
    )

  // Tables availability
  const availableOptions = []
  for (let i = 0; i < constants.TABLES; i++) {
    for (let window of dayAvailability.tables.tablesAvailability[i].windows) {
      // Create a range every TABLE_TIME_STEP minutes from start of the window until end - TABLE_USAGE_TIME
      availableOptions.push(
        ...getTimeOptionsBetweenTimes(window.start, window.end, constants)
      )
    }
  }

  // Convert options to a sorted set of time strings
  dayAvailability.tables.availableOptions = Array.from(
    new Set(availableOptions.sort((a, b) => a - b))
  ).map((time) => floatToHhmmss(time))
}

function getTimeOptionsBetweenTimes(
  startTime: number,
  endTime: number,
  constants: any
) {
  let st = startTime
  const options = []
  while (st <= endTime - constants.TABLE_USAGE_TIME / 60) {
    options.push(st)
    st += constants.TABLE_TIME_STEP / 60
  }

  return options
}
