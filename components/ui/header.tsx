import Image from "next/image";
import { FolderKanban, Home, Info, PenSquare } from "lucide-react"
import CustomButton from "./custom_button"
import LinkDrawer from "./link_drawer"

export default function Header(){
    return <>
        <header className="flex justify-between items-center m-4 z-[20]">
            <LinkDrawer 
                icon={(
                    <Image 
                        src="/images/logo/Stefan Seunarine Logo Light.png" 
                        alt="Stefan Seunarine's Logo"
                        width={60}
                        height={60}
                        className="shrink-0"
                    />
                )} 
                text="Stefan Seunarine"
                path="/"
            />
            <div className="flex gap-3">
                <CustomButton icon={Home} text="Home" path="/" />
                <CustomButton icon={FolderKanban} text="Projects" path="/projects" />
                <CustomButton icon={PenSquare} text="Blog" path="/blogs" />
            </div>
        </header>
    </>
}