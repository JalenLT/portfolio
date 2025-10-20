import falling_leaves from "@/data/falling_leaves.json";
import { LeafConfig } from "@/types/leaf";
import Leaf from "./leaf";

export default function Leaves({startRight = 15}: {startRight: number}){
    return (
        <>
            {falling_leaves.map((leaf: LeafConfig) => (
                <span
                    key={leaf.id}
                    className="leaf-parent z-10"
                    style={{
                        ["--size" as string]: leaf.size + "px",
                        ["--duration" as string]: leaf.duration + "s",
                        ["--delay" as string]: leaf.delay + "s",
                        ["--start-right" as string]: startRight + "vw",
                        ["--start-top" as string]: leaf.startTop + "vh",
                        ["--sway" as string]: leaf.sway + "s",
                    }}
                >
                    <Leaf />
                </span>
            ))}
        </>
    );
}