import CustomCard from "./custom_card";
import { Jost } from "next/font/google";
import { Mail } from "lucide-react";
import user_data from "@/data/user_data.json";

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

export default function HomeCard(){
    return (
        <CustomCard>
            <h1 className={`text-[#746352] text-4xl md:text-7xl font-semibold tracking-tight text-shadow-md mb-1 md:mb-3 ${jost.className}`}>
                {user_data.name ?? "John Doe"}
            </h1>
            <p className="text-[#a89989] text-2xl md:text-5xl font-semibold text-shadow-sm mb-4">
                {user_data.title ?? "Developer"}
            </p>
            <div className="block md:flex md:justify-between gap-3">
                <blockquote className="text-[#746352]">
                    {user_data.about ?? "I am a developer specializing in building efficient, scalable web applications and crafting intuitive user experiences for complex systems."}
                </blockquote>
                <div className="flex justify-end md:block">
                    <a
                        href={`mailto:${user_data.email ?? ""}`}
                        className="
                            mt-6 inline-flex items-center gap-2
                            rounded-full border-2 bg-[#a89989]
                            px-4 py-2
                            text-white
                            font-bold
                            hover:text-[#746352] hover:border-[#746352] hover:bg-[#fff9f3]
                            transition shadow-md hover:shadow-xl
                        "
                    >
                        <Mail className="w-4 h-4 font-bold" />
                        <span>Contact</span>
                    </a>  
                </div>
            </div>
        </CustomCard>
    );
}