import { Calendar } from "./Calendar/Calendar"
import { Time } from "./Time"
import { Location } from "./Location"
import { People } from "./People"
import { Button } from "@/components/ui/button"
import { BookActionType, BookStateType, BookType, EventType } from "@/types"
import { LATEST_BOOK_HOUR, MAX_BOOK_DAYS } from "@/constants"
import { newBook } from "./bookReducer"
import { cn } from "@/lib/utils"

export function BookForm({
  books,
  events,
  bookState,
  bookDispatch,
}: {
  books: BookType[]
  events: EventType[]
  bookState: BookStateType
  bookDispatch: (_: BookActionType) => void
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3",
        "bg-black/60 p-4 text-center"
      )}
    >
      <h1 className="text-white text-2xl font-bold">Nueva reserva</h1>
      <Calendar
        startDate={bookState.today}
        selected={bookState.date}
        onSelect={(value) => bookDispatch({ type: "date", payload: value })}
        currentBooks={books}
        currentEvents={events}
        maxBookDays={MAX_BOOK_DAYS}
        latestBookHour={LATEST_BOOK_HOUR}
      />
      <Location
        locationOptions={bookState.locationOptions}
        location={bookState.location}
        setLocation={(location) =>
          bookDispatch({ type: "location", payload: location })
        }
      />
      <People
        people={bookState.people}
        setPeople={(people) =>
          bookDispatch({ type: "people", payload: people })
        }
      />
      <Time
        location={bookState.location}
        setTime={(time) => bookDispatch({ type: "time", payload: time })}
        disabled={!bookState.date || !bookState.location}
      />
      <Button
        disabled={
          !bookState.date ||
          !bookState.location ||
          !bookState.time ||
          !bookState.people
        }
        className="bg-aurorus"
        onClick={() => newBook(bookState)}
      >
        Reservar
      </Button>
    </div>
  )
}
