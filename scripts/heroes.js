import { getHeroes } from "./database.js";

const heroes = getHeroes(); //!This is my database function

export const HeroList = () => {
  let heroHTML = "<ul>";

  for (const hero of heroes) {
    heroHTML += `<li>${hero.name}</li>`;
  }

  heroHTML += "</ul>";

  return heroHTML;
};
