import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Time({
  setTime,
  timeOptions,
  disabled,
}: {
  setTime: (time: string) => void
  timeOptions: string[]
  disabled: boolean
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1>Hora</h1>
      <Select onValueChange={(value) => setTime(`${value}:00.000`)} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Seleccione una hora" />
        </SelectTrigger>
        <SelectContent className="bg-gray-700 text-white">
          {timeOptions.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
