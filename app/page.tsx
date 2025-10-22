import HomeCard from "@/components/ui/home_card";
import Tree from "@/components/ui/tree";
import Leaves from "@/components/ui/leaves";
import FloorLeaves from "@/components/groups/floor_leaves";
import FloorGrass from "@/components/groups/floor_grass";
import HomeScreen from "@/components/groups/home_screen";
import Navigation from "@/components/ui/navigation";

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
