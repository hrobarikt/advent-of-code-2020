const {
    getUniqueAnswers,
    solvePartOne,
    solvePartTwo,
    getEveryoneAnswers
} = require("./index");

const { test, expect } = require("@jest/globals");

describe("getUniqueAnswers", () => {
    test("Should return abc array if on one line", () => {
        expect(getUniqueAnswers(`abc`)).toEqual(['a', 'b', 'c']);
    })

    test("Should return abc array if unique answers on separate lines", () => {
        expect(getUniqueAnswers(`a
        b
        c`)).toEqual(['a', 'b', 'c']);
    })

    test("Should return abc array if some answers are repeating", () => {
        expect(getUniqueAnswers(`ab
        b
        ac`)).toEqual(['a', 'b', 'c']);
    })


    test("Should return a array for repeating answers", () => {
        expect(getUniqueAnswers(`a
        a
        a`)).toEqual(['a']);
    })

})

describe("Solution Part One", () => {

    test("For provided sample data returns 11", () => {
        const data = require("./sample");
        expect(solvePartOne(data)).toBe(11);
    })


    test("For provided input returns 7128", () => {
        const data = require("./input");
        expect(solvePartOne(data)).toBe(7128);
    })
})

describe("getEveryoneAnswers", () => {

    test("Should return abc for the first group", () => {
        expect(getEveryoneAnswers(`abc`)).toEqual(['a', 'b', 'c']);
    })

    test("Should return empty array of there is no question to which everyone answered yes.", () => {
        expect(getEveryoneAnswers(`a
        b
        c`)).toEqual([]);
    })

    test("Should return array [a] if it is only one question that everyone answered yes", () => {
        expect(getEveryoneAnswers(`ab
        ac`)).toEqual(['a']);
    })

    test("Should return array [a] if everyone answered to only 1 question", () => {
        expect(getEveryoneAnswers(`a
        a
        a
        a`)).toEqual(['a']);
    })

    test("Should return array [b] if only one person answered yes to only 1 question", () => {
        expect(getEveryoneAnswers(`b`)).toEqual(['b']);

    })
})

describe("Solution Part Two", () => {

    test("For provided sample data returns 6", () => {
        const data = require("./sample");
        expect(solvePartTwo(data)).toBe(6);
    })

    test("For provided input returns 3640", () => {
        const data = require("./input");
        expect(solvePartTwo(data)).toBe(3640);
    })
})


