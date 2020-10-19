// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length == 0) return [];

    return matrix.reduce((prev, cur, index) => {
        return index % 2 == 0 ? prev.concat(cur) : prev.concat(cur.reverse());
    });
};
