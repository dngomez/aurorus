import { Outlet } from "react-router"
import { Navbar } from "./Navbar"
import { Toaster } from "./components/ui/sonner"

export function Layout() {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover min-h-screen flex flex-col">
      <div className="backdrop-blur-sm bg-black/50 w-full h-full text-white flex-grow">
        <Navbar />
        <main className="pb-10">
          <Outlet />
        </main>
        <Toaster richColors duration={100000} />
      </div>
    </div>
  )
}
