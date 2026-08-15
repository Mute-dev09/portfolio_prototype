/**
 * Hero diagonal showcase — games you've played.
 * Replace `src` paths with your own images in /public/games/.
 * Supported formats: jpg, png, webp, svg
 */
export type HeroGameImage = {
  src: string;
  alt: string;
};

export const HERO_GAME_IMAGES: HeroGameImage[] = [
  { src: "/games/ready-or-not.svg", alt: "Ready Or Not" },
  { src: "/games/strategy.svg", alt: "Strategy games" },
  { src: "/games/tactical.svg", alt: "Tactical shooters" },
  { src: "/games/AC6.png", alt: "Giant robot games" },
  { src: "/games/gacha.svg", alt: "Gacha games" },
];
