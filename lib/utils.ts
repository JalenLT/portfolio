import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { LeafConfig } from "@/types/leaf";

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

export function downloadArray(data: object) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.json";
  a.click();
  URL.revokeObjectURL(url);
}

export function makeLeafConfig(id: number): LeafConfig {
    return {
        id,
        size: Math.round(rand(18, 42)),  // random pixel size
        duration: rand(8, 15),           // how long it floats
        delay: rand(0, 8),               // when it starts
        startTop: rand(-10, 30),          // starting height on screen
        sway: rand(2.6, 3.8),            // flutter speed
    };
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
