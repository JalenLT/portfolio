import Image from "next/image";

export default function Leaf({animated = true}: {animated?: boolean}){
    return (<Image
        src="/leaf.png"
        alt="Leaf"
        className={`z-10 ${animated ? "leaf-child" : ""} drop-shadow-lg drop-shadow-black`}
        width={64}
        height={64}
    />);
}