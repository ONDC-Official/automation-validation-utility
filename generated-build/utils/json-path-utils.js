"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonpath_1 = require("jsonpath");
function isPrimitive(val) {
    return val === null || ["string", "number", "boolean"].includes(typeof val);
}
function isListOfStringsOrNull(arr) {
    return (Array.isArray(arr) &&
        arr.every(function (item) { return typeof item === "string" || item === null; }));
}
function getJsonPath(payload, path) {
    var output = jsonpath_1.default.query(payload, path);
    if (!Array.isArray(output)) {
        throw new Error("Expected output to be an array, got ".concat(typeof output));
    }
    // Check if all items are primitive
    var allPrimitives = output.every(isPrimitive);
    if (!allPrimitives) {
        throw new Error("Expected output to be a list of primitives, but found complex types.");
    }
    // Handle nulls
    if (isListOfStringsOrNull(output)) {
        output = output.map(function (o) { return (o === null ? "null" : o); });
    }
    return output.length === 0 ? [] : output;
}
exports.default = {
    getJsonPath: getJsonPath,
};
