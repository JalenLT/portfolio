import Link from "next/link"
import { Button } from "./button"
import { FolderKanban, Home, Info, PenSquare } from "lucide-react"
import Logo from "./logo"

export default function Header(){
    return <>
        <header className="flex justify-between items-center m-4">
            <Logo />
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