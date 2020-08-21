const isSilent = (question: string) => question.length === 0;
const isShouting = (question: string) => question.toUpperCase() === question && question.match(/[A-Z\xc0-\xdf]/);
const isAsking = (question: string) => question.endsWith("?");
const isShoutingAsking = (question: string) => isShouting(question) && isAsking(question);
const anything = () => true;


const MESSAGES: any = [
  { question: isShoutingAsking, response: 'Calm down, I know what I\'m doing!' },
  { question: isSilent, response: 'Fine. Be that way!' },
  { question: isAsking, response: 'Sure.' },
  { question: isShouting, response: 'Whoa, chill out!' },
  { question: anything, response: 'Whatever.' }
];


class Bob {
  hey(message: string) {
    message = message.trim();
    let { response } = MESSAGES.find((item: any) => item.question(message));
    return response;
  }



}

export default Bob