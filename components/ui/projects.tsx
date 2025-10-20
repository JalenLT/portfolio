'use client';
// import Leaves from "@/components/ui/leaves";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Leaf from "@/components/ui/leaf";
import FloorItem from "@/components/ui/floor_item";
import Grass from "@/components/ui/grass";
import grass_floor_rtl from "@/data/grass_floor_rtl.json";
import leaves_floor_rtl from "@/data/leaves_floor_rtl.json";
import Image from "next/image";
import ProjectCard from "./project_card";
import { ProjectCardData } from "@/data/project_card_data";
import { Jost } from "next/font/google";

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

export default function Projects() {
    return <>
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
            <div className="pointer-events-none relative h-[90vh] max-h-[90vh] w-[100vw] overflow-hidden">
                <div 
                    className={`pointer-events-auto absolute max-h-[65vh] max-w-[50vw] w-full right-[1vw] top-[0vh] overflow-y-scroll faded-overflow container mx-auto px-6`}
                > 
                    <MouseParallaxChild factorX={0.3} factorY={0.3} className="grid grid-cols-1 gap-3">
                        {ProjectCardData.map((card, index) => {
                            return <ProjectCard key={"project-card-" + index} name={card.name} description={card.description} tags={card.tags} icon={card.icon} />;
                        })}
                    </MouseParallaxChild>
                </div>
                <div 
                    className={`absolute left-[0vw] top-[0vh] px-6`}
                > 
                    <MouseParallaxChild factorX={0.3} factorY={0.3} className="grid grid-cols-1 gap-3">
                        <h1 className={`text-[#746352] text-4xl md:text-5xl font-semibold tracking-tight text-shadow-md flex-grow ${jost.className}`}>
                            Projects
                        </h1>
                        <p className="text-[#a89989] text-lg font-semibold text-shadow-md mb-4">
                            A collection of works I've built
                        </p>
                    </MouseParallaxChild>
                </div>

                <MouseParallaxChild factorX={0.1} factorY={0.1} className="block h-full w-full">
                    <div className="relative h-full w-full">
                        <div className="absolute bottom-[-1vw] h-full w-full">
                            <div className="relative h-full w-full">
                                {leaves_floor_rtl.map((pile, index) => {
                                    return <FloorItem key={"leaf-floor-" + index} data={pile}>
                                        <Leaf animated={false} />
                                    </FloorItem>
                                })}
                                {grass_floor_rtl.map((pile, index) => {
                                    if (pile.rotation !== undefined) {
                                        delete pile.rotation;
                                    }
                                    return <FloorItem key={"grass-floor-" + index} data={pile}>
                                        <Grass size={pile.size * 1.2} />
                                    </FloorItem>
                                })}
                            </div>
                        </div>
                    </div>
                </MouseParallaxChild>

                <MouseParallaxChild factorX={0.2} factorY={0.2} className="absolute left-[-2vw] top-[40vh] h-full w-full opacity-[70%]">
                    <Image src={`/fence_side.png`} alt="Fence" width={350} height={350} className={``} />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.3} factorY={0.3} className="absolute left-[-8vw] top-[46vh] h-full w-full">
                    <Image src={`/fence_side.png`} alt="Fence" width={400} height={400} className={``} />
                </MouseParallaxChild>
            </div>
        </MouseParallaxContainer>
    </>;
}
