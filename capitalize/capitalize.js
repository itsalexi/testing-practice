const capitalize = (str) => {
    if (!isNaN(str)) return undefined;
    if (!str) return undefined;
    if (str.length == 0) return undefined;
    if (str[0] == '') return undefined;

    if (isNaN(parseInt(str[0]))) {
        return str[0].toUpperCase() + str.slice(1);
    }
};

module.exports = capitalize;
