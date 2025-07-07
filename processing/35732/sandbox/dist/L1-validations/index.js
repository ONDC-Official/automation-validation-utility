"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performL1validations = performL1validations;
const json_normalizer_1 = __importDefault(require("./utils/json-normalizer"));
const search_1 = __importDefault(require("./api-tests/search"));
function performL1validations(action, payload, allErrors = false, externalData = {}) {
    const normalizedPayload = (0, json_normalizer_1.default)(payload);
    externalData._SELF = normalizedPayload;
    switch (action) {
        case "search":
            return (0, search_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        default:
            throw new Error("Action not found");
    }
}
//# sourceMappingURL=index.js.map