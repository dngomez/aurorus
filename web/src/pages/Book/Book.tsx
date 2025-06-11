import { useEffect, useReducer, useState } from "react"
import { Map } from "./Map"
import { getEventsInRange } from "@/strapi/event"
import { List } from "@/components/Event/List"
import { checkLocationIsAvailable } from "./Validation/location"
import { Layout } from "@/components/Layout"
import { BookForm } from "./BookForm"
import { bookInitialState, bookReducer } from "./bookReducer"
import { getAvailability } from "@/strapi/availability"
import { DayAvailabilityType } from "@/types"
import { timeAvailableOptions } from "./Validation/time"
import { totalPlaces } from "./Validation/places"

export function Book() {
  const [bookState, bookDispatch] = useReducer(bookReducer, bookInitialState)
  const [events, setEvents] = useState([])
  const [availability, setAvailability] = useState<DayAvailabilityType[]>([])

  useEffect(() => {
    getEventsInRange(bookState.today, bookState.endDate).then((events) => {
      setEvents(events)
    })

    getAvailability(bookState.today, bookState.endDate).then((availability) => {
      setAvailability(availability)
    })
  }, [bookState.today, bookState.endDate])

  // Check if location is still available
  useEffect(() => {
    if (!bookState.date) return
    bookDispatch({
      type: "locationOptions",
      payload: checkLocationIsAvailable(availability, bookState.date),
    })
  }, [availability, bookState.date])

  // Check time options
  useEffect(() => {
    if (!bookState.date || !bookState.location) return
    bookDispatch({
      type: "timeOptions",
      payload: timeAvailableOptions(
        availability,
        bookState.date,
        bookState.location
      ),
    })
  }, [availability, bookState.date, bookState.location])

  // Check people options
  useEffect(() => {
    if (!bookState.date || !bookState.location || !bookState.time) return
    bookDispatch({
      type: "peopleOptions",
      payload: totalPlaces(
        availability,
        bookState.date,
        bookState.location,
        bookState.time
      ),
    })
  }, [availability, bookState.date, bookState.location, bookState.time])

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
