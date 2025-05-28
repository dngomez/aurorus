import { cn } from "@/lib/utils"
import { Dish } from "./Dish"
import { DishType } from "@/types"

export function Category({
  refProps,
  dishes,
  category,
}: {
  refProps: React.RefObject<HTMLElement | null>
  dishes: DishType[]
  category: string
}) {
  return (
    <section className="my-6" ref={refProps}>
      <h1 className={cn("text-center text-3xl font-bold mb-4")}>
        {category.toUpperCase()}
      </h1>
      <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-4")}>
        {dishes.map((dish) => (
          <Dish key={dish.name} dish={dish} />
        ))}
      </div>
    </section>
  )
}
