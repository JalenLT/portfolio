import Link from "next/link"
import { Button } from "./button"
import { LucideIcon } from "lucide-react";

export default function CustomButton({icon: Icon, text, path = "", onClick = () => void(0)}: {icon: LucideIcon, text: string, path?: string, onClick?: () => void}) {
    if(path){
        return (
            <Button 
                variant="outline" 
                className="cursor-pointer rounded-full border-2 border-[#a89989] text-[#a89989] hover:text-[#746352] hover:border-[#746352] hover:bg-[#fff9f3] transition shadow-md hover:shadow-xl"
                asChild
            >
                <Link href={path}>
                    <Icon /> {text}
                </Link>
            </Button>
        );
    }else{
        return (<Button 
            onClick={onClick}
            variant="outline" 
            className="cursor-pointer rounded-full border-2 border-[#a89989] text-[#a89989] hover:text-[#746352] hover:border-[#746352] hover:bg-[#fff9f3] transition shadow-md hover:shadow-xl"
        >
            <Icon /> {text}
        </Button>);
    }
}