const { extractPassport, isPassportValid } = require("./index");
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

describe("isPassportValid", () => {
    test("Should return true if contains all required fields", () => {
        expect(isPassportValid({ ecl: "gry", cid: 12312 }, ['ecl', 'cid'])).toBe(true);
    })

    test("Should return false if it doesnt contain all required fields", () => {
        expect(isPassportValid({ ecl: "gry" }, ['ecl', 'cid'])).toBe(false);
    })

    test("Should return false if the required field is empty", () => {
        expect(isPassportValid({ ecl: "gry", cid: "" }, ['ecl', 'cid'])).toBe(false);
    })

})

