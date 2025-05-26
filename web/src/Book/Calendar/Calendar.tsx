import { cn } from "@/lib/utils"
import { dateToString } from "@/lib/helpers"
import { BookType, EventType } from "@/types"
import { DAYS, MONTHS } from "@/lib/helpers"
import { Day } from "./Day"

function isBefore(date: Date, today: Date) {
  return Math.trunc(date.getTime() / 1000) < Math.trunc(today.getTime() / 1000)
}

function isToday(date: Date, today: Date) {
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

function isEventDay(events: EventType[], date: Date) {
  return events.findIndex((event) => event.date === dateToString(date)) !== -1
}

export function Calendar({
  selected,
  onSelect,
  currentBooks,
  currentEvents,
  maxBookDays,
  latestBookHour,
}: {
  selected: Date | undefined
  onSelect: (date: Date) => void
  currentBooks: BookType[]
  currentEvents: EventType[]
  maxBookDays: number
  latestBookHour: number
}) {
  const today = new Date()
  const month = today.getMonth()
  const startDate = new Date(today)
  const FILL = today.getDay() - 1
  startDate.setDate(today.getDate() - FILL)
  const shouldStartToday = today.getHours() < latestBookHour
  const TOTAL_DAYS = maxBookDays + FILL
  const endDate = new Date(startDate)
  endDate.setDate(startDate.getDate() + TOTAL_DAYS)

  const days = DAYS.map((day, idx) => {
    return (
      <div key={`${day}${idx}`} className="text-center">
        {day.letter}
      </div>
    )
  })

  const calendarDays = []
  for (let i = 0; i < TOTAL_DAYS; i++) {
    // Create Calendar Days
    calendarDays.push(
      <Day
        key={i}
        selected={selected}
        onSelect={onSelect}
        books={currentBooks.filter(
          (book) => book.date === dateToString(startDate)
        )}
        day={new Date(startDate)}
        isToday={isToday(startDate, today)}
        disabled={
          isBefore(startDate, today) ||
          (isToday(startDate, today) && !shouldStartToday) ||
          isEventDay(currentEvents, startDate) ||
          startDate.getDay() === 1 // Monday is disabled
        }
      />
    )

    // Move to next day
    startDate.setDate(startDate.getDate() + 1)
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <h1>Fecha</h1>
      <div className="border rounded-md">
        <h2 className="text-center py-1">{MONTHS[month].name}</h2>
        <div className={cn("grid grid-cols-7 gap-1 px-2 pb-2")}>
          {days}
          {calendarDays}
        </div>
      </div>
    </div>
  )
}
