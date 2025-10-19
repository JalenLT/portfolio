export interface Leaf {
    src: string;
    rotation: { x: string; y: string; z: string };
    position: { right: string; bottom: string };
}

export type LeafConfig = {
    id: number;
    size: number;
    duration: number;
    delay: number;
    startTop: number;
    sway: number;
};