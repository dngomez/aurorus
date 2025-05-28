import { dateToString } from "@/lib/helpers"
import { BookType } from "@/types"

export function totalSpacesByDate(
  startDate: Date,
  maxBookDays: number,
  books: BookType[]
) {
  const date = new Date(startDate)

  // Loop through each day
  for (let i = 0; i < maxBookDays; i++) {
    // Check availability for current date
    const booksInDate = books.filter((book) => book.date === dateToString(date))

    // Go to next day
    date.setDate(startDate.getDate() + i)
  }

  // TODO: Check bar spaces for each time in schedule (19:00 and 23:00)

  // TODO: Check table spaces for each time in schedule
}
