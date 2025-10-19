'use client';

import dynamic from 'next/dynamic';
import type { PropsWithChildren } from 'react';

// Dynamically import to avoid SSR window access
const MouseParallaxContainer = dynamic(
  () =>
    import('react-parallax-mouse').then((m) => m.MouseParallaxContainer),
  { ssr: false }
);
const MouseParallaxChild = dynamic(
  () =>
    import('react-parallax-mouse').then((m) => m.MouseParallaxChild),
  { ssr: false }
);

type ParallaxClientProps = PropsWithChildren<{
  container?: {
    globalFactorX?: number;
    globalFactorY?: number;
    className?: string;
  };
  layers?: {
    // simple helper if you want quick layers without custom children
    items?: Array<{ factorX?: number; factorY?: number; className?: string; content?: React.ReactNode }>;
  };
}>;

export default function ParallaxClient({ container, layers, children }: ParallaxClientProps) {
  const {
    globalFactorX = 0.1,
    globalFactorY = 0.1,
    className = '',
  } = container ?? {};

  return (
    <MouseParallaxContainer
      globalFactorX={globalFactorX}
      globalFactorY={globalFactorY}
      className={className}
      // Optional: accessibility/fallbacks
      resetOnLeave
    >
      {/* Example: render convenience layers first */}
      {layers?.items?.map((l, i) => (
        <MouseParallaxChild
          key={i}
          factorX={l.factorX ?? 0.2}
          factorY={l.factorY ?? 0.2}
          className={l.className}
        >
          {l.content}
        </MouseParallaxChild>
      ))}

      {/* Then let you pass anything else */}
      {children}
    </MouseParallaxContainer>
  );
}

// Re-export child for custom usage if you want manual layering
export const ParallaxLayer = (props: React.ComponentProps<'div'> & { factorX?: number; factorY?: number }) => {
  // Use the same dynamic child, but preserve typing
  return <MouseParallaxChild {...props} />;
};
