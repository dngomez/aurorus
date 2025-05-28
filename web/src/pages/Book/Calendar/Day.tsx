import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { BAR_PEOPLE, TABLE_PEOPLE } from "@/lib/helpers"
import { cn } from "@/lib/utils"
import { BookType } from "@/types"

export function Day({
  selected,
  onSelect,
  books,
  day,
  disabled = false,
}: {
  selected: Date | undefined
  onSelect: (date: Date) => void
  books: BookType[]
  day: Date
  isToday: boolean
  disabled: boolean
}) {
  // TODO: Check available spaces

  return (
    <button
      className={cn(
        "text-center p-2 border border-transparent relative",
        "transition-colors bg-black/50 disabled:border-transparent disabled:bg-transparent",
        !disabled &&
          "hover:bg-aurorus/50 hover:border-accent hover:text-accent",
        "cursor-pointer disabled:cursor-not-allowed",
        selected?.toDateString() === day.toDateString() &&
          "bg-aurorus text-white"
      )}
      disabled={disabled}
      onClick={() => onSelect(day)}
    >
      {/* {totalSpaces > 0 && totalSpaces < 5 && (
        <span className="absolute top-0.5 right-0.5 px-1 text-xs rounded-full bg-red-500">
          {totalSpaces}
        </span>
      )} */}
      {day.getDate()}
    </button>
  )
}
