import type { EventType } from "@/types"
import { Event } from "./Event"

export function List({ events }: { events: EventType[] }) {
  if (events.length === 0) {
    return null
  }

  return (
    <div className="w-full text-center">
      <h1 className="text-white text-2xl font-bold">Próximos Eventos</h1>
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  )
}
