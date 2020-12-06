
function getUniqueAnswers(groupAnswers) {
    return [...new Set(groupAnswers.replace(/[\n\s]/g, "").split(""))];
}

function solvePartOne(input) {
    const groupUniqueAnswers = input.split("\n\n").map(getUniqueAnswers);
    return groupUniqueAnswers.reduce((prev, current) => prev + current.length, 0);
}


function getEveryoneAnswers(groupAnswers) {
    const answers = groupAnswers.split("\n").map(i => i.replace(/\s/g, "").split(""));
    const intersection = (a, b) => a.filter(x => b.includes(x));
    return answers.reduce(intersection);
}


function solvePartTwo(input) {
    const answers = input.split("\n\n").map(getEveryoneAnswers);
    return answers.reduce((prev, current) => prev + current.length, 0);
}

module.exports = {
    getUniqueAnswers,
    solvePartOne,
    solvePartTwo,
    getEveryoneAnswers
};