import { MONTHS } from "@/constants"

export function dateToString(date: Date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
}

export function strapiDateToString(date: string) {
  const [_, month, day] = date.split("-")
  return `${parseInt(day)} de ${MONTHS[parseInt(month) - 1].name}`
}
