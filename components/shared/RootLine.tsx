interface RootLineProps {
  className?: string;
  animated?: boolean;
}

/**
 * The site's signature visual element: a single continuous organic line
 * that reads as both a root system and a growth path. Used once, large,
 * in the hero — and echoed small as the timeline connector later.
 */
export function RootLine({ className, animated = true }: RootLineProps) {
  return (
    <svg
      viewBox="0 0 640 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M320 18 C 322 90, 270 110, 250 160 C 228 214, 290 230, 300 280 C 310 330, 220 340, 200 400 C 182 454, 230 480, 260 502"
        stroke="var(--color-pine-300)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M320 18 C 318 92, 372 108, 392 158 C 412 212, 350 232, 342 282 C 334 332, 422 344, 438 402 C 452 454, 406 482, 378 504"
        stroke="var(--color-pine-500)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        className={animated ? "root-line-draw" : undefined}
        pathLength={1}
      />
      <circle cx="320" cy="18" r="5" fill="var(--color-terracotta-500)" />
      <style>{`
        .root-line-draw {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: draw-root 2.2s var(--ease-out, ease) 0.3s forwards;
        }
        @keyframes draw-root {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .root-line-draw { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
}
