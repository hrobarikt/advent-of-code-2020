const { twoSum, solvePartOne, solvePartTwo, threeSum } = require("./index");
const { test, expect } = require("@jest/globals");

describe("twoSum", () => {
    test("Should return an array of 2 numbers that will sum as target number", () => {
        expect(twoSum([1721, 979, 366, 299, 675, 1456], 2020)).toEqual(expect.arrayContaining([1721, 299]));
    });
    test("Should return empty array when no 2 numbers sum as a target number", () => {
        expect(twoSum([1, 2, 3], 10)).toEqual([]);
    });

});

describe("threeSum", () => {
    test("Should return an array of 3 numbers that will sum as a target number", () => {
        expect(threeSum([1721, 979, 366, 299, 675, 1456], 2020)).toEqual(expect.arrayContaining([979, 366, 675]));
    });
});

describe("PartOne solution", () => {
    test("Should return 299299 for provided input", () => {
        expect(solvePartOne()).toBe(299299);
    })
})


describe("PartTwo solution", () => {
    test("Should return 287730716 for provided input", () => {
        expect(solvePartTwo()).toBe(287730716);
    })
})