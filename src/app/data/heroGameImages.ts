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
  { src: "/games/extraction_shooter.jpg", alt: "extraction shooter image" },
  { src: "/games/Me_IRL.jpg", alt: "it's za me" },
  { src: "/games/Shadowless.png", alt: "AC6" },
  { src: "/games/WutheringWAVES.png", alt: "Gacha games" },
  { src: "/games/Yelena_2.png", alt: "My Waifu :D" },

];
