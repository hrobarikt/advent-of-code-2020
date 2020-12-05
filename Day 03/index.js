const map = require("./input");

/**
 * calculates index position within the array if it will exceed the index
 */
const getBoundaryPosition = (position, maxLength) => {
    if (position > maxLength - 1) {
        return position - maxLength;
    }
    else {
        return position;
    };
}

/**
 * calculate new position
 */
const makeMove = (startPos, map, move) => {
    return {
        x: getBoundaryPosition(startPos.x + move.x, map[0].length)
        , y: startPos.y + move.y
    };
}

function howManyTrees(map, move) {
    const currPos = { x: 0, y: 0 };
    let treeCount = 0;
    while (currPos.y < map.length - 1) {
        const newPos = makeMove(currPos, map, move);
        currPos.x = newPos.x;
        currPos.y = newPos.y;
        if (map[currPos.y][currPos.x] === "#") {
            treeCount++;
        }
    }
    return treeCount;
}

function solvePartOne() {
    return howManyTrees(map, { x: 3, y: 1 });
}

function solvePartTwo() {
    return [{ x: 1, y: 1 }, { x: 3, y: 1 }, { x: 5, y: 1 }, { x: 7, y: 1 }, { x: 1, y: 2 }].reduce(
        (prev, current) => howManyTrees(map, current) * prev, 1
    );
}

module.exports = {
    getBoundaryPosition,
    makeMove,
    howManyTrees,
    solvePartOne,
    solvePartTwo
}