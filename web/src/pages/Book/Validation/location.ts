import type { DayAvailabilityType } from "@/types"
import { dateToString } from "@/lib/helpers"
import { LOCATION_OPTIONS } from "@/constants"

export function checkLocationIsAvailable(
  availability: DayAvailabilityType[],
  date: Date | undefined
) {
  if (!date) return LOCATION_OPTIONS

  // Filter books by date
  const dayAvailability = availability.find((a) => a.date === dateToString(date))

  if (dayAvailability?.bar.available && dayAvailability?.tables.tablesAvailability.some((t) => t.available)) return LOCATION_OPTIONS
  else if (dayAvailability?.bar.available)
    return LOCATION_OPTIONS.filter((location) => location.value === "bar")
  else if (dayAvailability?.tables.tablesAvailability.some((t) => t.available))
    return LOCATION_OPTIONS.filter((location) => location.value === "table")
  else return []
}
