"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = normalizeKeys;
function normalizeKeys(obj) {
    if (Array.isArray(obj)) {
        // Find all keys across all objects in the array
        var allKeys_1 = new Set();
        obj.forEach(function (item) {
            if (typeof item === "object" && item !== null) {
                Object.keys(item).forEach(function (key) { return allKeys_1.add(key); });
            }
        });
        // Add missing keys with null
        return obj.map(function (item) {
            if (typeof item === "object" && item !== null) {
                var newItem_1 = __assign({}, item);
                allKeys_1.forEach(function (key) {
                    if (!(key in newItem_1)) {
                        newItem_1[key] = null;
                    }
                });
                // Recursively normalize nested objects/arrays
                for (var k in newItem_1) {
                    newItem_1[k] = normalizeKeys(newItem_1[k]);
                }
                return newItem_1;
            }
            return item;
        });
    }
    else if (typeof obj === "object" && obj !== null) {
        var newObj = {};
        for (var key in obj) {
            newObj[key] = normalizeKeys(obj[key]);
        }
        return newObj;
    }
    return obj; // primitive values
}
