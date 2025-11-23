'use client';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import CustomCard from "../ui/custom_card";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import { User, GraduationCap, Briefcase } from "lucide-react";
import { Badge } from "../ui/badge";

export default function HomeScreen({homeCard, tree, floorLeaves, floorGrass, leaves}: {homeCard: React.ReactNode, tree: React.ReactNode, floorLeaves: React.ReactNode, floorGrass: React.ReactNode, leaves: React.ReactNode}) {
    const [mainCard, setMainCard] = useState("about");
    return (
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} containerStyle={{"overflow": "visible"}}>
            <section className={`overflow-visible h-[85vh] max-h-[85vh] relative`}>
                <div 
                    className={`container mx-auto md:px-6 md:py-24 md:absolute
                    lg:pr-[36vw] xl:pr-[40vw] fade-in z-100 md:left-[5vw] md:top-0 ${mainCard === "about" ? "" : "hidden"}`}
                > 
                    <MouseParallaxChild factorX={0.3} factorY={0.3}>
                        { homeCard }
                    </MouseParallaxChild>
                </div>
                <div 
                    className={`container mx-auto md:px-6 md:py-24 md:absolute
                    lg:pr-[36vw] xl:pr-[40vw] fade-in z-99 md:left-[5vw] md:top-0 ${mainCard === "education" ? "" : "hidden"}`}
                > 
                    <MouseParallaxChild factorX={0.3} factorY={0.3}>
                        <CustomCard>
                            <h2 className="text-[#a89989] text-3xl md:text-5xl font-semibold text-shadow-sm mb-4">
                                Education
                            </h2>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="shrink rounded-5 overflow-hidden">
                                    <Image src={`/images/logo/uob_logo.png`} alt="Univerity of Bedfordshire Logo" width={100} height={100} />
                                </div>
                                <div className="">
                                    <p className="text-[#746352] font-bold text-xl md:text-2xl">University of Bedfordshire</p>
                                    <p className="text-[#746352] font-semibold text-md md:text-xl">Bachelor of Science - BS, Information Technology</p>
                                    <p className="text-[#746352]">January 2023 - September 2023</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="shrink rounded-5 overflow-hidden">
                                    <Image src={`/images/logo/utt_logo.png`} alt="Univerity of Trinidad and Tobago Logo" width={100} height={100} />
                                </div>
                                <div className="">
                                    <p className="text-[#746352] font-bold text-xl md:text-2xl">University of Trinidad and Tobago</p>
                                    <p className="text-[#746352] font-semibold text-md md:text-xl">Diploma - Software Engineering</p>
                                    <p className="text-[#746352]">2018 - 2020</p>
                                </div>
                            </div>
                        </CustomCard>
                    </MouseParallaxChild>
                </div>
                <div 
                    className={`container mx-auto md:px-6 md:py-24 md:absolute
                    lg:pr-[36vw] xl:pr-[40vw] fade-in z-99 md:left-[5vw] md:top-0 ${mainCard === "experience" ? "" : "hidden"}`}
                > 
                    <MouseParallaxChild factorX={0.3} factorY={0.3}>
                        <CustomCard>
                            <h2 className="text-[#a89989] text-3xl md:text-5xl font-semibold text-shadow-sm mb-4">
                                Experience
                            </h2>
                            <div className="flex gap-3 mb-3">
                                <div className="relative shrink-0 overflow-hidden rounded-lg w-[80px] h-[80px]">
                                    <Image
                                        src="/images/logo/ag_logo.png"
                                        alt="Office of the Attorney General Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="grow">
                                    <p className="text-[#746352] font-bold text-xl md:text-2xl">
                                        Information Technology Analyst / Programmer
                                    </p>
                                    <p className="text-[#746352] font-semibold text-md md:text-xl">
                                        Office of the Attorney General
                                    </p>
                                    <div className="md:flex md:justify-between">
                                        <p className="text-[#a89989] text-md md:text-lg font-semibold text-shadow-sm">
                                            January 2023 - Present
                                        </p>
                                        <div className="flex justify-start">
                                            <Badge className="border-[#a89989] text-[#a89989] bg-light font-bold md:mx-1">
                                                2 Years
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3 mb-3">
                                <div className="relative shrink-0 overflow-hidden rounded-lg w-[80px] h-[80px]">
                                    <Image
                                        src="/images/logo/ag_logo.png"
                                        alt="Office of the Attorney General Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <div className="grow">
                                    <p className="text-[#746352] font-bold text-xl md:text-2xl">
                                        Junior Programmer
                                    </p>
                                    <p className="text-[#746352] font-semibold text-md md:text-xl">
                                        Office of the Attorney General
                                    </p>
                                    <div className="md:flex md:justify-between">
                                        <p className="text-[#a89989] text-md md:text-lg font-semibold text-shadow-sm">
                                            July 2021 - November 2022
                                        </p>
                                        <div className="flex justify-start">
                                            <Badge className="border-[#a89989] text-[#a89989] bg-light font-bold md:mx-1">
                                                1 Year 5 Months
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CustomCard>
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
                <MouseParallaxChild factorX={0.2} factorY={0.2}
                    className="absolute right-0 bottom-0 md:bottom-[-2vw] w-[75vw] md:w-[clamp(500px,38vw,680px)] z-[-1000] fade-in"
                >
                    { tree }
                </MouseParallaxChild>
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