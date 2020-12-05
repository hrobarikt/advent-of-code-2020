
function extractPassport(input) {
    const regex = /(\w+):([\w#]+)\s?/gm;
    let matches;
    const result = {};
    while ((matches = regex.exec(input)) !== null) {
        result[matches[1]] = matches[2];
    }
    return result;
}

function isPassportValid(passport, required) {
    return required.every(prop => passport[prop]);
}

module.exports = {
    extractPassport, isPassportValid
};