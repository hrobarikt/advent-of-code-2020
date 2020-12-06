
function convertToBinary(boardingPass) {
    return boardingPass.replace(/[BR]/g, "1").replace(/[FL]/g, "0");
}

function getSeatID(boardingPass) {
    const binary = convertToBinary(boardingPass);
    return parseInt(binary, 2);
}

function solvePartOne(input) {
    return Math.max(...input.split("\n").map(getSeatID))
}

function solvePartTwo(input) {
    const boardingPassList = new Set([...input.split("\n").map(getSeatID)]);
    for (const seatID of boardingPassList.values()) {
        if (!boardingPassList.has(seatID + 1) && boardingPassList.has(seatID + 2)) {
            return seatID + 1;
        }
    }
}

module.exports = {
    getSeatID,
    convertToBinary,
    solvePartOne,
    solvePartTwo
}