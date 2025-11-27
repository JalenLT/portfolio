import { PostMeta } from "@/lib/utils/posts";
import React from "react";
import Markdown from "react-markdown";
import Image from "next/image";
import { Jost } from "next/font/google";
import CustomCard from "@/components/ui/custom_card";
import FloorGrass from "@/components/groups/floor_grass";
import FloorLeaves from "@/components/groups/floor_leaves";
import Navigation from "./navigation";
const jost = Jost({
	variable: "--font-jost",
	subsets: ["latin"],
});

export default function Blog({post, url}: {post: PostMeta, url: string}) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description:
		post.description ??
		"Learn how subtle UI elements—textures, parallax motion, micro-details, and animated leaves—create depth, polish, and personality in modern interface design.",
		author: {
		"@type": "Person",
		name: "Stefan Seunarine",
		},
		datePublished: post.date,
		mainEntityOfPage: {
		"@type": "WebPage",
		"@id": url,
		},
	};

	return (
		<>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Navigation left={{text: "Blogs", path: "/blogs"}} />
			<div className="relative overflow-x-clip">
				<div className="relative h-[90vh]">
					<div className="hidden md:block relative md:absolute md:left-0 max-w-100 md:max-w-[35vw] mx-5">
						<div >
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
						</div>
					</div>
					<div className="relative max-w-100 mx-auto md:absolute md:right-0 md:top-0 md:max-w-[60vw] max-h-[80vh] h-[80vh] overflow-y-scroll faded-overflow mr-2">
						<article className="prose prose-neutral dark:prose-invert max-w-none">
							<div >
								<CustomCard>
									<Markdown components={
										{
											h1: ({ node, ...props }) => (
											<h1
												className="text-3xl md:text-4xl font-semibold text-[#746352] leading-tight mb-4 text-wrap"
												{...props}
											/>
											),
											h2: ({ node, ...props }) => (
											<h2
												className="text-2xl md:text-3xl font-semibold text-[#a89989] mt-6 mb-2 text-wrap"
												{...props}
											/>
											),
											h3: ({ node, ...props }) => (
											<h3
												className="text-xl md:text-2xl font-semibold text-[#a89989] mt-6 mb-2 text-wrap"
												{...props}
											/>
											),
											p: ({ node, ...props }) => (
											<p
												className="text-base leading-relaxed text-[#746352] mb-3 text-wrap"
												{...props}
											/>
											),
											code: ({ node, className, ...props }) => {
											const isInline = !className;
											return isInline ? (
												<code
												className="text-wrap bg-neutral-200 dark:bg-neutral-800 px-1 py-0.5 rounded"
												{...props}
												/>
											) : (
												<code
												className="text-wrap whitespace-pre-wrap"
												{...props}
												/>
											);
											},
											pre: ({ node, ...props }) => (
											<pre
												className="text-wrap whitespace-pre-wrap bg-neutral-100 dark:bg-neutral-900 p-4 rounded-md"
												{...props}
											/>
											),
										}}
									>
										{post.content}
									</Markdown>
								</CustomCard>
							</div>
						</article>
					</div>
					<div className="absolute left-[44vw] md:left-[83vw] top-[40vh] scale-50 md:scale-100 h-full w-full opacity-70 z-[-100]">
						<Image src={`/images/src/fence_side.png`} alt="Fence" width={400} height={400} className={``} />
					</div>
					<div className="absolute left-[48vw] md:left-[85vw] top-[46vh] scale-50 md:scale-100 h-full w-full z-[-48]">
						<Image src={`/images/src/fence_side.png`} alt="Fence" width={400} height={400} className={``} />
					</div>
					<div className="absolute left-[-27vw] top-[40vh] md:left-[5vw] md:top-[30vh] scale-50 md:scale-100 h-full w-full z-[-100] drop-shadow-lg drop-shadow-black/60">
						<Image src={`/images/src/creature_resting_on_stone.png`} alt="Creature Resting On Stone" width={400} height={400} className={``} />
					</div>
					<div className="absolute left-0 top-0 h-full w-full -z-50">
						<FloorGrass direction="right" />
						<FloorLeaves direction="right" />
					</div>
					<div className="absolute left-0 top-0 h-full w-full z-[-49]">
						<FloorGrass direction="left" />
						<FloorLeaves direction="left" />
					</div>
				</div>
			</div>
		</>
	);
}