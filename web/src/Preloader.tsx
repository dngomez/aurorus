import { useEffect, useState } from "react"
import { cn } from "./lib/utils"

export function Preloader({ loadingTime }: { loadingTime: number }) {
  const [loaded, setLoaded] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), loadingTime)
    const id2 = setTimeout(() => setDone(true), loadingTime + 700)

    return () => {
      clearTimeout(id)
      clearTimeout(id2)
    }
  }, [])

  if (done) return null

  return (
    <div
      className={cn(
        "fixed flex flex-col justify-center backface-hidden top-0 left-0 right-0 bottom-0 z-9999 w-full h-full",
        "before:content-[''] before:bg-black before:absolute before:top-0 before:bottom-1/2 before:w-full before:duration-700",
        "after:content-[''] after:bg-black after:absolute after:top-1/2 after:bottom-0 after:w-full after:duration-700",
        loaded && "before:translate-y-[-101%] after:translate-y-[101%]"
      )}
    >
      <div
        className={cn(
          "absolute text-center w-full top-1/2 -translate-y-1/2 z-10",
          loaded && "hidden"
        )}
      >
        <h1 className="text-aurorus text-7xl md:text-9xl font-bold mb-2">
          AURORUS
        </h1>
        <div className="h-2 md:h-4 bg-gray-900 w-full overflow-hidden">
          <div className="w-full h-full origin-left bg-aurorus animate-loadingbar" />
        </div>
        <h1 className="text-aurorus text-7xl md:text-9xl font-bold mt-2">
          RESTAURANTE
        </h1>
      </div>
    </div>
  )
}
