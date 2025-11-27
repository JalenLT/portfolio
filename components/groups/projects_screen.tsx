'use client';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Image from "next/image";

export default function ProjectsScreen({projectCards, title, description, floorLeaves, floorGrass, leaves, fenceFront, fenceBack}: {
    projectCards: React.ReactNode, 
    title: React.ReactNode, 
    description: React.ReactNode, 
    floorLeaves: React.ReactNode, 
    floorGrass: React.ReactNode, 
    leaves: React.ReactNode, 
    fenceFront: React.ReactNode, 
    fenceBack: React.ReactNode
}){
    return (
        <>
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                <div className="pointer-events-none relative h-[90vh] max-h-[90vh] overflow-hidden">
                    <div className={`absolute h-full w-full top-0 right-[-55vw]`}>
                        { leaves }
                    </div>
                    <div 
                        className={`relative md:absolute md:left-0 md:top-0 px-6`}
                    > 
                        <MouseParallaxChild factorX={0.3} factorY={0.3} className="grid grid-cols-1 gap-3">
                            { title }
                            { description }
                        </MouseParallaxChild>
                    </div>
                    <div 
                        className={`pointer-events-auto relative md:absolute max-h-[65vh] max-w-[100vw] md:max-w-[50vw] w-full right-[1vw] md:top-0 overflow-y-scroll faded-overflow container mx-auto px-6 z-100`}
                    > 
                        <MouseParallaxChild factorX={0.3} factorY={0.3} className="grid grid-cols-1 gap-3">
                            { projectCards }
                        </MouseParallaxChild>
                    </div>

                    <MouseParallaxChild factorX={0.1} factorY={0.1} className="block h-full w-full">
                        <div className="relative h-full w-full">
                            <div className="absolute bottom-[-1vw] h-full w-full">
                                <div className="relative h-full w-full">
                                    { floorLeaves }
                                    { floorGrass }
                                </div>
                            </div>
                        </div>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.2} factorY={0.2} className="absolute left-[-29vw] md:left-[-2vw] top-[40vh] md:top-[40vh] scale-50 md:scale-100 h-full w-full opacity-70">
                        { fenceFront }
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.3} factorY={0.3} className="absolute left-[-35vw] md:left-[-8vw] top-[46vh] md:top-[46vh] scale-50 md:scale-100 h-full w-full">
                        { fenceBack }
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.3} factorY={0.3} className="absolute left-[33vw] md:left-[20vw] top-[43vh] md:top-[38vh] scale-50 md:scale-100 h-full w-full drop-shadow-lg drop-shadow-black/60">
                        <Image src={`/images/src/creature_running_left.png`} alt="Creature Running Left" width={300} height={300} />
                    </MouseParallaxChild>
                </div>
            </MouseParallaxContainer>
        </>
    );
}