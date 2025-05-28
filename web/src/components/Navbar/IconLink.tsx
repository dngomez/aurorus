import { cn } from "@/lib/utils"

export function IconLink({ to, icon }: { to: string; icon: React.ReactNode }) {
  return (
    <a
      className={cn(
        "text-white flex flex-row gap-1 justify-center items-center",
        "px-1 py-2 relative cursor-pointer",
        "hover:after:scale-100 after:transition-all after:duration-300"
      )}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}
