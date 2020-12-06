const { extractPassport,
    hasAllRequiredFields,
    solvePartOne,
    isWithinRange,
    isValidHGT,
    isValidHCL,
    isValidECL,
    isValidPID,
    isValidPassport,
    solvePartTwo } = require("./index");
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

describe("isWithinRange", () => {
    test("Should return true if it is between min and max", () => {
        expect(isWithinRange(2000, 1920, 2020)).toBe(true);
        expect(isWithinRange("2000", 1920, 2020)).toBe(true);
    })

    test("Should return true if it is min", () => {
        expect(isWithinRange(1920, 1920, 2000)).toBe(true);
        expect(isWithinRange("1920", 1920, 2000)).toBe(true);
    })

    test("Should return true if it is max", () => {
        expect(isWithinRange(2002, 1920, 2002)).toBe(true);
        expect(isWithinRange("2002", 1920, 2002)).toBe(true);
    })

    test("Should return false if it is below min", () => {
        expect(isWithinRange(1900, 1920, 2002)).toBe(false);
        expect(isWithinRange("1900", 1920, 2002)).toBe(false);
    })

    test("Should return false if it greater than max", () => {
        expect(isWithinRange(2030, 1920, 2020)).toBe(false);
        expect(isWithinRange("2030", 1920, 2020)).toBe(false);
    })
});

describe("isValidHGT", () => {
    test("Should return true if it is 60in", () => {
        expect(isValidHGT("60in")).toBe(true);
    })

    test("Should return true if it is 190cm", () => {
        expect(isValidHGT("190cm")).toBe(true);
    })

    test("Should return false if it is 190in", () => {
        expect(isValidHGT("190in")).toBe(false);
    })

    test("Should return false if it doesnt contain cm or in", () => {
        expect(isValidHGT("190")).toBe(false);
    })

});

describe("isValidHCL", () => {
    test("Should return true if it is #123abc", () => {
        expect(isValidHCL("#123abc")).toBe(true);
    })

    test("Should return true if it is #123abz", () => {
        expect(isValidHCL("#123abz")).toBe(false);
    })

    test("Should return false if it is 123abc", () => {
        expect(isValidHCL("123abc")).toBe(false);
    })
});

describe("isValidECL", () => {
    test("Should return true if it is one of amb blu brn gry grn hzl oth", () => {
        expect(isValidECL("amb")).toBe(true);
        expect(isValidECL("blu")).toBe(true);
        expect(isValidECL("brn")).toBe(true);
        expect(isValidECL("gry")).toBe(true);
        expect(isValidECL("grn")).toBe(true);
        expect(isValidECL("hzl")).toBe(true);
        expect(isValidECL("oth")).toBe(true);
    })

    test("Should return false for anything else", () => {
        expect(isValidECL("wat")).toBe(false);
    })
});


describe("isValidPID", () => {
    test("Should return true if it contains 9 digit numbers", () => {
        expect(isValidPID("000000001")).toBe(true);
    })

    test("Should return false for more than 9 digit numbers", () => {
        expect(isValidPID("0123456789")).toBe(false);
    })

    test("Should return false for less than 9 digit numbers", () => {
        expect(isValidPID("12345678")).toBe(false);
    })

    test("Should return false if it contains non digit character", () => {
        expect(isValidPID("l23456789")).toBe(false);
    })
});

describe("isValidPassport", () => {
    test("Should return false for invalid passports", () => {
        expect(isValidPassport(`iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946`)).toBe(false);

        expect(isValidPassport(`eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926`)).toBe(false);

        expect(isValidPassport(`hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277`)).toBe(false);

        expect(isValidPassport(`hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`)).toBe(false);


    })

    test("Should return true for valid passports", () => {
        expect(isValidPassport(`pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f`)).toBe(true);
        expect(isValidPassport(`eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm`)).toBe(true);
        expect(isValidPassport(`hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022`)).toBe(true);
        expect(isValidPassport(`iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`)).toBe(true);
    })


});

describe("Part Two Solution", () => {
    test("Should return for provided input", () => {
        const { batch } = require("./input");
        expect(solvePartTwo(batch)).toBe(184);
    })
})