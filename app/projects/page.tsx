'use client';
import generateWeightedItems from "@/lib/utils/generateWeightedItems";
import Leaves from "@/components/ui/leaves";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import Leaf from "@/components/ui/leaf";
import FloorItem from "@/components/ui/floor_item";
import Grass from "@/components/ui/grass";

export default function Projects() {
    const leafPileValues1 = generateWeightedItems(false, 20, 99, {max: 180, min: -180});
    const grassValues = generateWeightedItems(false, 20, 99);

    return <>
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
            <div className="relative h-[90vh] max-h-[90vh] overflow-hidden">
                <MouseParallaxChild factorX={0.2} factorY={0.2}>
                    <Leaves startRight={-50} />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.1} factorY={0.1} className="block h-full w-full">
                    <div className="relative h-full w-full">
                        {leafPileValues1.map((pile, index) => {
                            return <FloorItem key={"leaf-floor-" + index} data={pile}>
                                <Leaf animated={false} />
                            </FloorItem>
                        })}
                        {grassValues.map((pile, index) => {
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
