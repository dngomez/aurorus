import { MAX_BOOK_PEOPLE } from "@/constants"
import { dateToString } from "@/lib/helpers"
import type { DayAvailabilityType } from "@/types"

export function totalPlaces(
  availability: DayAvailabilityType[],
  date: Date,
  location: string,
  time: string
) {
  if (location === "bar") {
    const places = availability.find((a) => a.date === dateToString(date))!.bar.availability.find((t) => t.time === time.substring(0, 5))!.places
    return Array.from({ length: Math.min(places, MAX_BOOK_PEOPLE) }, (_, i) => (i + 1))
  } else if (location === "table") {
    return Array.from({ length: MAX_BOOK_PEOPLE }, (_, i) => (i + 1))
  }
  return []
}
