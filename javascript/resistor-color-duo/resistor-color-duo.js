export const value = (input) => {
    return getColorNumber(input[0]) * 10 + getColorNumber(input[1])
};

const getColorNumber = (color) => COLORS.indexOf(color);

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
