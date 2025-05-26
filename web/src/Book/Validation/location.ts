import { BookType } from "@/types"
import {
  BAR_PEOPLE,
  dateToString,
  LOCATION_OPTIONS,
  TABLE_NUMBER,
  TABLE_PEOPLE,
} from "@/lib/helpers"

export function checkLocationIsAvailable({
  books,
  date,
}: {
  books: BookType[]
  date: Date | undefined
}) {
  if (!date) return LOCATION_OPTIONS

  // Filter books by date
  const booksInDate = books.filter((book) => book.date === dateToString(date))

  // Check if more than 9 people has booked the bar
  let peopleInBar = 0
  let peopleInTable = 0
  let tablesUsed = 0

  for (const book of booksInDate) {
    if (book.location === "bar") {
      peopleInBar += book.people
    } else {
      peopleInTable += book.people
      tablesUsed += 1
    }
  }

  const isBarAvailable = peopleInBar < BAR_PEOPLE
  const isTableAvailable =
    peopleInTable < TABLE_PEOPLE && tablesUsed < TABLE_NUMBER

  if (isBarAvailable && isTableAvailable) return LOCATION_OPTIONS
  else if (isBarAvailable)
    return LOCATION_OPTIONS.filter((location) => location.value === "bar")
  else if (isTableAvailable)
    return LOCATION_OPTIONS.filter((location) => location.value === "table")
  else return []
}
