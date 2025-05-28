import { LOCATION_OPTIONS, MAX_BOOK_DAYS } from "@/constants"
import { dateToString } from "@/lib/helpers"
import { createBook } from "@/strapi/book"
import { BookActionType, BookStateType, BookType } from "@/types"
import { toast } from "sonner"

export function bookReducer(state: BookStateType, action: BookActionType) {
  switch (action.type) {
    case "location":
      return { ...state, location: action.payload }
    case "time":
      return { ...state, time: action.payload }
    case "people":
      return { ...state, people: action.payload }
    case "date":
      return { ...state, date: action.payload }
    case "locationOptions":
      return { ...state, locationOptions: action.payload }
    case "peopleOptions":
      return { ...state, peopleOptions: action.payload }
    case "timeOptions":
      return { ...state, timeOptions: action.payload }
    default:
      return state
  }
}

export function newBook(book: BookStateType) {
  const bookCode = Math.floor(new Date().getTime() / 1000).toString(36)

  createBook({
    date: dateToString(book.date!),
    time: book.time,
    location: book.location,
    people: book.people,
    phone: "123456789",
    code: bookCode,
  } as BookType).then((book) => {
    if (book !== null) {
      toast.success(
        `Su reserva ha sido creada con código de reserva: ${book.code}. Por favor guarde este número de reserva para futuras referencias y cancelaciones.`
      )
    } else {
      toast.error(
        "Ha ocurrido un error al crear su reserva. Por favor inténtelo de nuevo."
      )
    }
  })
}

export const bookInitialState = {
  location: "",
  locationOptions: LOCATION_OPTIONS,
  time: "",
  timeOptions: [],
  people: 0,
  peopleOptions: [],
  date: undefined,
  today: new Date(),
  endDate: new Date(new Date().setDate(new Date().getDate() + MAX_BOOK_DAYS)),
}
