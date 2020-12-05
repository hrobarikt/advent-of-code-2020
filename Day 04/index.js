
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
    const isPassportValid = (passport) => {
        return hasAllRequiredFields(passport, ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'])
    };
    return batch.split("\n\n").filter(isPassportValid).length;
}

module.exports = {
    extractPassport, hasAllRequiredFields, solvePartOne
};