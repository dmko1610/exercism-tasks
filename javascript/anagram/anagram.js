export const findAnagrams = (initialWord, samples) => {
  const alphabetize = word =>
    word
      .toLowerCase()
      .split("")
      .sort()
      .join("");

  const alphabetizedWord = alphabetize(initialWord);
  return samples.filter(
    word =>
      initialWord.toLowerCase() !== word.toLowerCase() &&
      alphabetize(word) === alphabetizedWord
  );
};
