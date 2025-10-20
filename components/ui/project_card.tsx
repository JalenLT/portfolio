import CustomCard from "./custom_card";
import { Jost } from "next/font/google";
import { Badge } from "./badge";

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

export default function ProjectCard({name, description, tags, icon}: {name: string, description: string, tags: string[], icon: React.ReactNode}) {
    return (
        <CustomCard>
            <div className="flex">
                {icon}
                <h1 className={`text-[#746352] text-3xl md:text-4xl font-semibold tracking-tight text-shadow-md mb-3 flex-grow ${jost.className}`}>
                    {name}
                </h1>
            </div>
            <p className="text-[#a89989] text-lg font-semibold text-shadow-sm mb-4">
                {description}
            </p>
            <div className="flex">
                {tags.map((tag, index) => (
                    <Badge key={"tag-" + name + "-" + index} className="border-[#a89989] text-[#a89989] mx-1">{tag}</Badge>
                ))}
            </div>
        </CustomCard>
    );
}