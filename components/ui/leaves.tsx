import Image from "next/image";
import { useMemo } from "react";

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

type LeafConfig = {
    id: number;
    size: number;
    duration: number;
    delay: number;
    startTop: number;
    sway: number;
};

function makeConfig(id: number): LeafConfig {
    return {
        id,
        size: Math.round(rand(18, 42)),  // random pixel size
        duration: rand(8, 15),           // how long it floats
        delay: rand(0, 8),               // when it starts
        startTop: rand(-5, 22),          // starting height on screen
        sway: rand(2.6, 3.8),            // flutter speed
    };
}

export default function Leaves({count}: {count: number}){
    const configs = useMemo(() => {
        return Array.from({ length: count }, (_, i) => makeConfig(i));
    }, [count]);

    return (
        <>
            {configs.map((leaf) => (
                <span
                    key={leaf.id}
                    className="leaf-parent"
                    style={{
                        ["--size" as string]: leaf.size + "px",
                        ["--duration" as string]: leaf.duration + "s",
                        ["--delay" as string]: leaf.delay + "s",
                        ["--start-top" as string]: leaf.startTop + "vh",
                        ["--sway" as string]: leaf.sway + "s",
                    }}
                >
                    <Image
                        src="/leaf.png"
                        alt=""
                        className="leaf-child" 
                        width={64}
                        height={64}
                    />
                </span>
            ))}
        </>
    );
}