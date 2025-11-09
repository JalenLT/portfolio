import Image from "next/image";

export default function Grass({size, hue = 0}: {size: number, hue?: number}){
    return (<Image 
        src="/images/src/grass_3.png" 
        alt={"Grass"} 
        width={size} 
        height={size} 
        style={{
            filter: `hue-rotate(${hue}deg) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.7))`
        }}
        className="drop-shadow-md"
        draggable={false}
        
    />);
}