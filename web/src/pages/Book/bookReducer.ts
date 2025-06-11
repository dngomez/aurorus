import { MAX_BOOK_ANTICIPATION } from "@/constants"
import { dateToString } from "@/lib/helpers"
import { createBook } from "@/strapi/book"
import type {
  BookActionType,
  BookStateType,
  BookType,
  DialogStateType,
  LocationOptionsType,
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
      if (
        !action.payload
          ?.map((l: LocationOptionsType) => l.value)
          .includes(state.location)
      ) {
        return { ...state, location: "", locationOptions: action.payload }
      }
      return { ...state, locationOptions: action.payload }
    case "timeOptions":
      if (!action.payload?.includes(state.time)) {
        return { ...state, time: "", timeOptions: action.payload }
      }
      return { ...state, timeOptions: action.payload }
    case "peopleOptions":
      if (!action.payload?.includes(state.people)) {
        return { ...state, people: 0, peopleOptions: action.payload }
      }
      return { ...state, peopleOptions: action.payload }
    case "reset":
      return bookInitialState
    default:
      return state
  }
}

export function newBook(
  book: BookStateType,
  setDialogState: (state: DialogStateType) => void,
  reset: () => void
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
      reset()
    })
    .catch((_) => {
      setDialogState({
        message:
          "Ha ocurrido un error al crear su reserva, por favor inténtelo nuevamente o contactese con nosotros.",
        isOpen: true,
        variant: "error",
      })
      reset()
    })
}

export const bookInitialState = {
  location: "",
  locationOptions: [],
  time: "",
  timeOptions: [],
  people: 0,
  peopleOptions: [],
  date: undefined,
  today: new Date(),
  endDate: new Date(
    new Date().setDate(new Date().getDate() + MAX_BOOK_ANTICIPATION)
  ),
}
