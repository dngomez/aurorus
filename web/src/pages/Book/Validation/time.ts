import { dateToString } from "@/lib/helpers";
import type { DayAvailabilityType } from "@/types";

export function timeAvailableOptions(
  availability: DayAvailabilityType[],
  date: Date,
  location: string
) {
  if (location === "bar") {
    return availability.find((a) => a.date === dateToString(date))?.bar.availableOptions
  } else if (location === "table") {
    return availability.find((a) => a.date === dateToString(date))?.tables.availableOptions
  }
}