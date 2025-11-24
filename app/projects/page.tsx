import ProjectsScreen from "@/components/groups/projects_screen";
import ProjectCards from "@/components/ui/project_cards";
import FloorLeaves from "@/components/groups/floor_leaves";
import FloorGrass from "@/components/groups/floor_grass";
import Leaves from "@/components/ui/leaves";
import Navigation from "@/components/ui/navigation";
import Image from "next/image";
import { Jost } from "next/font/google";
const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

export const metadata = {
  title: "Projects | Stefan Seunarine",
  description: "A collection of projects showcasing Stefan Seunarine's skills as a full-stack developer.",
};

export default function Projects() {
    return <>
        <div className="relative max-h-screen overflow-x-clip">
            <Navigation left={{text: "Blogs", path: "/blogs"}} right={{text: "Home", path: "/"}} />
            <ProjectsScreen
                projectCards={<ProjectCards />}
                title={<h1 className={`text-[#746352] text-4xl md:text-5xl font-semibold tracking-tight text-shadow-md flex-grow ${jost.className}`}>Projects</h1>}
                description={<h2 className="text-[#a89989] text-lg font-semibold text-shadow-md mb-4">A collection of works I&apos;ve built</h2>}
                floorLeaves={<FloorLeaves direction="right" />}
                floorGrass={<FloorGrass direction="right" />}
                leaves={<Leaves startRight={15} />}
                fenceFront={<Image src={`/images/src/fence_side.png`} alt="Fence" width={350} height={350} className={``} />}
                fenceBack={<Image src={`/images/src/fence_side.png`} alt="Fence" width={400} height={400} className={``} />}
            />
        </div>
    </>;
}
