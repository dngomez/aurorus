import { FaCalendarDay, FaInstagram } from "react-icons/fa"
import { Preloader } from "./Preloader.tsx"
import { NavLink } from "react-router"
import { IoRestaurant } from "react-icons/io5"
import { Button } from "./components/ui/button.tsx"
import { cn } from "./lib/utils.ts"

export function Landing() {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover min-h-screen">
      <Preloader loadingTime={1500} />
      <div className="backdrop-blur-sm bg-black/50 w-full min-h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="font-komoda text-white text-center text-9xl border-2 md:border-4 border-white p-4">
          AURORUS
        </h1>
        <div className="flex flex-col md:flex-row gap-3">
          <NavLink
            className={cn(
              "flex flex-row gap-2 w-40 items-center justify-center",
              "bg-aurorus p-3 rounded-md text-white transition-colors",
              "hover:bg-aurorus/70 border-2 border-transparent",
              "hover:border-accent hover:text-accent",
              "focus:bg-aurorus/50 focus:border-aurorus"
            )}
            to="/reservas"
          >
            <FaCalendarDay />
            Reservas
          </NavLink>
          <NavLink
            className={cn(
              "flex flex-row gap-2 w-40 items-center justify-center",
              "bg-aurorus p-3 rounded-md text-white transition-colors",
              "hover:bg-aurorus/70 border-2 border-transparent",
              "hover:border-accent hover:text-accent",
              "focus:bg-aurorus/50 focus:border-aurorus"
            )}
            to="/carta"
          >
            <IoRestaurant />
            Carta
          </NavLink>
          <a
            className={cn(
              "flex flex-row gap-2 w-40 items-center justify-center",
              "bg-aurorus p-3 rounded-md text-white transition-colors",
              "hover:bg-aurorus/70 border-2 border-transparent",
              "hover:border-accent hover:text-accent",
              "focus:bg-aurorus/50 focus:border-aurorus"
            )}
            href="https://www.instagram.com/aurorus.rest/"
          >
            <FaInstagram />
            Instagram
          </a>
        </div>
        <div className="hidden md:flex flex-row gap-3 justify-center mb-3 flex-wrap">
          <img
            className="w-1/2 md:w-1/6 rounded-md"
            src="/plato2.jpg"
            alt="Plato 2"
          />
          <img
            className="w-1/2 md:w-1/6 rounded-md"
            src="/plato1.jpg"
            alt="Plato 1"
          />
          <img
            className="w-1/2 md:w-1/6 rounded-md"
            src="/plato3.jpg"
            alt="Plato 3"
          />
        </div>
      </div>
    </div>
  )
}
