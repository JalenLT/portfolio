'use client';
import { MouseParallaxChild } from "react-parallax-mouse";

export default function HomeCardContainer({children, state}: {children: React.ReactNode, state: string}){
    return (
        <div 
            className={`container mx-auto px-6 py-16 lg:py-24 relative
            lg:pr-[36vw] xl:pr-[40vw]  ${state === "home" ? "fade-in" : "fade-out"}`}
        > 
            <MouseParallaxChild factorX={0.3} factorY={0.3}>
                {children}
            </MouseParallaxChild>
        </div>
    );
}