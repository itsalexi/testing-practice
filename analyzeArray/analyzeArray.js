const analyzeArray = (array) => {
    let average = avgArray(array);
    let min = minArray(array);
    let max = maxArray(array);
    let length = array.length;
    return { average, min, max, length };
};

const avgArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
};

const minArray = (array) => {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        min = Math.min(min, array[i]);
    }
    return min;
};

const maxArray = (array) => {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        max = Math.max(max, array[i]);
    }
    return max;
};

module.exports = analyzeArray;
