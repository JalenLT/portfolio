import Image from "next/image";

export default function Tree(){
    return (
        <Image
            src="/tree_design.png"
            alt=""
            aria-hidden="true"
            priority
            width={1200}
            height={1200}
            sizes="(min-width:1280px) 40vw, (min-width:1024px) 45vw, 70vw"
            className="
                drop-shadow-lg drop-shadow-black/60
                pointer-events-none select-none
                object-contain
                
            "
        />
    );
}