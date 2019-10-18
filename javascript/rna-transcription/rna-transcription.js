export const toRna = (input) => {
    return input.split('').map(el => DNA[el]).join('')
};

const DNA = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
};
