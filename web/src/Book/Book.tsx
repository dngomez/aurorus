import { useState } from "react"
// import { Calendar } from "../components/ui/calendar"
import { Calendar } from "./Calendar"

const CALENDAR_DAYS = 14

export function Book() {
  const NOW = new Date()
  const MAX_DATE = new Date(NOW.getTime() + CALENDAR_DAYS * 24 * 60 * 60 * 1000)

  const [date, setDate] = useState<Date | undefined>(NOW)

  return (
    <div className="px-10">
      <h1 className="text-white text-4xl md:text-7xl font-bold mb-2 text-center">
        Reservas
      </h1>
      <span>Escoja una fecha</span>
      <Calendar />
    </div>
  )
}
