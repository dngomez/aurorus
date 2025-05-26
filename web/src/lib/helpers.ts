export function dateToString(date: Date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
}

export function strapiDateToString(date: string) {
  const [_, month, day] = date.split("-")
  return `${parseInt(day)} de ${MONTHS[parseInt(month) - 1].name}`
}

export const BAR_PEOPLE = 9
export const TABLE_PEOPLE = 6
export const TABLE_NUMBER = 3
export const TABLE_USAGE_TIME = 60
export const MAX_BOOK_DAYS = 14
export const LATEST_BOOK_HOUR = 18

export const DAYS = [
  { letter: "L", name: "lunes", number: 1 },
  { letter: "M", name: "martes", number: 2 },
  { letter: "M", name: "miércoles", number: 3 },
  { letter: "J", name: "jueves", number: 4 },
  { letter: "V", name: "viernes", number: 5 },
  { letter: "S", name: "sábado", number: 6 },
  { letter: "D", name: "domingo", number: 7 },
]

export const MONTHS = [
  { letter: "E", name: "Enero", number: 1 },
  { letter: "F", name: "Febrero", number: 2 },
  { letter: "M", name: "Marzo", number: 3 },
  { letter: "A", name: "Abril", number: 4 },
  { letter: "M", name: "Mayo", number: 5 },
  { letter: "J", name: "Junio", number: 6 },
  { letter: "J", name: "Julio", number: 7 },
  { letter: "A", name: "Agosto", number: 8 },
  { letter: "S", name: "Septiembre", number: 9 },
  { letter: "O", name: "Octubre", number: 10 },
  { letter: "N", name: "Noviembre", number: 11 },
  { letter: "D", name: "Diciembre", number: 12 },
]

export const LOCATION_OPTIONS = [
  { value: "bar", label: "Barra" },
  { value: "table", label: "Mesa" },
]
