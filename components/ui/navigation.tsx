import LinkDrawer from "./link_drawer";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Navigation({left, right}: {left?: {text: string, path: string}, right?: {text: string, path: string}}) {
    return (
        <>
            {left && (
                <div className="absolute left-3 md:left-6 bottom-0 md:top-1/2 md:-translate-y-1/2 z-[100]">
                    <LinkDrawer 
                        icon={(
                            <ChevronLeft />
                        )} 
                        text={left.text}
                        path={left.path}
                    />
                </div>
            )}
            {right && (
                <div className="absolute right-3 md:right-6 bottom-0 md:top-1/2 md:-translate-y-1/2 z-[100]">
                <LinkDrawer 
                    icon={(
                        <ChevronRight />
                    )} 
                    text={right.text}
                    path={right.path}
                />
                </div>
            )}
        </>
    );
}