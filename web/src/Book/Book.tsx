import { useEffect, useState } from "react"
import { Calendar } from "./Calendar/Calendar"
import { createBook, getBooksInRange } from "@/strapi/book"
import { Time } from "./Time"
import { Location } from "./Location"
import { People } from "./People"
import { Map } from "./Map"
import { Button } from "@/components/ui/button"
import { getEventsInRange } from "@/strapi/event"
import {
  dateToString,
  LATEST_BOOK_HOUR,
  LOCATION_OPTIONS,
  MAX_BOOK_DAYS,
} from "@/lib/helpers"
import { toast } from "sonner"
import { BookType } from "@/types"
import { List } from "@/Event/List"
import { checkLocationIsAvailable } from "./Validation/location"

export function Book() {
  const [location, setLocation] = useState<string>("")
  const [locationOptions, setLocationOptions] = useState(LOCATION_OPTIONS)
  const [time, setTime] = useState<string>("")
  const [people, setPeople] = useState(1)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [books, setBooks] = useState([])
  const [events, setEvents] = useState([])

  const today = new Date()
  const endDate = new Date(today)
  endDate.setDate(today.getDate() + MAX_BOOK_DAYS)

  useEffect(() => {
    getBooksInRange(today, endDate).then((books) => {
      setBooks(books)
    })

    getEventsInRange(today, endDate).then((events) => {
      setEvents(events)
    })
  }, [])

  // Check if location is still available
  useEffect(() => {
    setLocationOptions(checkLocationIsAvailable({ books, date }))
    // setPeopleOptions(checkSpacesAvailable({ location, books, date }))
  }, [location, books, date])

  function newBook() {
    const bookCode = Math.floor(new Date().getTime() / 1000).toString(36)

    // TODO: Create book
    createBook({
      date: dateToString(date!),
      time,
      location,
      people,
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

  return (
    <div className="px-10">
      <h1 className="text-white text-4xl md:text-7xl font-bold mb-2 text-center">
        Reservas
      </h1>
      <p className="text-center text-red-300 mb-4">
        Para reservas de más de 4 personas por favor comunicarse con nosotros
        través de nuestras redes sociales
      </p>

      <List events={events} />

      <div className="flex flex-wrap">
        <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-white text-2xl font-bold">Nueva reserva</h1>
          <Calendar
            selected={date}
            onSelect={setDate}
            currentBooks={books}
            currentEvents={events}
            maxBookDays={MAX_BOOK_DAYS}
            latestBookHour={LATEST_BOOK_HOUR}
          />
          <Location
            locationOptions={locationOptions}
            location={location}
            setLocation={setLocation}
          />
          <People people={people} setPeople={setPeople} />
          <Time
            location={location}
            setTime={setTime}
            disabled={!date || !location}
          />
          <Button
            disabled={!date || !location || !time || !people}
            className="bg-aurorus"
            onClick={newBook}
          >
            Reservar
          </Button>
        </div>
        <div className="hidden md:flex md:w-1/2 lg:w-2/3 pl-10">
          <Map location={location} />
        </div>
      </div>
    </div>
  )
}
