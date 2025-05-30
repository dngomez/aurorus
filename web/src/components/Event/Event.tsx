import { strapiDateToString } from "@/lib/helpers"
import type { EventType } from "@/types"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

export function Event({ event }: { event: EventType }) {
  return (
    <div className="bg-black/60 p-4 my-4 rounded-md">
      <h1 className="text-xl font-bold text-accent">{event.name}</h1>
      <h4 className="font-bold">{strapiDateToString(event.date)}</h4>
      <BlocksRenderer content={event.description} />
    </div>
  )
}
