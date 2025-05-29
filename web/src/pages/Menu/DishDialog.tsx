import { cn } from "@/lib/utils"
import { DishType } from "@/types"
import { DialogDescription, DialogTitle } from "@/components/ui/dialog"

export function DishDialog({ dish }: { dish: DishType }) {
  return (
    <div className={cn("text-center")}>
      <img
        className={cn("w-1/2 rounded-md object-contain mx-auto mb-4")}
        src={dish.image}
        alt="Plate img"
      />
      <div
        className={cn(
          "flex flex-col gap-2 text-white xl:text-gray-300 xl:group-hover:text-white",
          "transition-colors"
        )}
      >
        <DialogTitle className="text-2xl font-bold">{dish.name}</DialogTitle>
        <DialogDescription className="text-white text-md">
          {dish.shortDescription}
        </DialogDescription>
        <p>
          Long description about {dish.longDescription} Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Molestias, tempora illum!
          Necessitatibus ab aspernatur nihil iure nobis! Deserunt ipsum error
          iusto, molestiae debitis, quo fugit maxime repellat quos, reiciendis
          facere.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
          eligendi dicta! Tempore, reprehenderit? Ex, doloremque delectus?
          Delectus similique unde, vel vero consectetur labore eum, quibusdam
          dolor reprehenderit nobis aliquam. Asperiores.
        </p>
        <span className="font-bold">${dish.price}</span>
      </div>
    </div>
  )
}
