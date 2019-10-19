export const transform = function (legacyObj) {
    let resultObj = {};

    Object.keys(legacyObj).forEach(legacyKey => {
        legacyObj[legacyKey].forEach(newKey => {
            resultObj[newKey.toLowerCase()] = parseInt(legacyKey);
        })
    });
    return resultObj;
};
