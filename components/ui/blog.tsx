"use client";
import { PostMeta } from "@/lib/utils/posts";
import React from "react";
import Markdown from "react-markdown";
import Image from "next/image";
import { Jost } from "next/font/google";
import CustomCard from "@/components/ui/custom_card";
import FloorGrass from "@/components/groups/floor_grass";
import FloorLeaves from "@/components/groups/floor_leaves";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Navigation from "./navigation";
const jost = Jost({
	variable: "--font-jost",
	subsets: ["latin"],
});

export default function Blog({post}: {post: PostMeta}){
	return (
		<MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} containerStyle={{"overflow": "visible"}}>
			<Navigation left={{text: "Blogs", path: "/blogs"}} />
			<div className="relative overflow-x-clip">
				<div className="relative h-[90vh]">
					<div className="absolue left-[0vw] max-w-[35vw] mx-5">
						<MouseParallaxChild factorX={0.3} factorY={0.3}>
							<CustomCard>
								<h1 className={`text-[#746352] text-4xl md:text-5xl font-semibold tracking-tight text-shadow-md flex-grow ${jost.className}`}>
									{post.title}
								</h1>
								<h2 className="text-[#a89989] text-lg font-semibold text-shadow-md mb-4">
									{post.description}
								</h2>
								<div className="relative">
									<div className="mt-2 text-xs text-[#746352]">
										{post.date && <span>{new Date(post.date).toDateString()}</span>}
										{post.author && <span> • {post.author}</span>}
									</div>
								</div>
							</CustomCard>
						</MouseParallaxChild>
					</div>
					<div className="absolute right-[0vw] top-[0vw] max-w-[60vw] max-h-[80vh] h-[80vh] overflow-y-scroll faded-overflow mr-2">
						<article className="prose prose-neutral dark:prose-invert max-w-none">
							<MouseParallaxChild factorX={0.3} factorY={0.3}>
								<CustomCard>
									<Markdown components={
										{
											h1: ({ node, ...props }) => (
											<h1
												className="text-3xl md:text-4xl font-semibold text-[#746352] leading-tight mb-4"
												{...props}
											/>
											),
											h2: ({ node, ...props }) => (
											<h2
												className="text-2xl md:text-3xl font-semibold text-[#a89989] mt-6 mb-2"
												{...props}
											/>
											),
											p: ({ node, ...props }) => (
											<p
												className="text-base leading-relaxed text-[#746352] mb-3"
												{...props}
											/>
											),
										}}
									>
										{post.content}
									</Markdown>
								</CustomCard>
							</MouseParallaxChild>
						</article>
					</div>
					<MouseParallaxChild factorX={0.3} factorY={0.3} className="absolute left-[83vw] top-[40vh] h-full w-full opacity-[70%] z-[-100]">
						<Image src={`/images/src/fence_side.png`} alt="Fence" width={400} height={400} className={``} />
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.2} factorY={0.2} className="absolute left-[85vw] top-[46vh] h-full w-full z-[-48]">
						<Image src={`/images/src/fence_side.png`} alt="Fence" width={400} height={400} className={``} />
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.1} factorY={0.1} className="absolute left-[5vw] top-[30vh] h-full w-full z-[-100] drop-shadow-lg drop-shadow-black/60">
						<Image src={`/images/src/creature_resting_on_stone.png`} alt="Creature Resting On Stone" width={400} height={400} className={``} />
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.1} factorY={0.1} className="absolute left-[0vw] top-[0vh] h-full w-full z-[-50]">
						<FloorGrass direction="right" />
						<FloorLeaves direction="right" />
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.1} factorY={0.1} className="absolute left-[0vw] top-[0vh] h-full w-full z-[-49]">
						<FloorGrass direction="left" />
						<FloorLeaves direction="left" />
					</MouseParallaxChild>
				</div>
			</div>
		</MouseParallaxContainer>
	);
}