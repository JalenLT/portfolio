import leaves_floor_ltr from "@/data/leaves_floor_ltr.json";
import leaves_floor_rtl from "@/data/leaves_floor_rtl.json";
import FloorItem from "../ui/floor_item";
import Leaf from "../ui/leaf";

export default function FloorLeaves({direction}: {direction: "left" | "right"}) {
    const leaves = direction === "left" ? leaves_floor_ltr : leaves_floor_rtl;
    return (
        <>
            {leaves.map((pile, index) => {
                return <FloorItem key={"leaf-floor-" + index} data={pile}>
                    <Leaf animated={false} />
                </FloorItem>
            })}
        </>
    );
}