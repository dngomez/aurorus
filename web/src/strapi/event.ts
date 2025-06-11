import { dateToString } from "../lib/helpers"
import { query } from "./query"

export async function getEventsInRange(start: Date, end: Date) {
  const events = await query(
    `events?filters[date][$gte]=${dateToString(
      start
    )}&filters[date][$lte]=${dateToString(end)}`
  )

  return events
}
