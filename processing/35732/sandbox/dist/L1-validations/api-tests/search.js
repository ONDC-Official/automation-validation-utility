"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = search;
const json_path_utils_1 = __importDefault(require("../utils/json-path-utils"));
const validation_utils_1 = __importDefault(require("../utils/validation-utils"));
function search(input) {
    const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
    let subResults = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;
        function REQUIRED_MESSAGE_SHORT_DESC(input) {
            const scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            let subResults = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = json_path_utils_1.default.getJsonPath(testObj, "$.message.issue.descriptor.short_desc");
                const skipCheck = !validation_utils_1.default.arePresent(attr);
                if (skipCheck)
                    continue;
                const validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.issue.descriptor.short_desc must be present in the payload

	> Note: **Condition REQUIRED_MESSAGE_SHORT_DESC** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.issue.descriptor.short_desc must **not** be present in the payload`,
                        },
                    ];
                }
                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        const testFunctions = [REQUIRED_MESSAGE_SHORT_DESC];
        let invalidResults = [];
        for (const fn of testFunctions) {
            const subResult = fn(input);
            // .filter(r => !r.valid);
            invalidResults = [...invalidResults, ...subResult];
            if (!input.config.runAllValidations && invalidResults.length > 0) {
                return invalidResults;
            }
        }
        if (invalidResults.length > 0) {
            // return invalidResults;
            subResults = invalidResults;
            valid = subResults.every((r) => r.valid);
        }
        delete testObj._EXTERNAL;
    }
    return [{ valid: valid, code: 200 }, ...subResults];
}
//# sourceMappingURL=search.js.map