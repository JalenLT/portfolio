'use client';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export default function HomeScreen({homeCard, tree, floorLeaves, floorGrass, leaves}: {homeCard: React.ReactNode, tree: React.ReactNode, floorLeaves: React.ReactNode, floorGrass: React.ReactNode, leaves: React.ReactNode}) {
    return (
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} containerStyle={{"overflow": "visible"}}>
            <section className={`overflow-visible h-[85vh] max-h-[85vh] relative`}>
                <div 
                    className={`container mx-auto px-6 py-16 lg:py-24 relative
                    lg:pr-[36vw] xl:pr-[40vw] fade-in`}
                > 
                    <MouseParallaxChild factorX={0.3} factorY={0.3}>
                        { homeCard }
                    </MouseParallaxChild>
                </div>
                <MouseParallaxChild factorX={0.2} factorY={0.2}
                className="absolute right-0 bottom-[-2vw] w-[clamp(500px,38vw,680px)] z-[-1000] fade-in"
                >
                    { tree }
                </MouseParallaxChild>
                <div className={`absolute h-full w-full top-[0vh]`}>
                    { leaves }
                </div>
                <MouseParallaxChild factorX={0.2} factorY={0.2} className={`absolute h-full w-full bottom-[-3vw] fade-in`}>
                    { floorLeaves }
                    { floorGrass }
                </MouseParallaxChild>
            </section>
        </MouseParallaxContainer>
    );
}