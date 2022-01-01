// Returns true/false on whether two given values are equal.
let checkIfEqual = function (val1, val2) {
    if (val1===val2) {
        return true;
    } else {
        return false;
    }
};

// Returns a random number
let randomNumber = function () {
    return Math.floor(Math.random()*9+1);
}

// Allow the above two functions to be imported into other scripts
module.exports = {
    randomNumber,
    checkIfEqual,
}
