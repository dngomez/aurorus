import { FaCalendarDay, FaInstagram } from "react-icons/fa"
import { BiWorld } from "react-icons/bi"
import { Preloader } from "./Preloader.tsx"
import { NavLink } from "react-router"

export function Landing() {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover h-screen">
      <Preloader loadingTime={1500} />
      <div className="backdrop-blur-sm bg-black/50 w-full h-full flex flex-col justify-center items-center gap-4">
        <h1 className="font-komoda text-white text-center text-9xl border-2 md:border-4 border-white p-4">
          AURORUS
        </h1>
        <div className="flex flex-col md:flex-row gap-3">
          <NavLink
            className="flex flex-row gap-2 w-40 items-center justify-center bg-aurorus p-3 rounded-md text-white transition-colors hover:bg-aurorus/70 border-2 border-transparent focus:bg-aurorus/50 focus:border-aurorus"
            to="/reservas"
          >
            <FaCalendarDay />
            Reservas
          </NavLink>
          <NavLink
            className="flex flex-row gap-2 w-40 items-center justify-center bg-aurorus p-3 rounded-md text-white transition-colors hover:bg-aurorus/70 border-2 border-transparent focus:bg-aurorus/50 focus:border-aurorus"
            to="/home"
          >
            <BiWorld />
            Página Web
          </NavLink>
          <a
            className="flex flex-row gap-2 w-40 items-center justify-center bg-aurorus p-3 rounded-md text-white transition-colors hover:bg-aurorus/70 border-2 border-transparent focus:bg-aurorus/50 focus:border-aurorus"
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
