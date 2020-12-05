const { solvePartOne, solvePartTwo, getBoundaryPosition, makeMove, howManyTrees } = require("./index");

describe("getBoundaryPosition", () => {
    test("Should return the same index if within the max size", () => {
        expect(getBoundaryPosition(5, 10)).toBe(5);
    })

    test("Should return 0 if the index is the same as the max size", () => {
        expect(getBoundaryPosition(10, 10)).toBe(0);
    })

    test("Should return 5 if the index is 5 more than the max size", () => {
        expect(getBoundaryPosition(15, 10)).toBe(5);
    })
})


describe("makeMove", () => {
    test("Should return new position", () => {
        expect(makeMove({ x: 0, y: 0 }, ["...", "..."], { x: 1, y: 1 })).toEqual({ x: 1, y: 1 });
    })
    test("Should return new position within the range", () => {
        expect(makeMove({ x: 0, y: 0 }, ["...", "..."], { x: 5, y: 1 })).toEqual({ x: 2, y: 1 });
    })
})

describe("howManyTrees", () => {
    test("Should return 7 for provided sample", () => {
        const sample =
            `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`.split("\n");
        expect(howManyTrees(sample, { x: 3, y: 1 })).toEqual(7);
    })

})


describe("PartOne solution", () => {
    test("Should return 162 for provided input", () => {
        expect(solvePartOne()).toBe(162);
    })
})

describe("PartTwo solution", () => {
    test("Should return 3064612320 for provided input", () => {
        expect(solvePartTwo()).toBe(3064612320);
    })
})