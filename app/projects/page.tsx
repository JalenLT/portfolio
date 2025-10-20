'use client';
import generateWeightedItems from "@/lib/utils/generateWeightedItems";
import Leaves from "@/components/ui/leaves";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Leaf from "@/components/ui/leaf";
import FloorItem from "@/components/ui/floor_item";
import Grass from "@/components/ui/grass";
import grass_floor_rtl from "@/data/grass_floor_rtl.json";
import leaves_floor_rtl from "@/data/leaves_floor_rtl.json";

export default function Projects() {
    return <>
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
            <div className="relative h-[90vh] max-h-[90vh] overflow-hidden">
                <MouseParallaxChild factorX={0.2} factorY={0.2}>
                    <Leaves startRight={-50} />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.1} factorY={0.1} className="block h-full w-full">
                    <div className="relative h-full w-full">
                        {leaves_floor_rtl.map((pile, index) => {
                            return <FloorItem key={"leaf-floor-" + index} data={pile}>
                                <Leaf animated={false} />
                            </FloorItem>
                        })}
                        {grass_floor_rtl.map((pile, index) => {
                            if (pile.rotation !== undefined) {
                                delete pile.rotation;
                            }
                            return <FloorItem key={"grass-floor-" + index} data={pile}>
                                <Grass size={pile.size * 1.2} />
                            </FloorItem>
                        })}
                    </div>
                </MouseParallaxChild>
            </div>
        </MouseParallaxContainer>
    </>;
}
