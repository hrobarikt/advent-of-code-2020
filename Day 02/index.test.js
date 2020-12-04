const { parseInput, isValidPasswordA, isValidPasswordB, solvePartOne, solvePartTwo } = require("./index");
const { test, expect } = require("@jest/globals");

describe("parseInput", () => {
    test("Should return object with extracted values", () => {
        expect(parseInput("1-3 a: abcde")).toEqual({
            min: 1,
            max: 3,
            password: "abcde",
            character: "a"
        });
    })
});

describe("isValidPasswordA", () => {
    test("Should return true if password policy is '1-3 a: abcde'", () => {
        expect(isValidPasswordA("1-3 a: abcde")).toBe(true);
    })

    test("Should return true if password policy is '2-9 c: ccccccccc'", () => {
        expect(isValidPasswordA("2-9 c: ccccccccc")).toBe(true);
    })

    test("Should return false if password policy is '1-3 b: cdefg'", () => {
        expect(isValidPasswordA("1-3 b: cdefg")).toBe(false);
    })
})

describe("isValidPasswordB", () => {
    test("Should return true if password policy B is '1-3 a: abcde'", () => {
        expect(isValidPasswordB("1-3 a: abcde")).toBe(true);
    })

    test("Should return false if password policy B is '2-9 c: ccccccccc'", () => {
        expect(isValidPasswordB("2-9 c: ccccccccc")).toBe(false);
    })

    test("Should return false if password policy B is '1-3 b: cdefg'", () => {
        expect(isValidPasswordB("1-3 b: cdefg")).toBe(false);
    })
})

describe("PartOne Solution", () => {
    test("Should return 474 for provided input", () => {
        expect(solvePartOne()).toBe(474);
    })
})

describe("PartTwo Solution", () => {
    test("Should return 745 for provided input", () => {
        expect(solvePartTwo()).toBe(745);
    })
})