import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"
import { FolderKanban, Home, Info, PenSquare } from "lucide-react"

export default function Header(){
    return <>
        <header className="flex justify-between items-center m-4">
            <Link href="/">
                <Image 
                    src="/Stefan Seunarine Logo Light.png" 
                    alt="Stefan Seunarine's Logo"
                    width={60}
                    height={60}
                    className="rounded-full shadow-md"
                />
            </Link>
            <div className="flex gap-3">
                <Button 
                    variant="outline" 
                    className="rounded-full border-2 border-slate-400 dark:border-slate-600 shadow-md hover:shadow-xl"
                    asChild
                >
                    <Link href="/">
                        <Home/> Home
                    </Link>
                </Button>
                <Button 
                    variant="outline" 
                    className="rounded-full border-2 border-slate-400 dark:border-slate-600 shadow-md hover:shadow-xl"
                    asChild
                >
                    <Link href="/">
                        <FolderKanban/> Projects
                    </Link>
                </Button>
                <Button 
                    variant="outline" 
                    className="rounded-full border-2 border-slate-400 dark:border-slate-600 shadow-md hover:shadow-xl"
                    asChild
                >
                    <Link href="/">
                        <PenSquare/> Blog
                    </Link>
                </Button>
                <Button 
                    variant="outline" 
                    className="rounded-full border-2 border-slate-400 dark:border-slate-600 shadow-md hover:shadow-xl"
                    asChild
                >
                    <Link href="/">
                        <Info/> About
                    </Link>
                </Button>
            </div>
        </header>
    </>
}