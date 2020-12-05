const { extractPassport, hasAllRequiredFields, solvePartOne } = require("./index");
const { test, expect } = require("@jest/globals");



describe("parsePassport", () => {
    test("Should return object with extracted values", () => {
        expect(extractPassport(`ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm`)).toEqual({
            ecl: "gry",
            pid: "860033327",
            eyr: "2020",
            hcl: "#fffffd",
            byr: "1937",
            iyr: "2017",
            cid: "147",
            hgt: "183cm"
        });
    })
})

describe("hasAllRequiredFields", () => {
    test("Should return true if contains all required fields", () => {
        expect(hasAllRequiredFields("ecl:gry cid:12312", ['ecl', 'cid'])).toBe(true);
    })

    test("Should return true if contains additonal fields", () => {
        expect(hasAllRequiredFields("ecl:gry cid:12312", ['ecl'])).toBe(true);
    })

    test("Should return false if it doesnt contain all required fields", () => {
        expect(hasAllRequiredFields("ecl:gry", ['ecl', 'cid'])).toBe(false);
    })

    test("Should return false if the required field is empty", () => {
        expect(hasAllRequiredFields("ecl:gry cid: hcl:#fff", ['ecl', 'cid'])).toBe(false);
    })

})

describe("Solution for part One", () => {
    test("Should return 2 valid passports for sample", () => {
        const { sample } = require("./input");
        expect(solvePartOne(sample)).toBe(2);
    })


    test("Should return 254 valid passports for the input", () => {
        const { batch } = require("./input");
        expect(solvePartOne(batch)).toBe(254);
    })
})

