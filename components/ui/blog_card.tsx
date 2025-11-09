import CustomCard from "./custom_card";
import { Jost } from "next/font/google";
import { Badge } from "./badge";
import Link from "next/link";

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

export default function BlogCard({title, description, date, time, image, href, imageTop = true}: {title: string, description: string, date: string, time: string, image?: React.ReactNode, href: string, imageTop?: boolean}) {
    return (
            <CustomCard>
                <Link href={href}>
                    {imageTop && image && (<div className="max-h-[100px] overflow-hidden">
                        {image}
                    </div>)}
                    <div className="flex">
                        {!imageTop && image && (<div className="max-h-[100px] overflow-hidden">
                            {image}
                        </div>)}
                        <h1 className={`text-[#746352] text-3xl md:text-4xl font-semibold tracking-tight text-shadow-md mb-3 flex-grow ${jost.className}`}>
                            {title}
                        </h1>
                    </div>
                    <p className="text-[#a89989] text-lg font-semibold text-shadow-sm mb-4">
                        {description}
                    </p>
                    <div className="flex justify-between">
                        <span className="text-[#a89989] text-lg font-semibold text-shadow-sm">
                            {date}
                        </span>
                        <Badge className="border-[#a89989] text-[#a89989] bg-light font-bold mx-1">{time} Min</Badge>
                    </div>
                </Link>
            </CustomCard>
    );
}