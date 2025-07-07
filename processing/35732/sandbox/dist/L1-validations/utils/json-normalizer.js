"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = normalizeKeys;
function normalizeKeys(obj) {
    if (Array.isArray(obj)) {
        // Find all keys across all objects in the array
        const allKeys = new Set();
        obj.forEach((item) => {
            if (typeof item === "object" && item !== null) {
                Object.keys(item).forEach((key) => allKeys.add(key));
            }
        });
        // Add missing keys with null
        return obj.map((item) => {
            if (typeof item === "object" && item !== null) {
                const newItem = Object.assign({}, item);
                allKeys.forEach((key) => {
                    if (!(key in newItem)) {
                        newItem[key] = null;
                    }
                });
                // Recursively normalize nested objects/arrays
                for (const k in newItem) {
                    newItem[k] = normalizeKeys(newItem[k]);
                }
                return newItem;
            }
            return item;
        });
    }
    else if (typeof obj === "object" && obj !== null) {
        const newObj = {};
        for (const key in obj) {
            newObj[key] = normalizeKeys(obj[key]);
        }
        return newObj;
    }
    return obj; // primitive values
}
//# sourceMappingURL=json-normalizer.js.map