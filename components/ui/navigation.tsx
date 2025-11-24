import LinkDrawer from "./link_drawer";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Navigation({ left, right }: { left?: { text: string, path: string }, right?: { text: string, path: string } }) {
    return (
        <>
            {left && (
                <div className="
                    fixed left-3 bottom-3
                    md:absolute md:left-6 md:top-1/2 md:-translate-y-1/2
                    z-100 flex items-center
                ">
                    <LinkDrawer 
                        icon={<ChevronLeft />} 
                        text={left.text}
                        path={left.path}
                    />
                </div>
            )}

            {right && (
                <div className="
                    fixed right-3 bottom-3
                    md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2
                    z-100 flex items-center
                ">
                    <LinkDrawer 
                        icon={<ChevronRight />} 
                        text={right.text}
                        path={right.path}
                    />
                </div>
            )}
        </>
    );
}
