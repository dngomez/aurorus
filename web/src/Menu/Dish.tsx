import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { DishCard } from "./DishCard"
import { DishType } from "@/types"
import { DishDialog } from "./DishDialog"

export function Dish({ dish }: { dish: DishType }) {
  return (
    <Dialog>
      <DialogTrigger className="focus:outline-none">
        <DishCard dish={dish} />
      </DialogTrigger>
      <DialogContent className="bg-black border-gray-700 text-white min-w-2/3">
        <DishDialog dish={dish} />
      </DialogContent>
    </Dialog>
  )
}
