import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Anurag Angal",
  EMAIL: "anurag.angalcs@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};


export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/angal_anurag",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/anuragcsangal"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/anurag-angal",
  }
];
