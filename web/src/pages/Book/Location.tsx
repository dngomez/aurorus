import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LocationOptionsType } from "@/types"

export function Location({
  locationOptions,
  location,
  setLocation,
  disabled,
}: {
  locationOptions: LocationOptionsType[]
  location: string
  setLocation: (location: string) => void
  disabled: boolean
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1>Ubicación</h1>
      <Select onValueChange={(value) => setLocation(value)} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Ubicación" />
        </SelectTrigger>
        <SelectContent className="bg-gray-700 text-white">
          {locationOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {location === "bar" && (
        <span className="flex items-center text-red-300">
          En la barra podrás ver a nuestros cocineros mientras preparan tus
          platos
        </span>
      )}
      {location === "table" && (
        <span className="flex items-center text-red-300">
          En una mesa tendrás más privacidad y serás atendido por un camarero
        </span>
      )}
    </div>
  )
}
