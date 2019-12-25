export const parse = phrase =>
  phrase
    .toUpperCase()
    .replace(/-/g, " ")
    .replace(/[^A-Z\s]+/g, "")
    .split(" ")
    .map(el => el.slice(0, 1))
    .join("");
