export const steps = function (step) {
    let counter = 0;
    if (step <= 0) throw new Error('Only positive numbers are allowed');
    while (step > 1) {
        if (step % 2 == 0) {
            step /= 2;
            counter++;
        } else {
            step = step * 3 + 1;
            counter++;
        }
    }
    return counter;
};
