"use client";
import { signOut } from "next-auth/react";
import { LogOutIcon } from "lucide-react";

export function LogoutButton() {
  return <LogOutIcon onClick={() => signOut({ redirectTo: "/" })} />;
}
