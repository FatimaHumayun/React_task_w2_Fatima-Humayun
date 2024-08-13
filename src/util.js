import { SKIN_COLOR_MAP } from "./skintones.js";

//Main URL
export const API_URL = "https://swapi.dev/api/people";

//Function that handles Random images
export const getRandomImageUrl = () =>
  `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 59)}`;

// function that handles the correct format of date
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB");
};
//function that handles the skin color
export const getCharacterColor = (skinColor) => {
  return SKIN_COLOR_MAP[skinColor.toLowerCase()] || "#F4C2C2";
};
// authentication login URL
export const loginURL = "https://dummyjson.com/auth/login";
