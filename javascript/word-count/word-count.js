export function countWords(phrase) {
  const result = {};
  phrase
    .toLowerCase()
    .replace(/[^A-Z0-9\'+]+/gi, " ")
    .match(/\S+/g)
    .forEach(element => {
      element = element.replace(/^'(.+)'$/, "$1");
      if (!result.hasOwnProperty(element)) result[element] = 0;
      result[element] += 1;
    });
  return result;
}
