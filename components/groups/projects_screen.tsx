'use client';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

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
                <div className="pointer-events-none relative h-[90vh] max-h-[90vh] w-[100vw] overflow-hidden">
                    <div className={`absolute h-full w-full top-[0vh] right-[-55vw]`}>
                        { leaves }
                    </div>
                    <div 
                        className={`pointer-events-auto absolute max-h-[65vh] max-w-[50vw] w-full right-[1vw] top-[0vh] overflow-y-scroll faded-overflow container mx-auto px-6`}
                    > 
                        <MouseParallaxChild factorX={0.3} factorY={0.3} className="grid grid-cols-1 gap-3">
                            { projectCards }
                        </MouseParallaxChild>
                    </div>
                    <div 
                        className={`absolute left-[0vw] top-[0vh] px-6`}
                    > 
                        <MouseParallaxChild factorX={0.3} factorY={0.3} className="grid grid-cols-1 gap-3">
                            { title }
                            { description }
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
                    <MouseParallaxChild factorX={0.2} factorY={0.2} className="absolute left-[-2vw] top-[40vh] h-full w-full opacity-[70%]">
                        { fenceFront }
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.3} factorY={0.3} className="absolute left-[-8vw] top-[46vh] h-full w-full">
                        { fenceBack }
                    </MouseParallaxChild>
                </div>
            </MouseParallaxContainer>
        </>
    );
}