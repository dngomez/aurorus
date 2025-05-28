import { cn } from "@/lib/utils"
import { DishType } from "@/types"

export function DishCard({ dish }: { dish: DishType }) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-4 p-4 bg-black/70 rounded-lg",
        "border border-gray-500 group hover:border-accent",
        "transition-colors cursor-pointer"
      )}
    >
      <img
        className={cn(
          "w-1/4 md:w-1/3 xl:w-1/4 rounded-md object-contain mx-auto",
          "transition-all",
          "xl:grayscale group-hover:grayscale-0"
        )}
        src={dish.image}
        alt="Plate img"
      />
      <div
        className={cn(
          "flex flex-col gap-2 text-white xl:text-gray-300 xl:group-hover:text-white",
          "transition-colors"
        )}
      >
        <h1 className="text-2xl font-bold group-hover:text-accent transition-colors">
          {dish.name}
        </h1>
        <p>
          {dish.shortDescription} Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Molestias, tempora illum! Necessitatibus ab
          aspernatur nihil iure nobis! Deserunt ipsum error iusto, molestiae
          debitis, quo fugit maxime repellat quos, reiciendis facere.
        </p>
        <span className="font-bold">${dish.price}</span>
      </div>
    </div>
  )
}
