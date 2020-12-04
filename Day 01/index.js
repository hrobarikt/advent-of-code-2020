const input = require("./input");

/**
 *  * returns an array of 2 numbers if they will sum up to the target
 *
 */
function twoSum(nums, target) {
    hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        let currentDifference = target - nums[i];

        if (currentDifference in hashTable) {
            return [nums[i], currentDifference];
        } else {
            hashTable[nums[i]] = i;
        }
    }
    return [];
}

function solvePartOne() {
    const [a, b] = twoSum(input, 2020);
    return a * b;
}

/**
 * returns an array of 3 numbers if they will sum up to the target
 */
function threeSum(nums, target) {
    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length; i++) {
        let pivot = sortedNums[i];
        let pivotBeginning = 0;
        let pivotEnd = sortedNums.length - 1;

        while (pivotBeginning !== pivotEnd) {
            let value = pivot + sortedNums[pivotBeginning] + sortedNums[pivotEnd];
            if (value === target) { return [pivot, sortedNums[pivotBeginning], sortedNums[pivotEnd]] }
            else if (value > target) { pivotEnd--; }
            else if (value < target) { pivotBeginning++; }
        }
    }
    return [];
}

function solvePartTwo() {
    const [a, b, c] = threeSum(input, 2020);
    return a * b * c;
}
module.exports = {
    twoSum, threeSum, solvePartOne, solvePartTwo
}