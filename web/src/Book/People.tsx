import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BiEnvelope } from "react-icons/bi"
import { FaInfoCircle, FaInstagram, FaWhatsapp } from "react-icons/fa"

export function People({
  people,
  setPeople,
}: {
  people: number
  setPeople: (people: number) => void
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1>Personas</h1>
      <Select onValueChange={(value) => setPeople(parseInt(value))}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Personas" />
        </SelectTrigger>
        <SelectContent className="bg-gray-700 text-white">
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
