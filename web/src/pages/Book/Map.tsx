export function Map({ location }: { location: string }) {
  const isBar = location === "bar"
  const isTable = location === "table"

  return (
    <div className="hidden md:flex md:flex-col md:w-1/2 lg:w-2/3 pl-10 bg-black/60 p-4 rounded-md">
      <h1 className="text-center text-white text-2xl font-bold mb-4">Mapa</h1>
      <svg
        width="100%"
        height="100%"
        className="max-h-[600px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
      >
        // Texto
        <text x="400" y="200" className="fill-white text-3xl">
          Cocina
        </text>
        // Barra
        <g
          strokeWidth="1"
          className={
            isBar
              ? "fill-aurorus stroke-accent"
              : "fill-black/45 stroke-gray-500"
          }
        >
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(238 80) rotate(270)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(238 140) rotate(270)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(238 200) rotate(270)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(238 260) rotate(270)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(238 320) rotate(270)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(330 392) rotate(180)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(390 392) rotate(180)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(450 392) rotate(180)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(510 392) rotate(180)"
          />
          <polygon points="250 20, 330 20, 330 300, 580 300, 580 380, 250 380" />
        </g>
        // Mesas
        <g
          strokeWidth="1"
          className={
            isTable
              ? "fill-aurorus stroke-accent"
              : "fill-black/45 stroke-gray-500"
          }
        >
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(70 138)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(70 262) rotate(180)"
          />
          <rect
            width="100"
            height="100"
            x="-50"
            y="-50"
            transform="translate(70 200)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(238 530) rotate(270)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(362 530) rotate(90)"
          />
          <rect
            width="100"
            height="100"
            x="-50"
            y="-50"
            transform="translate(300 530)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(418 530) rotate(270)"
          />
          <polygon
            points="-15 0, -5 -10, 5 -10, 15 0, 15 10, -15 10"
            transform="translate(542 530) rotate(90)"
          />
          <rect
            width="100"
            height="100"
            x="-50"
            y="-50"
            transform="translate(480 530)"
          />
        </g>
        <g className="stroke-1 stroke-gray-300 fill-transparent">
          <rect width="600" height="600" x="0" y="0" />
          {/* <rect width="100" height="10" x="20" y="590" /> */}
          <path
            d="M 20 500 A 100 100, 0, 0, 1, 120 600"
            strokeDasharray={"5 5"}
          />
          <rect width="10" height="100" x="20" y="500" />
        </g>
      </svg>
    </div>
  )
}
