"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function areUnique(operand) {
    var valuesSet = new Set(operand);
    return valuesSet.size === operand.length;
}
function arePresent(operand) {
    return noneIn(operand, ["null", "undefined"]) && operand.length > 0;
}
function allIn(left, right) {
    if (left.length === 0 && right.length !== 0)
        return false;
    return left.every(function (v) { return right.includes(v); });
}
function anyIn(left, right) {
    if (left.length === 0 && right.length !== 0)
        return false;
    return left.some(function (v) { return right.includes(v); });
}
function noneIn(left, right) {
    return left.every(function (v) { return !right.includes(v); });
}
function equalTo(left, right) {
    if (left.length !== right.length)
        return false;
    return left.every(function (v, i) { return v === right[i]; });
}
function greaterThan(left, right) {
    // Check if all elements in an array are ISO 8601 dates
    var areAllISO = function (arr) { return arr.every(function (v) { return isISO8601(v); }); };
    // Check if all elements in an array are numbers
    var areAllNumbers = function (arr) {
        return arr.every(function (v) { return !isNaN(Number(v)); });
    };
    if (areAllISO(left) && areAllISO(right)) {
        // Compare ISO 8601 dates
        var leftDates = left.map(function (date) { return new Date(date).getTime(); });
        var rightDates_1 = right.map(function (date) { return new Date(date).getTime(); });
        return leftDates.every(function (ld, index) { return ld > rightDates_1[index] || index >= rightDates_1.length; });
    }
    else if (areAllNumbers(left) && areAllNumbers(right)) {
        // Compare numbers
        var leftNumbers = left.map(Number);
        var rightNumbers_1 = right.map(Number);
        return leftNumbers.every(function (ln, index) {
            return ln > rightNumbers_1[index] || index >= rightNumbers_1.length;
        });
    }
    // If neither condition is met, return false
    return false;
}
function lessThan(left, right) {
    // Check if all elements in an array are ISO 8601 dates
    var areAllISO = function (arr) { return arr.every(function (v) { return isISO8601(v); }); };
    // Check if all elements in an array are numbers
    var areAllNumbers = function (arr) {
        return arr.every(function (v) { return !isNaN(Number(v)); });
    };
    if (areAllISO(left) && areAllISO(right)) {
        // Compare ISO 8601 dates
        var leftDates = left.map(function (date) { return new Date(date).getTime(); });
        var rightDates_2 = right.map(function (date) { return new Date(date).getTime(); });
        return leftDates.every(function (ld, index) { return ld < rightDates_2[index] || index >= rightDates_2.length; });
    }
    else if (areAllNumbers(left) && areAllNumbers(right)) {
        // Compare numbers
        var leftNumbers = left.map(Number);
        var rightNumbers_2 = right.map(Number);
        return leftNumbers.every(function (ln, index) {
            return ln < rightNumbers_2[index] || index >= rightNumbers_2.length;
        });
    }
    // If neither condition is met, return false
    return false;
}
function followRegex(left, regexArray) {
    if (left.length === 0 && regexArray.length !== 0)
        return false;
    var _loop_1 = function (regex) {
        var re = new RegExp(regex);
        if (left.some(function (v) { return !re.test(v); }))
            return { value: false };
    };
    for (var _i = 0, regexArray_1 = regexArray; _i < regexArray_1.length; _i++) {
        var regex = regexArray_1[_i];
        var state_1 = _loop_1(regex);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return true;
}
function isISO8601(str) {
    // Regular expression to match ISO 8601 format
    var iso8601Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
    // Check if the string matches the ISO 8601 format
    if (!iso8601Regex.test(str)) {
        return false;
    }
    // Check if the string is a valid date
    var date = new Date(str);
    return !isNaN(date.getTime());
}
exports.default = {
    areUnique: areUnique,
    arePresent: arePresent,
    allIn: allIn,
    anyIn: anyIn,
    noneIn: noneIn,
    equalTo: equalTo,
    followRegex: followRegex,
    greaterThan: greaterThan,
    lessThan: lessThan,
};
