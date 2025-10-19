import Link from "next/link"
import { Button } from "./button"
import { FolderKanban, Home, Info, PenSquare } from "lucide-react"
import Logo from "./logo"
import CustomButton from "./custom_button"

export default function Header(){
    return <>
        <header className="flex justify-between items-center m-4 z-10">
            <Logo />
            <div className="flex gap-3">
                <CustomButton icon={Home} text="Home" path="/" />
                <CustomButton icon={FolderKanban} text="Projects" path="/projects" />
                <CustomButton icon={PenSquare} text="Blog" path="/" />
                <CustomButton icon={Info} text="About" path="/" />
            </div>
        </header>
    </>
}