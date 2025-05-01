import { FaCalendarDay, FaHome, FaUsers } from "react-icons/fa"
import { NavLink } from "react-router"

export function Navbar() {
  return (
    <nav className="flex flex-row h-20 justify-between items-center px-10">
      <a
        className="font-komoda text-white flex flex-row gap-1 text-5xl border border-transparent px-4 py-2 animate-fade-border delay-[1.8s]"
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
      <ul className="flex flex-row gap-5">
        <li>
          <NavLink
            className="text-white flex flex-row gap-1 justify-center items-center px-2 py-1 relative after:content-[''] after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:opacity-100 after:origin-center after:scale-0 hover:after:scale-100 after:transition-all after:duration-300"
            to="/home"
          >
            <FaHome />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-white flex flex-row gap-1 justify-center items-center px-2 py-1 relative after:content-[''] after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:opacity-100 after:origin-center after:scale-0 hover:after:scale-100 after:transition-all after:duration-300"
            to="/reservas"
          >
            <FaCalendarDay />
            Reservas
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-white flex flex-row gap-1 justify-center items-center px-2 py-1 relative after:content-[''] after:bg-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:opacity-100 after:origin-center after:scale-0 hover:after:scale-100 after:transition-all after:duration-300"
            to="/nosotros"
          >
            <FaUsers />
            Nosotros
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
