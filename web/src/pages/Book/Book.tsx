import { useEffect, useReducer, useState } from "react"
import { getBooksInRange } from "@/strapi/book"
import { Map } from "./Map"
import { getEventsInRange } from "@/strapi/event"
import { List } from "@/components/Event/List"
import { checkLocationIsAvailable } from "./Validation/location"
import { Layout } from "@/components/Layout"
import { BookForm } from "./BookForm"
import { bookInitialState, bookReducer } from "./bookReducer"

export function Book() {
  const [bookState, bookDispatch] = useReducer(bookReducer, bookInitialState)
  const [books, setBooks] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    getBooksInRange(bookState.today, bookState.endDate).then((books) => {
      setBooks(books)
      // TODO: Calculate free spaces for each day
    })

    getEventsInRange(bookState.today, bookState.endDate).then((events) => {
      setEvents(events)
    })
  }, [bookState.today, bookState.endDate])

  // Check if location is still available
  useEffect(() => {
    bookDispatch({
      type: "locationOptions",
      payload: checkLocationIsAvailable(books, bookState.date),
    })
    // setPeopleOptions(checkSpacesAvailable({ location, books, date }))
  }, [location, books, bookState.date])

  return (
    <Layout title="Reservas">
      <p className="text-center text-red-300 mb-4">
        Para reservas de más de 4 personas por favor comunicarse con nosotros
        través de nuestras redes sociales
      </p>

      <List events={events} />

      <div className="flex gap-4">
        <BookForm
          events={events}
          bookState={bookState}
          bookDispatch={bookDispatch}
        />
        <Map location={bookState.location} />
      </div>
    </Layout>
  )
}
