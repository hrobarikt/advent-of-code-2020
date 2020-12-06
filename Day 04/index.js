
function extractPassport(input) {
    const regex = /(\w+):([\w#]+)\s?/gm;
    let matches;
    const result = {};
    while ((matches = regex.exec(input)) !== null) {
        result[matches[1]] = matches[2];
    }
    return result;
}

function hasAllRequiredFields(passport, required) {
    const input = extractPassport(passport);
    return required.every(prop => input[prop]);
}

function solvePartOne(batch) {
    const isPassportValid = (passport) =>
        hasAllRequiredFields(passport, ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']);
    return batch.split("\n\n").filter(isPassportValid).length;
}

function isWithinRange(number, min, max) {
    return min <= ~~number && ~~number <= max;
}


function isValidHGT(hgt) {
    if (!hgt) return false;
    const height = hgt.slice(0, -2);
    if (hgt.endsWith('cm')) {
        return isWithinRange(height, 150, 193);
    } else if (hgt.endsWith('in')) {
        return isWithinRange(height, 59, 76);
    } else {
        return false;
    }
}

function isValidHCL(hcl) {
    return /^#[0-9a-f]{6}$/.test(hcl);
}

function isValidECL(ecl) {
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl);
}

function isValidPID(pid) {
    return /^[0-9]{9}$/.test(pid);
}

function isValidPassport(passport) {
    const input = extractPassport(passport);
    const validations = {
        byr: (year) => isWithinRange(year, 1920, 2002),
        eyr: (year) => isWithinRange(year, 2020, 2030),
        iyr: (year) => isWithinRange(year, 2010, 2020),
        hgt: isValidHGT,
        hcl: isValidHCL,
        ecl: isValidECL,
        pid: isValidPID,
    }

    for (const [prop, validateFn] of Object.entries(validations)) {
        if (!validateFn(input[prop])) {
            return false;
        }
    };

    return true;
}


function solvePartTwo(input) {
    console.log(input.split("\n\n").filter(isValidPassport).map(item => /pid:([0-9]{9})/gm.exec(item)[1]).toString());
    return input.split("\n\n").filter(isValidPassport).length;

}

module.exports = {
    extractPassport,
    hasAllRequiredFields,
    solvePartOne,
    isWithinRange,
    isValidHGT,
    isValidHCL,
    isValidECL,
    isValidPID,
    isValidPassport,
    solvePartTwo
};