import { Outlet } from "react-router"
import { Navbar } from "./Navbar"

export function Layout() {
  return (
    <div className="bg-[url('/background.jpg')] bg-cover h-screen">
      <div className="backdrop-blur-sm bg-black/50 w-full h-full text-white">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
