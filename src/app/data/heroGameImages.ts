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
  { src: "/games/My_Gun.png", alt: "Deadline" },
  { src: "/games/Me_IRL.jpg", alt: "it's za me" },
  { src: "/games/AC6_2.png", alt: "Giant robot games" },
  { src: "/games/WutheringWAVES.png", alt: "Gacha games" },
];
