import { cn } from "@/lib/utils"
import { dateToString } from "@/lib/helpers"
import { BookType, EventType } from "@/types"
import { DAYS, MONTHS } from "@/constants"
import { Day } from "./Day"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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
  return events.find((event) => event.date === dateToString(date))
}

export function Calendar({
  startDate,
  selected,
  onSelect,
  currentEvents,
  maxBookDays,
  latestBookHour,
}: {
  startDate: Date
  selected: Date | undefined
  onSelect: (date: Date) => void
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
    const event = isEventDay(currentEvents, sDate)
    if (event) {
      calendarDays.push(
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Day
                key={i}
                selected={selected}
                onSelect={onSelect}
                day={new Date(sDate)}
                disabled={true}
              />
            </TooltipTrigger>
            <TooltipContent className="bg-black border border-accent p-3 [&_svg]:stroke-accent [&_svg]:bg-accent [&_svg]:fill-accent">
              <h1 className="text-accent">{event.name}</h1>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    } else {
      calendarDays.push(
        <Day
          key={i}
          selected={selected}
          onSelect={onSelect}
          day={new Date(sDate)}
          disabled={
            isBefore(sDate, startDate) ||
            (isToday(sDate, startDate) && !shouldStartToday) ||
            Boolean() ||
            sDate.getDay() === 1 // Monday is disabled
          }
        />
      )
    }

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
