'use client';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import CustomCard from "../ui/custom_card";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { User, GraduationCap, Briefcase } from "lucide-react";
import { Badge } from "../ui/badge";
import EducationCard from "../ui/education_card";
import HomeCard from "../ui/home_card";
import ExperienceCard from "../ui/experience_card";

export default function HomeScreen({tree, floorLeaves, floorGrass, leaves}: {tree: React.ReactNode, floorLeaves: React.ReactNode, floorGrass: React.ReactNode, leaves: React.ReactNode}) {
    const [mainCard, setMainCard] = useState("about");
    return (
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} containerStyle={{"overflow": "visible"}}>
            <MouseParallaxChild factorX={0.2} factorY={0.2}
                className="absolute right-0 bottom-0 md:bottom-[-2vw] w-[75vw] md:w-[clamp(500px,38vw,680px)] z-[-1000] fade-in"
            >
                { tree }
            </MouseParallaxChild>
            <section className={` h-[85vh] max-h-[85vh] overflow-hidden faded-overflow relative`}>
                <div 
                    className={`container mx-auto md:px-6 md:py-24 md:absolute
                    lg:pr-[36vw] xl:pr-[40vw] fade-in z-100 md:left-[5vw] md:top-0 ${mainCard === "about" ? "" : "hidden"}`}
                > 
                    <MouseParallaxChild factorX={0.3} factorY={0.3}>
                        <HomeCard />
                    </MouseParallaxChild>
                </div>
                <div 
                    className={`container mx-auto md:px-6 md:py-24 md:absolute
                    lg:pr-[36vw] xl:pr-[40vw] fade-in z-99 md:left-[5vw] md:top-0 ${mainCard === "education" ? "" : "hidden"}`}
                > 
                    <MouseParallaxChild factorX={0.3} factorY={0.3}>
                        <EducationCard />
                    </MouseParallaxChild>
                </div>
                <div 
                    className={`container mx-auto md:px-6 md:py-24 md:absolute
                    lg:pr-[36vw] xl:pr-[40vw] fade-in z-99 md:left-[5vw] md:top-0 ${mainCard === "experience" ? "" : "hidden"}`}
                > 
                    <MouseParallaxChild factorX={0.3} factorY={0.3}>
                        <ExperienceCard />
                    </MouseParallaxChild>
                </div>
                <div className="container mx-auto px-6 py-3 md:py-14 md:absolute
                    lg:pr-[36vw] xl:pr-[40vw] fade-in z-101 md:left-[5vw] md:top-0">
                    <MouseParallaxChild factorX={0.3} factorY={0.3}>
                        <div className="flex justify-between md:justify-start gap-3">
                            <Button 
                                onClick={() => setMainCard("about")}
                                variant="outline" 
                                className="cursor-pointer rounded-2 border-2 border-[#a89989] text-[#a89989] hover:text-[#746352] hover:border-[#746352] hover:bg-[#fff9f3] transition shadow-md hover:shadow-xl"
                            >
                                <User /> About
                            </Button>
                            <Button 
                                onClick={() => setMainCard("education")}
                                variant="outline" 
                                className="cursor-pointer rounded-2 border-2 border-[#a89989] text-[#a89989] hover:text-[#746352] hover:border-[#746352] hover:bg-[#fff9f3] transition shadow-md hover:shadow-xl"
                            >
                                <GraduationCap /> Education
                            </Button>
                            <Button 
                                onClick={() => setMainCard("experience")}
                                variant="outline" 
                                className="cursor-pointer rounded-2 border-2 border-[#a89989] text-[#a89989] hover:text-[#746352] hover:border-[#746352] hover:bg-[#fff9f3] transition shadow-md hover:shadow-xl"
                            >
                                <Briefcase /> Experience
                            </Button>
                        </div>
                    </MouseParallaxChild>
                </div>
                
                <div className={`absolute h-full w-full right-[15vw] top-[30vh] scale-75 md:scale-100 md:right-0 md:top-0 z-[-1000]`}>
                    { leaves }
                </div>
                <MouseParallaxChild factorX={0.2} factorY={0.2} className={`absolute h-full w-full bottom-[-3vw] fade-in z-[-1000]`}>
                    { floorLeaves }
                    { floorGrass }
                </MouseParallaxChild>
            </section>
        </MouseParallaxContainer>
    );
}