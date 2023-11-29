import { Nav } from "./Nav"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full h-full flex flex-col items-start justify-between p-24">
      <Nav />
      {children}
    </main>
  )
}
