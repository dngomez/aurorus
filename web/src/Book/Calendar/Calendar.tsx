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
  startDate,
  selected,
  onSelect,
  currentBooks,
  currentEvents,
  maxBookDays,
  latestBookHour,
}: {
  startDate: Date
  selected: Date | undefined
  onSelect: (date: Date) => void
  currentBooks: BookType[]
  currentEvents: EventType[]
  maxBookDays: number
  latestBookHour: number
}) {
  const month = startDate.getMonth()
  const sDate = new Date(startDate)
  const FILL = startDate.getDay() - 1
  sDate.setDate(startDate.getDate() - FILL)
  const shouldStartToday = startDate.getHours() < latestBookHour

  const days = DAYS.map((day, idx) => {
    return (
      <div key={`${day}${idx}`} className="text-center">
        {day.letter}
      </div>
    )
  })

  const calendarDays = []
  for (let i = 0; i < maxBookDays; i++) {
    // Create Calendar Days
    calendarDays.push(
      <Day
        key={i}
        selected={selected}
        onSelect={onSelect}
        books={currentBooks.filter((book) => book.date === dateToString(sDate))}
        day={new Date(sDate)}
        isToday={isToday(sDate, startDate)}
        disabled={
          isBefore(sDate, startDate) ||
          (isToday(sDate, startDate) && !shouldStartToday) ||
          isEventDay(currentEvents, sDate) ||
          sDate.getDay() === 1 // Monday is disabled
        }
      />
    )

    // Move to next day
    sDate.setDate(sDate.getDate() + 1)
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
