"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { User } from "next-auth";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400", variable: "--font-pacifico" });

function Navbar() {
  const { setTheme } = useTheme();

  const { data: session } = useSession();
  const user: User = session?.user;

  return (
    <nav className="p-4 shadow-md bg-transparent">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold mb-4 md:mb-0">
          <span className={`${pacifico.className} text-3xl`}>Secret Alley</span>
        </Link>
        {session ? (
          <>
            <span className="mr-4">Welcome, {user.username || user.email}</span>
            <Button
              onClick={() => signOut()}
              className="w-full md:w-auto bg-slate-100 text-black"
              variant="outline"
            >
              Logout
            </Button>
          </>
        ) : (
          <div className="flex gap-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/sign-in">
              <Button className="w-full md:w-auto" variant={"outline"}>
                Login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="w-full md:w-auto">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
