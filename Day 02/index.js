const passwordList = require("./input");

function parseInput(input) {
    const match = input.match(/(\d+)-(\d+) ([a-z]): (.*)/);

    return {
        min: ~~match[1],
        max: ~~match[2],
        character: match[3],
        password: match[4]
    }
}

function isValidPasswordA(input) {
    const { password, min, max, character } = parseInput(input);
    const count = password.split(character).length - 1;
    return count <= max && count >= min;
}

function isValidPasswordB(input) {
    const { password, min, max, character } = parseInput(input);
    const matchesMin = password[min - 1] === character;
    const matchesMax = password[max - 1] === character;
    return (matchesMin + matchesMax == 1);
}

function solvePartOne() {
    return passwordList.filter(isValidPasswordA).length;
}

function solvePartTwo() {
    return passwordList.filter(isValidPasswordB).length
}

module.exports = {
    parseInput, isValidPasswordA, isValidPasswordB, solvePartTwo, solvePartOne
};