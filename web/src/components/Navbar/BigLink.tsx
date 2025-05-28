import { cn } from "@/lib/utils"
import { NavLink } from "react-router"

export function BigLink({
  to,
  label,
  icon,
}: {
  to: string
  label: string
  icon: React.ReactNode
}) {
  return (
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
      to={to}
    >
      {icon}
      {label}
    </NavLink>
  )
}
