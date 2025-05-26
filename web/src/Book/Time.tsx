import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Time({
  location,
  setTime,
  disabled = true,
}: {
  location: string
  setTime: (time: string) => void
  disabled?: boolean
}) {
  if (disabled)
    return (
      <div className="flex flex-col gap-2 w-full4">
        <h1>Hora</h1>
        <span>Seleccione una fecha para ver las horas disponibles</span>
      </div>
    )

  switch (location) {
    case "bar":
      return (
        <div className="flex flex-col gap-2 w-full">
          <h1>Hora</h1>
          <Select onValueChange={(value) => setTime(`${value}:00.000`)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seleccione una hora" />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 text-white">
              <SelectItem value="19:00">19:00</SelectItem>
              <SelectItem value="21:00">21:00</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )

    case "table":
      const OPTIONS = [
        "19:00",
        "19:15",
        "19:30",
        "19:45",
        "20:00",
        "20:15",
        "20:30",
        "20:45",
        "21:00",
        "21:15",
        "21:30",
        "21:45",
        "22:00",
      ]
      return (
        <div className="flex flex-col gap-2 w-full4">
          <h1>Hora</h1>
          <Select onValueChange={(value) => setTime(`${value}:00.000`)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Seleccione una hora" />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 text-white">
              {OPTIONS.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )

    default:
      break
  }

  if (location === "bar") {
  } else if (location === "") return <div></div>
}
