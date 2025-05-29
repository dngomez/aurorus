import { Layout } from "@/components/Layout"
import { DISHES } from "@/constants"
import { Category } from "./Category"
import { cn } from "@/lib/utils"
import { useRef } from "react"
import { PiBowlFoodBold } from "react-icons/pi"
import { FaIceCream } from "react-icons/fa"
import { LuSalad } from "react-icons/lu"
import { BiDrink } from "react-icons/bi"
import { capitalizeWord } from "@/lib/helpers"

const CATEGORIES = [
  { name: "entrada", icon: <LuSalad /> },
  { name: "fondo", icon: <PiBowlFoodBold /> },
  { name: "postre", icon: <FaIceCream /> },
  { name: "bebida", icon: <BiDrink /> },
]

export function Menu() {
  const refs = CATEGORIES.map(() => useRef<HTMLElement>(null))

  return (
    <Layout title="Carta">
      <div className={cn("flex flex-row flex-wrap gap-2 justify-center")}>
        {CATEGORIES.map((category) => (
          <button
            key={category.name}
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
            {category.icon}
            {capitalizeWord(category.name)}
          </button>
        ))}
      </div>
      <div>
        {CATEGORIES.map((category) => (
          <Category
            refProps={refs[CATEGORIES.indexOf(category)]}
            key={category.name}
            category={capitalizeWord(category.name)}
            icon={category.icon}
            dishes={DISHES.filter((dish) => dish.category === category.name)}
          />
        ))}
      </div>
    </Layout>
  )
}
