"use client";
import HomeCard from "@/components/ui/home_card";
import Tree from "@/components/ui/tree";
import Leaves from "@/components/ui/leaves";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import grass_floor_ltr from "@/data/grass_floor_ltr.json";
import leaves_floor_ltr from "@/data/leaves_floor_ltr.json";
import FloorItem from "@/components/ui/floor_item";
import Grass from "@/components/ui/grass";
import Leaf from "@/components/ui/leaf";

export default function Home() {
  return <>
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} containerStyle={{"overflow": "visible"}}>
      <div className="relative overflow-x-clip">
          <section className="overflow-visible h-[85vh] max-h-[85vh] relative">
              <div 
                  className="container mx-auto px-6 py-16 lg:py-24 relative
                  lg:pr-[36vw] xl:pr-[40vw]"
              > 
                <MouseParallaxChild factorX={0.3} factorY={0.3} className="fade-in">
                  <HomeCard />
                </MouseParallaxChild>
              </div>
              <MouseParallaxChild factorX={0.2} factorY={0.2}
                className="absolute right-0 bottom-[-2vw] w-[clamp(500px,38vw,680px)] -z-1 fade-in"
              >
                <Tree />
              </MouseParallaxChild>
              <Leaves startRight={15} />
              <MouseParallaxChild factorX={0.2} factorY={0.2} className="absolute h-full w-full bottom-[-3vw] fade-in">
                {leaves_floor_ltr.map((pile, index) => {
                  return <FloorItem key={"leaf-floor-" + index} data={pile}>
                      <Leaf animated={false} />
                  </FloorItem>
                })}
                {grass_floor_ltr.map((pile, index) => {
                    if (pile.rotation !== undefined) {
                        delete pile.rotation;
                    }
                    return <FloorItem key={"grass-floor-" + index} data={pile}>
                        <Grass size={pile.size * 1.2} />
                    </FloorItem>
                })}
              </MouseParallaxChild>
          </section>
      </div>
    </MouseParallaxContainer>
  </>;
}
