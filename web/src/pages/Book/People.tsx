import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function People({
  peopleOptions,
  setPeople,
  disabled,
}: {
  peopleOptions: number[]
  setPeople: (people: number) => void
  disabled: boolean
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1>Personas</h1>
      <Select onValueChange={(value) => setPeople(parseInt(value))} disabled={disabled}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Personas" />
        </SelectTrigger>
        <SelectContent className="bg-gray-700 text-white">
          {peopleOptions.map((o) => (
            <SelectItem key={o} value={o.toString()}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
