import Image from "next/image";
import { Card, CardContent } from "./card";
import { Jost } from "next/font/google";
import Leaves from "./leaves";

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="relative overflow-x-clip">
        <section className="overflow-visible h-[85vh] max-h-[85vh] relative">
        <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10
                        lg:pr-[36vw] xl:pr-[40vw]"> 
            <Card className="rounded-[28px] p-6 md:p-8 shadow-sm bg-[#f7f6f2]/90 backdrop-blur drop-shadow-xl hover:-translate-y-0.5 transition duration-200 hover:shadow-lg border-none">
                <CardContent className="p-0">
                    <h1 className={`text-6xl md:text-7xl font-semibold tracking-tight text-shadow-md mb-3 ${jost.className}`}>
                        Stefan Seunarine
                    </h1>
                    <p className="text-3xl md:text-5xl font-semibold text-shadow-sm mb-4">
                        Full-stack Developer
                    </p>
                    <blockquote className="text-lg text-muted-foreground">
                        Where ideas take root and grow into experiences.
                    </blockquote>
                </CardContent>
            </Card>
        </div>

        <Image
            src="/tree_design.png"
            alt=""
            aria-hidden="true"
            priority
            width={1200}
            height={1200}
            sizes="(min-width:1280px) 40vw, (min-width:1024px) 45vw, 70vw"
            className="
                pointer-events-none select-none
                absolute right-0 bottom-[-2vw]
                w-[clamp(500px,38vw,680px)]
                object-contain
                -z-1
            "
        />
        <Leaves count={12} />
        </section>
    </div>
  );
}