import { dateToString } from "@/lib/helpers"
import { query } from "./query"

export async function getAvailability(start: Date, end: Date) {
  const books = await query(
    `availability?filters[date][$gte]=${dateToString(
      start
    )}&filters[date][$lte]=${dateToString(end)}`
  )

  return books
}
