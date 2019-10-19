export const compute = (oldStrand, newStrand) => {
    if ((oldStrand === newStrand) || (!oldStrand && !newStrand)) {
        return 0
    } else if (!oldStrand) {
        throw new Error('left strand must not be empty')
    } else if (!newStrand) {
        throw new Error('right strand must not be empty')
    } else if (oldStrand.length !== newStrand.length) {
        throw new Error('left and right strands must be of equal length')
    }

    return oldStrand.split('').reduce((distance, currentEl, index) => {
        if (currentEl !== newStrand[index]) distance++;
        return distance
    }, 0)
};
