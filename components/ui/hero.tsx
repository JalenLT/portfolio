"use client";
import Image from "next/image";
import { Card, CardContent } from "./card";
import { Jost } from "next/font/google";
import Leaves from "./leaves";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

export default function Hero() {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} containerStyle={{"overflow": "visible"}}>
        <div className="relative overflow-x-clip">
            <section className="overflow-visible h-[85vh] max-h-[85vh] relative">
                <div 
                    className="container mx-auto px-6 py-16 lg:py-24 relative
                    lg:pr-[36vw] xl:pr-[40vw]"
                > 
                    <MouseParallaxChild factorX={0.4} factorY={0.4}>
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
                    </MouseParallaxChild>
                </div>
                <MouseParallaxChild factorX={0.1} factorY={0.1} className="absolute right-0 bottom-[-2vw]
                            w-[clamp(500px,38vw,680px)]
                            -z-1">
                    <Image
                        src="/tree_design.png"
                        alt=""
                        aria-hidden="true"
                        priority
                        width={1200}
                        height={1200}
                        sizes="(min-width:1280px) 40vw, (min-width:1024px) 45vw, 70vw"
                        className="
                            drop-shadow-lg drop-shadow-black/60
                            pointer-events-none select-none
                            object-contain
                            
                        "
                    />
                </MouseParallaxChild>
                <Leaves count={20} />
            </section>
        </div>
    </MouseParallaxContainer>
  );
}