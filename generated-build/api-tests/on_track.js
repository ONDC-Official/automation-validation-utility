"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = on_track;
var json_path_utils_1 = require("../utils/json-path-utils");
var validation_utils_1 = require("../utils/validation-utils");
function on_track(input) {
    var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
    var subResults = [];
    var valid = true;
    for (var _i = 0, scope_1 = scope; _i < scope_1.length; _i++) {
        var testObj = scope_1[_i];
        testObj._EXTERNAL = input.externalData;
        function REQUIRED_CONTEXT_DOMAIN(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_2 = scope; _i < scope_2.length; _i++) {
                var testObj_1 = scope_2[_i];
                testObj_1._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_1, "$.context.domain");
                var enumList = ["ONDC:LOG10", "ONDC:LOG11", "nic2004:60232"];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_1._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload\n  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in [\"ONDC:LOG10\", \"ONDC:LOG11\", \"nic2004:60232\"]",
                        },
                    ];
                }
                delete testObj_1._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_COUNTRY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_3 = scope; _i < scope_3.length; _i++) {
                var testObj_2 = scope_3[_i];
                testObj_2._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_2, "$.context.country");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_2._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload",
                        },
                    ];
                }
                delete testObj_2._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_CITY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_4 = scope; _i < scope_4.length; _i++) {
                var testObj_3 = scope_4[_i];
                testObj_3._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_3, "$.context.city");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_3._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload",
                        },
                    ];
                }
                delete testObj_3._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_ACTION(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_5 = scope; _i < scope_5.length; _i++) {
                var testObj_4 = scope_5[_i];
                testObj_4._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_4, "$.context.action");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_4._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload",
                        },
                    ];
                }
                delete testObj_4._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_CORE_VERSION(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_6 = scope; _i < scope_6.length; _i++) {
                var testObj_5 = scope_6[_i];
                testObj_5._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_5, "$.context.core_version");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_5._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload",
                        },
                    ];
                }
                delete testObj_5._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_BAP_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_7 = scope; _i < scope_7.length; _i++) {
                var testObj_6 = scope_7[_i];
                testObj_6._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_6, "$.context.bap_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_6._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_6._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_BAP_URI(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_8 = scope; _i < scope_8.length; _i++) {
                var testObj_7 = scope_8[_i];
                testObj_7._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_7, "$.context.bap_uri");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_7._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload",
                        },
                    ];
                }
                delete testObj_7._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_BPP_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_9 = scope; _i < scope_9.length; _i++) {
                var testObj_8 = scope_9[_i];
                testObj_8._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_8, "$.context.bpp_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_8._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_8._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_BPP_URI(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_10 = scope; _i < scope_10.length; _i++) {
                var testObj_9 = scope_10[_i];
                testObj_9._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_9, "$.context.bpp_uri");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_9._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload",
                        },
                    ];
                }
                delete testObj_9._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_TRANSACTION_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_11 = scope; _i < scope_11.length; _i++) {
                var testObj_10 = scope_11[_i];
                testObj_10._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_10, "$.context.transaction_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_10._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_10._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_MESSAGE_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_12 = scope; _i < scope_12.length; _i++) {
                var testObj_11 = scope_12[_i];
                testObj_11._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_11, "$.context.message_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_11._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_11._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_TIMESTAMP(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_13 = scope; _i < scope_13.length; _i++) {
                var testObj_12 = scope_13[_i];
                testObj_12._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_12, "$.context.timestamp");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_12._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload",
                        },
                    ];
                }
                delete testObj_12._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_14 = scope; _i < scope_14.length; _i++) {
                var testObj_13 = scope_14[_i];
                testObj_13._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_13, "$.message.tracking.id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_13._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID**: $.message.tracking.id must be present in the payload",
                        },
                    ];
                }
                delete testObj_13._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_STATUS(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_15 = scope; _i < scope_15.length; _i++) {
                var testObj_14 = scope_15[_i];
                testObj_14._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_14, "$.message.tracking.status");
                var enumList = ["active", "inactive"];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_14._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.tracking.status must be present in the payload\n  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.tracking.status must be in [\"active\", \"inactive\"]",
                        },
                    ];
                }
                delete testObj_14._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_CONTEXT_DOMAIN(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_16 = scope; _i < scope_16.length; _i++) {
                var testObj_15 = scope_16[_i];
                testObj_15._EXTERNAL = input.externalData;
                var enumList = ["ONDC:LOG10", "ONDC:LOG11", "nic2004:60232"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_15, "$.context.domain");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_15._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in [\"ONDC:LOG10\", \"ONDC:LOG11\", \"nic2004:60232\"]\n\n\t> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.context.domain must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_15._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_STATUS(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_17 = scope; _i < scope_17.length; _i++) {
                var testObj_16 = scope_17[_i];
                testObj_16._EXTERNAL = input.externalData;
                var enumList = ["active", "inactive"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_16, "$.message.tracking.status");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_16._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.tracking.status must be in [\"active\", \"inactive\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.tracking.status must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_16._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_18 = scope; _i < scope_18.length; _i++) {
                var testObj_17 = scope_18[_i];
                testObj_17._EXTERNAL = input.externalData;
                var validTags = ["order", "config", "path"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_17, "$.message.tracking.tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_17._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0**: every element of $.message.tracking.tags[*].code must be in [\"order\", \"config\", \"path\"]\n\n\t> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.tracking.tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_17._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0_order(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.tracking.tags[?(@.code=='order')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_19 = scope; _i < scope_19.length; _i++) {
                var testObj_18 = scope_19[_i];
                testObj_18._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_18, "$.list[*].code");
                var validValues = ["id"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_18._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0_order**: every element of $.message.tracking.tags[?(@.code=='order')].list[*].code must be in [\"id\"]",
                        },
                    ];
                }
                delete testObj_18._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0_config(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.tracking.tags[?(@.code=='config')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_20 = scope; _i < scope_20.length; _i++) {
                var testObj_19 = scope_20[_i];
                testObj_19._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_19, "$.list[*].code");
                var validValues = ["attr", "type"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_19._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0_config**: every element of $.message.tracking.tags[?(@.code=='config')].list[*].code must be in [\"attr\", \"type\"]",
                        },
                    ];
                }
                delete testObj_19._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0_path(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.tracking.tags[?(@.code=='path')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_21 = scope; _i < scope_21.length; _i++) {
                var testObj_20 = scope_21[_i];
                testObj_20._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_20, "$.list[*].code");
                var validValues = ["lat_lng", "sequence"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_20._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0_path**: every element of $.message.tracking.tags[?(@.code=='path')].list[*].code must be in [\"lat_lng\", \"sequence\"]",
                        },
                    ];
                }
                delete testObj_20._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        var testFunctions = [
            REQUIRED_CONTEXT_DOMAIN,
            REQUIRED_CONTEXT_COUNTRY,
            REQUIRED_CONTEXT_CITY,
            REQUIRED_CONTEXT_ACTION,
            REQUIRED_CONTEXT_CORE_VERSION,
            REQUIRED_CONTEXT_BAP_ID,
            REQUIRED_CONTEXT_BAP_URI,
            REQUIRED_CONTEXT_BPP_ID,
            REQUIRED_CONTEXT_BPP_URI,
            REQUIRED_CONTEXT_TRANSACTION_ID,
            REQUIRED_CONTEXT_MESSAGE_ID,
            REQUIRED_CONTEXT_TIMESTAMP,
            REQUIRED_MESSAGE_ID,
            REQUIRED_MESSAGE_STATUS,
            VALID_ENUM_CONTEXT_DOMAIN,
            VALID_ENUM_MESSAGE_STATUS,
            validate_tag_0,
            validate_tag_0_order,
            validate_tag_0_config,
            validate_tag_0_path,
        ];
        var invalidResults = [];
        for (var _a = 0, testFunctions_1 = testFunctions; _a < testFunctions_1.length; _a++) {
            var fn = testFunctions_1[_a];
            var subResult = fn(input);
            // .filter(r => !r.valid);
            invalidResults = __spreadArray(__spreadArray([], invalidResults, true), subResult, true);
            if (!input.config.runAllValidations && invalidResults.length > 0) {
                return invalidResults;
            }
        }
        if (invalidResults.length > 0) {
            // return invalidResults;
            subResults = invalidResults;
            valid = subResults.every(function (r) { return r.valid; });
        }
        delete testObj._EXTERNAL;
    }
    return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
}
