export const toUpperCase = (str) => str.toUpperCase();
export const toLowerCase = (str) => str.toLowerCase();
export const reverse = (str) => str.split("").reverse().join("");

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const isPalindrome = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
};
