import { useState } from "react"
import { FaCalendarDay, FaInstagram, FaUsers, FaWhatsapp } from "react-icons/fa"
import { IoClose, IoMenu, IoRestaurant } from "react-icons/io5"
import { NavLink } from "react-router"
import { useNavigate } from "react-router"
import { cn } from "./lib/utils"

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate()

  return (
    <nav className="flex flex-row h-20 justify-between items-center px-10">
      <a
        className="text-3xl md:text-5xl font-komoda text-white flex flex-row gap-1 border border-transparent px-4 py-2 animate-fade-border delay-[1.8s]"
        href="/"
      >
        <span className="relative opacity-0 animate-logo">A</span>
        <span className="relative opacity-0 animate-logo delay-[0.2s]">U</span>
        <span className="relative opacity-0 animate-logo delay-[0.4s]">R</span>
        <span className="relative opacity-0 animate-logo delay-[0.6s]">O</span>
        <span className="relative opacity-0 animate-logo delay-[0.8s]">R</span>
        <span className="relative opacity-0 animate-logo delay-[1s]">U</span>
        <span className="relative opacity-0 animate-logo delay-[1.2s]">S</span>
      </a>
      <ul className={cn("hidden md:flex md:flex-row gap-5")}>
        <li>
          <NavLink
            viewTransition
            className={cn(
              "text-white flex flex-row gap-1 justify-center items-center",
              "px-2 py-1 relative cursor-pointer",
              "after:content-[''] after:bg-white after:absolute",
              "after:bottom-0 after:left-0 after:w-full after:h-0.5",
              "after:opacity-100 after:origin-center after:scale-0",
              "hover:after:scale-100 after:transition-all after:duration-300"
            )}
            to="/reservas"
          >
            <FaCalendarDay />
            Reservas
          </NavLink>
        </li>
        <li>
          <NavLink
            viewTransition
            className={cn(
              "text-white flex flex-row gap-1 justify-center items-center",
              "px-2 py-1 relative cursor-pointer",
              "after:content-[''] after:bg-white after:absolute",
              "after:bottom-0 after:left-0 after:w-full after:h-0.5",
              "after:opacity-100 after:origin-center after:scale-0",
              "hover:after:scale-100 after:transition-all after:duration-300"
            )}
            to="/nosotros"
          >
            <FaUsers />
            Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            viewTransition
            className={cn(
              "text-white flex flex-row gap-1 justify-center items-center",
              "px-2 py-1 relative cursor-pointer",
              "after:content-[''] after:bg-white after:absolute",
              "after:bottom-0 after:left-0 after:w-full after:h-0.5",
              "after:opacity-100 after:origin-center after:scale-0",
              "hover:after:scale-100 after:transition-all after:duration-300"
            )}
            to="/carta"
          >
            <IoRestaurant />
            Carta
          </NavLink>
        </li>
        <li className="flex flex-row">
          <a
            className={cn(
              "text-white flex flex-row gap-1 justify-center items-center",
              "px-1 py-2 relative cursor-pointer",
              "hover:after:scale-100 after:transition-all after:duration-300"
            )}
            href="http://wa.me/56942711979"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            className={cn(
              "text-white flex flex-row gap-1 justify-center items-center",
              "px-1 py-2 relative cursor-pointer",
              "hover:after:scale-100 after:transition-all after:duration-300"
            )}
            href="http://instagram.com/aurorus.rest"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
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
            <button
              className={cn(
                "text-white flex flex-row gap-1 justify-center items-center",
                "px-2 py-1 relative cursor-pointer",
                "after:content-[''] after:bg-white after:absolute",
                "after:bottom-0 after:left-0 after:w-full after:h-0.5",
                "after:opacity-100 after:origin-center after:scale-0",
                "hover:after:scale-100 after:transition-all after:duration-300"
              )}
              onClick={() => {
                navigate("/reservas", { viewTransition: true })
                setShowMenu(false)
              }}
            >
              <FaCalendarDay />
              Reservas
            </button>
          </li>
          <li className="w-40 flex justify-center">
            <button
              className={cn(
                "text-white flex flex-row gap-1 justify-center items-center",
                "px-2 py-1 relative cursor-pointer",
                "after:content-[''] after:bg-white after:absolute",
                "after:bottom-0 after:left-0 after:w-full after:h-0.5",
                "after:opacity-100 after:origin-center after:scale-0",
                "hover:after:scale-100 after:transition-all after:duration-300"
              )}
              onClick={() => {
                navigate("/nosotros", { viewTransition: true })
                setShowMenu(false)
              }}
            >
              <FaUsers />
              Nosotros
            </button>
          </li>
          <li className="w-40 flex justify-center">
            <button
              className={cn(
                "text-white flex flex-row gap-1 justify-center items-center",
                "px-2 py-1 relative cursor-pointer",
                "after:content-[''] after:bg-white after:absolute",
                "after:bottom-0 after:left-0 after:w-full after:h-0.5",
                "after:opacity-100 after:origin-center after:scale-0",
                "hover:after:scale-100 after:transition-all after:duration-300"
              )}
              onClick={() => {
                navigate("/carta", { viewTransition: true })
                setShowMenu(false)
              }}
            >
              <IoRestaurant />
              Carta
            </button>
          </li>
          <li className="flex flex-row gap-1">
            <a
              className={cn(
                "text-white flex flex-row gap-1 justify-center items-center",
                "px-1 py-2 relative cursor-pointer",
                "hover:after:scale-100 after:transition-all after:duration-300"
              )}
              href="http://wa.me/56942711979"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              className={cn(
                "text-white flex flex-row gap-1 justify-center items-center",
                "px-1 py-2 relative cursor-pointer",
                "hover:after:scale-100 after:transition-all after:duration-300"
              )}
              href="http://instagram.com/aurorus.rest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
