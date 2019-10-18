export const isPangram = function (str) {
    let regex = /([a-z])(?!.*\1)/g;
    return (str.toLowerCase().match(regex) || '').length === 26;
};
