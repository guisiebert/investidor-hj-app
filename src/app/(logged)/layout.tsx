import NavBar from "@/components/NavBar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavBar />
      {children}
      <div className="h-10" />
    </>
  )
}
