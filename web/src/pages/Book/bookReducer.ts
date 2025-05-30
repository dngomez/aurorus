import { LOCATION_OPTIONS, MAX_BOOK_DAYS } from "@/constants"
import { dateToString } from "@/lib/helpers"
import { createBook } from "@/strapi/book"
import type {
  BookActionType,
  BookStateType,
  BookType,
  DialogStateType,
} from "@/types"

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

export function newBook(
  book: BookStateType,
  setDialogState: (state: DialogStateType) => void
) {
  const bookCode = Math.floor(new Date().getTime() / 1000).toString(36)

  createBook({
    date: dateToString(book.date!),
    time: book.time,
    location: book.location,
    people: book.people,
    phone: "123456789",
    code: bookCode,
  } as BookType)
    .then((book) => {
      if (book !== null) {
        setDialogState({
          message: `Su reserva ha sido creada con código de reserva: ${book.code}. Por favor guarde este número de reserva para futuras referencias y cancelaciones.`,
          isOpen: true,
          variant: "success",
        })
      } else {
        setDialogState({
          message:
            "Ha ocurrido un error al crear su reserva, por favor inténtelo nuevamente o contactese con nosotros.",
          isOpen: true,
          variant: "error",
        })
      }
    })
    .catch((_) => {
      setDialogState({
        message:
          "Ha ocurrido un error al crear su reserva, por favor inténtelo nuevamente o contactese con nosotros.",
        isOpen: true,
        variant: "error",
      })
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
