import { auth } from "@/server/auth";
import NavBar from "@/components/NavBar";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }
  return (
    <>
      <NavBar />
      {children}
      <div className="h-10" />
    </>
  );
}
