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
import Projects from "@/components/ui/projects";
import { useState } from "react";
import CustomButton from "@/components/ui/custom_button";
import { ChevronLeft, ChevronRight, FolderKanban } from "lucide-react";
import LinkDrawer from "@/components/ui/link_drawer";

export default function Home() {
  const [ activeScreen, setActiveScreen ] = useState<string>("home");
  const handleSetActiveScreen = (screen: string): void => {
    setActiveScreen(screen);
  };

  return <>
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} containerStyle={{"overflow": "visible"}}>
      <div className="relative overflow-x-clip">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-[100]">
            <LinkDrawer 
              icon={(
                  <ChevronLeft />
              )} 
              text="Projects"
              onClick={() => handleSetActiveScreen("projects")}
            />
          </div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-[100]">
            <LinkDrawer 
              icon={(
                  <ChevronRight />
              )} 
              text="Home"
              onClick={() => handleSetActiveScreen("home")}
            />
          </div>
          <section className={`overflow-visible h-[85vh] max-h-[85vh] relative`}>
              <div 
                  className={`container mx-auto px-6 py-16 lg:py-24 relative
                  lg:pr-[36vw] xl:pr-[40vw]  ${activeScreen === "home" ? "fade-in" : "fade-out"}`}
              > 
                <MouseParallaxChild factorX={0.3} factorY={0.3}>
                  <HomeCard />
                </MouseParallaxChild>
              </div>
              <MouseParallaxChild factorX={0.2} factorY={0.2}
                className="absolute right-0 bottom-[-2vw] w-[clamp(500px,38vw,680px)] z-[-1000]"
              >
                <div className={`${activeScreen === "home" ? "fade-in" : "fade-out"}`}>
                  <Tree />
                </div>
              </MouseParallaxChild>
              <div className={`absolute h-full w-full top-[0vh] ${activeScreen === "home" ? "right-[0vw]" : "right-[-80vw]"}`}>
                <Leaves startRight={15} />
              </div>
              <MouseParallaxChild factorX={0.2} factorY={0.2} className={`absolute h-full w-full bottom-[-3vw] fade-in ${activeScreen === "home" ? "fade-in" : "fade-out"}`}>
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
          <section className={`absolute top-0 h-[85vh] max-h-[85vh] ${activeScreen === "projects" ? "fade-in right-[0vw]" : "fade-out right-[-100vw]"}`}>
            <Projects />
          </section>
      </div>
    </MouseParallaxContainer>
  </>;
}
