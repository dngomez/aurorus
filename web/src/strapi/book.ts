import { BookType } from "@/types"
import { dateToString } from "../lib/helpers"
import { post, query } from "./query"

export async function getBooksInRange(start: Date, end: Date) {
  const books = await query(
    `books?filters[date][gte]=${dateToString(
      start
    )}&filters[date][lte]=${dateToString(end)}`
  )

  return books
}

export async function createBook(data: BookType) {
  const books: BookType = await post(`books`, data)

  return books
}
