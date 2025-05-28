import { useState } from "react"
import { FaCalendarDay, FaInstagram, FaUsers, FaWhatsapp } from "react-icons/fa"
import { IoClose, IoMenu, IoRestaurant } from "react-icons/io5"
import { useNavigate } from "react-router"
import { cn } from "@/lib/utils"
import { BigLink } from "./BigLink"
import { AnimatedLogo } from "./AnimatedLogo"
import { SmallLink } from "./SmallLink"
import { IconLink } from "./IconLink"
import { Login } from "./Login"

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="flex flex-row h-20 justify-between items-center px-10">
      <AnimatedLogo />
      <ul className={cn("hidden md:flex md:flex-row gap-5")}>
        <li>
          <BigLink to="/reservas" label="Reservas" icon={<FaCalendarDay />} />
        </li>
        <li>
          <BigLink to="/carta" label="Carta" icon={<IoRestaurant />} />
        </li>
        <li>
          <BigLink to="/nosotros" label="Nosotros" icon={<FaUsers />} />
        </li>
        <li>
          <Login />
        </li>
        <li className="flex flex-row">
          <IconLink to="http://wa.me/56942711979" icon={<FaWhatsapp />} />
        </li>
        <li>
          <IconLink
            to="http://instagram.com/aurorus.rest"
            icon={<FaInstagram />}
          />
        </li>
      </ul>
      <div className="md:hidden">
        <button className="cursor-pointer" onClick={() => setShowMenu(true)}>
          <IoMenu />
        </button>
        <ul
          className={cn(
            "absolute mx-auto w-full left-0 top-0 flex flex-col md:hidden gap-5 items-center",
            "bg-black/80 backdrop-blur-sm py-4",
            showMenu ? "translate-y-0" : "translate-y-[-100%]",
            "transition-transform duration-300 ease-in-out"
          )}
        >
          <li className="absolute top-4 right-4">
            <button
              className="cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <IoClose onClick={() => setShowMenu(false)} />
            </button>
          </li>
          <li className="w-40 flex justify-center">
            <SmallLink
              onClick={() => {
                navigate("/reservas", { viewTransition: true })
                setShowMenu(false)
              }}
              icon={<FaCalendarDay />}
              label="Reservas"
            />
          </li>
          <li className="w-40 flex justify-center">
            <SmallLink
              onClick={() => {
                navigate("/carta", { viewTransition: true })
                setShowMenu(false)
              }}
              icon={<IoRestaurant />}
              label="Carta"
            />
          </li>
          <li className="w-40 flex justify-center">
            <SmallLink
              onClick={() => {
                navigate("/nosotros", { viewTransition: true })
                setShowMenu(false)
              }}
              icon={<FaUsers />}
              label="Nosotros"
            />
          </li>
          <li className="w-40 flex justify-center">
            <Login />
          </li>
          <li className="flex flex-row gap-1">
            <IconLink to="http://wa.me/56942711979" icon={<FaWhatsapp />} />
            <IconLink
              to="http://instagram.com/aurorus.rest"
              icon={<FaInstagram />}
            />
          </li>
        </ul>
      </div>
    </nav>
  )
}
