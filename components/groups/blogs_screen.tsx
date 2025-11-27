"use client";
import Navigation from "@/components/ui/navigation";
import BlogCard from "@/components/ui/blog_card";
import Image from "next/image";
import blogs from "@/data/blog_card_data.json";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Jost } from "next/font/google";
import CustomCard from "@/components/ui/custom_card";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import FloorGrass from "@/components/groups/floor_grass";
import FloorLeaves from "@/components/groups/floor_leaves";
const jost = Jost({
	variable: "--font-jost",
	subsets: ["latin"],
});

export default function BlogsScreen(){
	let amountPerColumn = Math.floor(blogs.length / 3);
    const [ search, setSearch ] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState(
        blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
    );

    useEffect(() => {
        setFilteredBlogs(
            blogs.filter((blog) => blog.title.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search]);
    amountPerColumn = Math.ceil(filteredBlogs.length / 3);
    
    return <>
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} containerStyle={{"overflow": "visible"}}>
            <div className="relative max-h-screen overflow-hidden overflow-x-clip">
                <Navigation right={{text: "Projects", path: "/projects"}} />
                <div className="relative h-[90vh]">
                    <div className="relative max-w-100 md:absolute md:left-0 md:max-w-[35vw] mx-5">
                        <MouseParallaxChild factorX={0.3} factorY={0.3}>
                            <CustomCard>
                                <h1 className={`text-[#746352] text-4xl md:text-5xl font-semibold tracking-tight text-shadow-md flex-grow ${jost.className}`}>
                                    Blogs
                                </h1>
                                <h2 className="text-[#a89989] text-lg font-semibold text-shadow-md mb-4">
                                    A journal of experiments in code, creativity, and growth.
                                </h2>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a89989]" />
                                    <input type="search" placeholder="Search" name="noautofill_search" className="w-full pl-10 pr-3 py-2 rounded-full border-2 border-[#a89989] text-[#a89989] bg-white hover:text-[#746352] hover:border-[#746352] hover:bg-[#fff9f3] transition shadow-md hover:shadow-xl" onChange={(e) => setSearch(e.target.value)} autoComplete="off" />
                                </div>
                            </CustomCard>
                        </MouseParallaxChild>
                    </div>
                    <div className="relative max-w-100 md:absolute md:right-0 md:top-0 md:max-w-[60vw] max-h-[50vh] h-[50vh] md:max-h-[80vh] md:h-[80vh] overflow-y-scroll faded-overflow mx-auto mr-2 mt-3 md:mt-0">
                        <MouseParallaxChild factorX={0.3} factorY={0.3} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid auto-rows-max gap-4">
                                {filteredBlogs.slice(0, amountPerColumn).map((blog, index) => {
                                    return <BlogCard 
                                        key={"blog-card-" + index}
                                        title={blog.title}
                                        description={blog.description}
                                        date={blog.date}
                                        time={blog.time}
                                        href={blog.href}
                                        imageTop={true}
                                    />
                                })}
                            </div>
                            <div className="grid auto-rows-max gap-4">
                                {filteredBlogs.slice(amountPerColumn, amountPerColumn * 2).map((blog, index) => {
                                    return <BlogCard 
                                        key={"blog-card-" + index}
                                        title={blog.title}
                                        description={blog.description}
                                        date={blog.date}
                                        time={blog.time}
                                        href={blog.href}
                                        imageTop={true}
                                    />
                                })}
                            </div>
                            <div className="grid auto-rows-max gap-4">
                                {filteredBlogs.slice(amountPerColumn * 2).map((blog, index) => {
                                    return <BlogCard 
                                        key={"blog-card-" + index}
                                        title={blog.title}
                                        description={blog.description}
                                        date={blog.date}
                                        time={blog.time}
                                        href={blog.href}
                                        imageTop={true}
                                    />
                                })}
                            </div>
                        </MouseParallaxChild>
                    </div>
                    <MouseParallaxChild factorX={0.3} factorY={0.3} className="absolute left-[44vw] md:left-[83vw] top-[40vh] scale-50 md:scale-100 h-full w-full opacity-70 z-[-100]">
                        <Image src={`/images/src/fence_side.png`} alt="Fence" width={400} height={400} className={``} />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.2} factorY={0.2} className="absolute left-[48vw] md:left-[85vw] top-[46vh] scale-50 md:scale-100 h-full w-full z-[-48]">
                        <Image src={`/images/src/fence_side.png`} alt="Fence" width={400} height={400} className={``} />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.1} factorY={0.1} className="absolute left-[-27vw] top-[40vh] md:left-[5vw] md:top-[30vh] scale-50 md:scale-100 h-full w-full z-[-100] drop-shadow-lg drop-shadow-black/60">
                        <Image src={`/images/src/creature_resting_on_stone.png`} alt="Creature Resting On Stone" width={400} height={400} className={``} />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.1} factorY={0.1} className="absolute left-0 top-0 h-full w-full -z-50">
                        <FloorGrass direction="right" />
                        <FloorLeaves direction="right" />
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.1} factorY={0.1} className="absolute left-0 top-0 h-full w-full z-[-49]">
                        <FloorGrass direction="left" />
                        <FloorLeaves direction="left" />
                    </MouseParallaxChild>
                </div>
            </div>
        </MouseParallaxContainer>
    </>;
}