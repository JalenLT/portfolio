import { Card, CardContent } from "./card";
import { Jost } from "next/font/google";

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

export default function HomeCard(){
    return (
        <Card className="rounded-[28px] p-6 md:p-8 shadow-sm bg-[#f7f6f2]/90 drop-shadow-xl hover:-translate-y-0.5 transition duration-200 hover:shadow-lg border-none">
            <CardContent className="p-0">
                <h1 className={`text-[#746352] text-6xl md:text-7xl font-semibold tracking-tight text-shadow-md mb-3 ${jost.className}`}>
                    Stefan Seunarine
                </h1>
                <p className="text-[#a89989] text-3xl md:text-5xl font-semibold text-shadow-sm mb-4">
                    Full-stack Developer
                </p>
                <blockquote className="text-[#746352] text-lg">
                    Where ideas take root and grow into experiences.
                </blockquote>
            </CardContent>
        </Card>
    );
}