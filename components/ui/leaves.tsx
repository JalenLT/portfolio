import Image from "next/image";
import { Leaf } from "@/types/leaf";

const leaves: Array<Leaf> = [];
export default function Leaves(){
    return (
        <>
            {leaves.map((leaf, index) => (
                <Image
                    key={"leaf-" + index}
                    src={leaf.src}
                    alt=""
                    aria-hidden="true"
                    priority
                    width={200}
                    height={200}
                    sizes="(min-width:1280px) 40vw, (min-width:1024px) 45vw, 70vw"
                    className={`
                        pointer-events-none select-none
                        absolute ${leaf.position.right} ${leaf.position.bottom}
                        w-[clamp(50px,20vw,50px)]
                        ${leaf.rotation.x}
                        ${leaf.rotation.y}
                        ${leaf.rotation.z}
                        object-contain
                        -z-1
                    `}
                />
            ))}
        </>
    );
}