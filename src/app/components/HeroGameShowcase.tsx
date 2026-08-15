import { useEffect, useState } from "react";
import { HERO_GAME_IMAGES } from "../data/heroGameImages";

const ROTATE_MS = 5000;
const FADE_MS = 1000;

export function HeroGameShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (HERO_GAME_IMAGES.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_GAME_IMAGES.length);
    }, ROTATE_MS);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-game-showcase pointer-events-none absolute inset-y-0 left-0 z-[1] hidden sm:block"
      aria-hidden="true"
    >
      <div className="hero-game-showcase__clip relative h-full w-full">
        {HERO_GAME_IMAGES.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt=""
            className="hero-game-showcase__image absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: index === activeIndex ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out`,
            }}
          />
        ))}
        <div className="hero-game-showcase__overlay absolute inset-0" />
      </div>
    </div>
  );
}
