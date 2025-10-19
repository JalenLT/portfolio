export default function generateWeightedItems(
  rtl: boolean,
  count: number,
  scale: number,
  rotation?: { max: number; min: number }
) {
  const piles = [];

  for (let i = 0; i < count; i++) {
    let randomRotation = 0;
    if (rotation !== undefined) {
      randomRotation = Math.floor(
        Math.random() * (rotation.max - rotation.min) + rotation.min
      );
    }

    const randomHeight = Math.random() * (5 - 1) + 1;
    const randomSize = Math.random() * (50 - 25) + 25;

    const t = i / (count - 1);
    const p = 3;
    let progress = 0;

    if (!rtl) {
      progress = 1 - Math.pow(1 - t, p);
    } else {
      progress = Math.pow(t, p);
    }

    const nextJump = progress * scale;

    // ✅ Adjust bottom direction depending on rtl
    const bottom = rtl
      ? randomHeight * (1 - progress) // slope down as we move right-to-left
      : randomHeight * progress; // slope up as we move left-to-right

    const pile: {
      bottom: number;
      right: number;
      size: number;
      rotation?: number;
    } = {
      bottom,
      right: nextJump - 2,
      size: randomSize,
    };

    if (rotation !== undefined) {
      pile.rotation = randomRotation;
    }

    piles.push(pile);
  }

  return piles;
}
