import { cn } from "@/lib/utils"

const CALENDAR_DAYS = 14
const DAYS = [
  "L", // 1
  "M", // 2
  "M", // 3
  "J", // 4
  "V", // 5
  "S", // 6
  "D", // 7
]

export function Calendar() {
  const today = new Date()
  const startDate = new Date()
  const FILL = today.getDay()
  startDate.setDate(today.getDate() - FILL)
  const shouldStartToday = today.getHours() >= 18
  const TOTAL_DAYS = shouldStartToday
    ? CALENDAR_DAYS + FILL + 1
    : CALENDAR_DAYS + FILL

  const days = DAYS.map((day) => {
    return <div className="text-center">{day}</div>
  })

  const calendarDays = []
  for (let i = 0; i < TOTAL_DAYS; i++) {
    calendarDays.push(
      <div
        className={cn(
          "text-center p-1",
          Math.trunc(today.getTime() / 1000) ===
            Math.trunc(startDate.getTime() / 1000)
            ? "bg-aurorus/50"
            : Math.trunc(startDate.getTime() / 1000) <
              Math.trunc(today.getTime() / 1000)
            ? "bg-transparent"
            : "bg-black/50"
        )}
      >
        {startDate.getDate()}
      </div>
    )
    startDate.setDate(startDate.getDate() + 1)
  }

  return (
    <div className={cn("grid grid-cols-7 gap-1 w-1/3")}>
      {days}
      {calendarDays}
    </div>
  )
}
