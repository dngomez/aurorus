export function Layout({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className="px-10">
      <h1 className="text-white text-4xl md:text-7xl font-bold mb-4 text-center">
        {title}
      </h1>
      {children}
    </div>
  )
}
