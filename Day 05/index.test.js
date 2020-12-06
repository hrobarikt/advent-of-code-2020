const {
    getSeatID,
    convertToBinary,
    solvePartOne,
    solvePartTwo
} = require("./index");

const { test, expect } = require("@jest/globals");


describe("convertToBinary", () => {
    test("Should return 0101100101 for FBFBBFFRLR", () => {
        expect(convertToBinary("FBFBBFFRLR")).toBe("0101100101");
    })
})

describe("getSeatID", () => {
    test("Should return 357 for FBFBBFFRLR", () => {
        expect(getSeatID("FBFBBFFRLR")).toBe(357);
    })

    test("Should return 567 for BFFFBBFRRR", () => {
        expect(getSeatID("BFFFBBFRRR")).toBe(567);
    })

    test("Should return 119 for FFFBBBFRRR", () => {
        expect(getSeatID("FFFBBBFRRR")).toBe(119);
    })

    test("Should return 820 for BBFFBBFRLL", () => {
        expect(getSeatID("BBFFBBFRLL")).toBe(820);
    })
})

describe("Part1 Solution", () => {
    test("Should return 820 for provided sample", () => {
        const sample = `BFFFBBFRRR
        BBFFBBFRLL
        FFFBBBFRRR`;
        expect(solvePartOne(sample)).toBe(820);
    })

    test("Should return 928 for provided input", () => {
        const input = require("./input");
        expect(solvePartOne(input)).toBe(928);
    })
})


describe("Part2 Solution", () => {
    test("Should return x for provided input", () => {
        const input = require("./input");
        expect(solvePartTwo(input)).toBe(610);
    })
})

