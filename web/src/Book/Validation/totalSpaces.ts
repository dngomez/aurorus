import { dateToString } from "@/lib/helpers"
import { BookType } from "@/types"

export function totalSpacesByDate(date: Date, books: BookType[]) {
  const booksInDate = books.filter((book) => book.date === dateToString(date))

  // TODO: Check bar spaces for each time in schedule (19:00 and 23:00)
  // TODO: Check table spaces for each time in schedule
}
