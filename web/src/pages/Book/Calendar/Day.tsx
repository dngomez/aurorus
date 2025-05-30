import { cn } from "@/lib/utils"

export function Day({
  selected,
  onSelect,
  day,
  disabled = false,
}: {
  selected: Date | undefined
  onSelect: (date: Date) => void
  day: Date
  disabled: boolean
}) {
  // TODO: Check available spaces

  return (
    <button
      className={cn(
        "text-center p-2 border border-transparent relative w-full",
        "transition-colors bg-black/50 disabled:border-transparent disabled:bg-transparent",
        !disabled &&
          "border-gray-500 rounded-md hover:bg-aurorus/50 hover:border-accent hover:text-accent",
        "cursor-pointer disabled:cursor-not-allowed",
        selected?.toDateString() === day.toDateString() &&
          "bg-aurorus/70 text-accent border-accent"
      )}
      disabled={disabled}
      onClick={() => onSelect(day)}
    >
      {day.getDate()}
    </button>
  )
}
