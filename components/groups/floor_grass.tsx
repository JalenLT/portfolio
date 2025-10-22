import grass_floor_ltr from "@/data/grass_floor_ltr.json";
import grass_floor_rtl from "@/data/grass_floor_rtl.json";
import FloorItem from "../ui/floor_item";
import Grass from "../ui/grass";

export default function FloorGrass({direction}: {direction: "left" | "right"}) {
    const grass = direction === "left" ? grass_floor_ltr : grass_floor_rtl;
    return (
        <>
            {grass.map((pile, index) => {
                return <FloorItem key={"grass-floor-" + index} data={pile}>
                    <Grass size={pile.size * 1.2} />
                </FloorItem>
            })}
        </>
    );
}