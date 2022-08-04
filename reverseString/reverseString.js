const reverseString = (str) => {
    let newString = [];
    for (let i = str.length - 1; i >= 0; i--) {
        newString.push(str[i]);
    }
    return newString.join('');
};

module.exports = reverseString;
