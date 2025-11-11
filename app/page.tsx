import HomeCard from "@/components/ui/home_card";
import Tree from "@/components/ui/tree";
import Leaves from "@/components/ui/leaves";
import FloorLeaves from "@/components/groups/floor_leaves";
import FloorGrass from "@/components/groups/floor_grass";
import HomeScreen from "@/components/groups/home_screen";
import Navigation from "@/components/ui/navigation";

export const metadata = {
  title: "Stefan Seunarine | Full-Stack Developer",
  description:
    "Portfolio of Stefan Seunarine, a full-stack developer specializing in Laravel, React, and modern web applications.",
  openGraph: {
    title: "Stefan Seunarine | Full-Stack Developer",
    description:
      "Building efficient, scalable web applications and crafting intuitive user experiences.",
    url: "https://stefanseunarine.dev",
    siteName: "Stefan Seunarine | Portfolio",
    images: [
      {
        url: "https://stefanseunarine.dev/og/home.png",
        width: 1200,
        height: 630,
        alt: "Stefan Seunarine | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stefan Seunarine | Full-Stack Developer",
    description:
      "Portfolio of Stefan Seunarine, a full-stack developer specializing in Laravel, React, and modern web applications.",
    images: ["https://stefanseunarine.dev/og/home.png"],
  },
};

export default function Home() {
  return <>
      <div className="relative overflow-x-clip">
          <Navigation left={{text: "Projects", path: "/projects"}} />
          <HomeScreen 
            homeCard={<HomeCard />}
            tree={<Tree />}
            floorLeaves={<FloorLeaves direction="left" />}
            floorGrass={<FloorGrass direction="left" />}
            leaves={<Leaves startRight={15} />}
          />
      </div>
  </>;
}
