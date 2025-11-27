import CustomCard from "./custom_card";
import { Jost } from "next/font/google";
import { Badge } from "./badge";

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

export default function ProjectCard({name, description, tags, href}: {name: string, description: string, tags: string[], href: string}) {
    return (
        <a target="_blank" href={href}>
            <CustomCard>
                <div className="flex">
                    <h1 className={`text-[#746352] text-3xl md:text-4xl font-semibold tracking-tight text-shadow-md text-justify mx-3 md:mx-0 md:text-left mb-3 flex-grow ${jost.className}`}>
                        {name}
                    </h1>
                </div>
                <p className="text-[#a89989] text-lg font-semibold text-shadow-sm text-justify mx-3 md:mx-0 md:text-left mb-4">
                    {description}
                </p>
                <div className="flex flex-wrap justify-between md:justify-start gap-y-2">
                    {tags.map((tag, index) => (
                        <Badge key={"tag-" + name + "-" + index} className="border-[#a89989] text-[#a89989] bg-light font-bold mx-1">{tag}</Badge>
                    ))}
                </div>
            </CustomCard>
        </a>
    );
}