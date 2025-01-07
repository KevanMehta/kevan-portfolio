"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: 'Home',
        path:'/',
    },
    {
        name: 'Services',
        path:'/services',
    },
    {
        name: 'Profile',
        path:'/profile',
    },
    {
        name: 'Projects',
        path:'/projects',
    },
    {
        name: 'Contact',
        path:'/contact',
    },
]

const MobileNav = () => {
  const pathname = usePathname();
    return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>

        </SheetTrigger>
        <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
        <div className="mt-32 mt-48 text-center text-2xl">
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Kevan<span className="text-accent">.</span>
                </h1>
            </Link>

        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index)=> {
                return (
                    <Link
                    href={link.path}
                    key={index}
                    className={`${
                        link.path == pathname &&
                        "text-accent border-b-2 border-accent" 
                    } text-xl capitalize hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav