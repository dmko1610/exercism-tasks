let isSilent = (str) => str.length === 0;
let isShouting = (str) =>
  str.toUpperCase() === str && str.match(/[A-Z\xc0-\xdf]/);
let isAsking = (str) => str.endsWith("?");
let anything = () => true;
let isShoutingAsking = (str) => isShouting(str) && isAsking(str);

const MESSAGES = [
  { question: isShoutingAsking, response: "Calm down, I know what I'm doing!" },
  { question: isSilent, response: "Fine. Be that way!" },
  { question: isAsking, response: "Sure." },
  { question: isShouting, response: "Whoa, chill out!" },
  { question: anything, response: "Whatever." },
];

export const hey = (message) => {
  message = message.trim();
  let { response } = MESSAGES.find((c) => c.question(message));
  return response;
};
