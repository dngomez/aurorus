import { Layout } from "@/components/Layout"
import { DISHES, CATEGORIES } from "@/constants"
import { Category } from "./Category"
import { cn } from "@/lib/utils"
import { PiBowlFoodBold } from "react-icons/pi"
import { useRef } from "react"

export function Menu() {
  const refs = CATEGORIES.map(() => useRef<HTMLElement>(null))

  return (
    <Layout title="Carta">
      <div className={cn("flex flex-row flex-wrap gap-2 justify-center")}>
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() =>
              refs[CATEGORIES.indexOf(category)].current?.scrollIntoView()
            }
            className={cn(
              "flex flex-row gap-2 items-center justify-center",
              "bg-aurorus py-1 px-2 rounded-md text-white transition-colors",
              "hover:bg-aurorus/70 border-2 border-transparent",
              "hover:border-accent hover:text-accent",
              "focus:bg-aurorus/50 focus:border-aurorus",
              "cursor-pointer"
            )}
          >
            <PiBowlFoodBold />
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      <div>
        {CATEGORIES.map((category) => (
          <Category
            refProps={refs[CATEGORIES.indexOf(category)]}
            key={category}
            category={category}
            dishes={DISHES.filter((dish) => dish.category === category)}
          />
        ))}
      </div>
    </Layout>
  )
}
