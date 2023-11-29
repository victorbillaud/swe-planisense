export default function RootLayout({
  arrondissement,
  genre,
  children,
}: {
  arrondissement: React.ReactNode
  genre: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <main className="h-full flex flex-row items-center justify-between p-24">
      {arrondissement}
      {genre}
    </main>
  )
}
