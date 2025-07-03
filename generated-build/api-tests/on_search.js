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
exports.default = on_search;
var json_path_utils_1 = require("../utils/json-path-utils");
var validation_utils_1 = require("../utils/validation-utils");
function on_search(input) {
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
        function REQUIRED_MESSAGE_NAME(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_14 = scope; _i < scope_14.length; _i++) {
                var testObj_13 = scope_14[_i];
                testObj_13._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_13, "$.message.catalog['bpp/descriptor'].name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_13._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME**: $.message.catalog['bpp/descriptor'].name must be present in the payload",
                        },
                    ];
                }
                delete testObj_13._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_15 = scope; _i < scope_15.length; _i++) {
                var testObj_14 = scope_15[_i];
                testObj_14._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_14, "$.message.catalog['bpp/providers'][*].id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_14._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID**: $.message.catalog['bpp/providers'][*].id must be present in the payload",
                        },
                    ];
                }
                delete testObj_14._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_15(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_16 = scope; _i < scope_16.length; _i++) {
                var testObj_15 = scope_16[_i];
                testObj_15._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_15, "$.message.catalog['bpp/providers'][*].descriptor.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_15._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_15**: $.message.catalog['bpp/providers'][*].descriptor.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_15._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_SHORT_DESC(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_17 = scope; _i < scope_17.length; _i++) {
                var testObj_16 = scope_17[_i];
                testObj_16._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_16, "$.message.catalog['bpp/providers'][*].descriptor.short_desc");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_16._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.catalog['bpp/providers'][*].descriptor.short_desc must be present in the payload",
                        },
                    ];
                }
                delete testObj_16._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LONG_DESC(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_18 = scope; _i < scope_18.length; _i++) {
                var testObj_17 = scope_18[_i];
                testObj_17._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_17, "$.message.catalog['bpp/providers'][*].descriptor.long_desc");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_17._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LONG_DESC**: $.message.catalog['bpp/providers'][*].descriptor.long_desc must be present in the payload",
                        },
                    ];
                }
                delete testObj_17._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID_18(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_19 = scope; _i < scope_19.length; _i++) {
                var testObj_18 = scope_19[_i];
                testObj_18._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_18, "$.message.catalog['bpp/providers'][*].categories[*].id");
                var enumList = [
                    "Express Delivery",
                    "Standard Delivery",
                    "Immediate Delivery",
                    "Next Day Delivery",
                    "Same Day Delivery",
                    "Instant Delivery",
                ];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_18._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID_18**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_ID_18.1**: $.message.catalog['bpp/providers'][*].categories[*].id must be present in the payload\n  - **condition REQUIRED_MESSAGE_ID_18.2**: every element of $.message.catalog['bpp/providers'][*].categories[*].id must be in [\"Express Delivery\", \"Standard Delivery\", \"Immediate Delivery\", \"Next Day Delivery\", \"Same Day Delivery\", \"Instant Delivery\"]",
                        },
                    ];
                }
                delete testObj_18._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LABEL(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_20 = scope; _i < scope_20.length; _i++) {
                var testObj_19 = scope_20[_i];
                testObj_19._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_19, "$.message.catalog['bpp/providers'][*].categories[*].time.label");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_19._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LABEL**: $.message.catalog['bpp/providers'][*].categories[*].time.label must be present in the payload",
                        },
                    ];
                }
                delete testObj_19._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_DURATION(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_21 = scope; _i < scope_21.length; _i++) {
                var testObj_20 = scope_21[_i];
                testObj_20._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_20, "$.message.catalog['bpp/providers'][*].categories[*].time.duration");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_20._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_DURATION**: $.message.catalog['bpp/providers'][*].categories[*].time.duration must be present in the payload",
                        },
                    ];
                }
                delete testObj_20._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_TIMESTAMP(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_22 = scope; _i < scope_22.length; _i++) {
                var testObj_21 = scope_22[_i];
                testObj_21._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_21, "$.message.catalog['bpp/providers'][*].categories[*].time.timestamp");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_21._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.catalog['bpp/providers'][*].categories[*].time.timestamp must be present in the payload",
                        },
                    ];
                }
                delete testObj_21._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID_22(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_23 = scope; _i < scope_23.length; _i++) {
                var testObj_22 = scope_23[_i];
                testObj_22._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_22, "$.message.catalog['bpp/providers'][*].fulfillments[*].id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_22._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID_22**: $.message.catalog['bpp/providers'][*].fulfillments[*].id must be present in the payload",
                        },
                    ];
                }
                delete testObj_22._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_24 = scope; _i < scope_24.length; _i++) {
                var testObj_23 = scope_24[_i];
                testObj_23._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_23, "$.message.catalog['bpp/providers'][*].fulfillments[*].type");
                var enumList = ["Delivery", "Return", "RTO"];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_23._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.catalog['bpp/providers'][*].fulfillments[*].type must be present in the payload\n  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].type must be in [\"Delivery\", \"Return\", \"RTO\"]",
                        },
                    ];
                }
                delete testObj_23._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID_24(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_25 = scope; _i < scope_25.length; _i++) {
                var testObj_24 = scope_25[_i];
                testObj_24._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_24, "$.message.catalog['bpp/providers'][*].items[*].id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_24._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID_24**: $.message.catalog['bpp/providers'][*].items[*].id must be present in the payload",
                        },
                    ];
                }
                delete testObj_24._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_PARENT_ITEM_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_26 = scope; _i < scope_26.length; _i++) {
                var testObj_25 = scope_26[_i];
                testObj_25._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_25, "$.message.catalog['bpp/providers'][*].items[*].parent_item_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_25._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_PARENT_ITEM_ID**: $.message.catalog['bpp/providers'][*].items[*].parent_item_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_25._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CATEGORY_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_27 = scope; _i < scope_27.length; _i++) {
                var testObj_26 = scope_27[_i];
                testObj_26._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_26, "$.message.catalog['bpp/providers'][*].items[*].category_id");
                var enumList = [
                    "Express Delivery",
                    "Standard Delivery",
                    "Immediate Delivery",
                    "Next Day Delivery",
                    "Same Day Delivery",
                    "Instant Delivery",
                ];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_26._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CATEGORY_ID**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_CATEGORY_ID.1**: $.message.catalog['bpp/providers'][*].items[*].category_id must be present in the payload\n  - **condition REQUIRED_MESSAGE_CATEGORY_ID.2**: every element of $.message.catalog['bpp/providers'][*].items[*].category_id must be in [\"Express Delivery\", \"Standard Delivery\", \"Immediate Delivery\", \"Next Day Delivery\", \"Same Day Delivery\", \"Instant Delivery\"]",
                        },
                    ];
                }
                delete testObj_26._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_FULFILLMENT_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_28 = scope; _i < scope_28.length; _i++) {
                var testObj_27 = scope_28[_i];
                testObj_27._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_27, "$.message.catalog['bpp/providers'][*].items[*].fulfillment_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_27._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_FULFILLMENT_ID**: $.message.catalog['bpp/providers'][*].items[*].fulfillment_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_27._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_28(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_29 = scope; _i < scope_29.length; _i++) {
                var testObj_28 = scope_29[_i];
                testObj_28._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_28, "$.message.catalog['bpp/providers'][*].items[*].descriptor.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_28._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_28**: $.message.catalog['bpp/providers'][*].items[*].descriptor.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_28._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_SHORT_DESC_29(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_30 = scope; _i < scope_30.length; _i++) {
                var testObj_29 = scope_30[_i];
                testObj_29._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_29, "$.message.catalog['bpp/providers'][*].items[*].descriptor.short_desc");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_29._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_SHORT_DESC_29**: $.message.catalog['bpp/providers'][*].items[*].descriptor.short_desc must be present in the payload",
                        },
                    ];
                }
                delete testObj_29._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LONG_DESC_30(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_31 = scope; _i < scope_31.length; _i++) {
                var testObj_30 = scope_31[_i];
                testObj_30._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_30, "$.message.catalog['bpp/providers'][*].items[*].descriptor.long_desc");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_30._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LONG_DESC_30**: $.message.catalog['bpp/providers'][*].items[*].descriptor.long_desc must be present in the payload",
                        },
                    ];
                }
                delete testObj_30._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CURRENCY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_32 = scope; _i < scope_32.length; _i++) {
                var testObj_31 = scope_32[_i];
                testObj_31._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_31, "$.message.catalog['bpp/providers'][*].items[*].price.currency");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_31._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.catalog['bpp/providers'][*].items[*].price.currency must be present in the payload",
                        },
                    ];
                }
                delete testObj_31._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_33 = scope; _i < scope_33.length; _i++) {
                var testObj_32 = scope_33[_i];
                testObj_32._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_32, "$.message.catalog['bpp/providers'][*].items[*].price.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_32._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE**: $.message.catalog['bpp/providers'][*].items[*].price.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_32._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_CONTEXT_DOMAIN(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_34 = scope; _i < scope_34.length; _i++) {
                var testObj_33 = scope_34[_i];
                testObj_33._EXTERNAL = input.externalData;
                var enumList = ["ONDC:LOG10", "ONDC:LOG11", "nic2004:60232"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_33, "$.context.domain");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_33._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in [\"ONDC:LOG10\", \"ONDC:LOG11\", \"nic2004:60232\"]\n\n\t> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.context.domain must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_33._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_CATEGORY_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_35 = scope; _i < scope_35.length; _i++) {
                var testObj_34 = scope_35[_i];
                testObj_34._EXTERNAL = input.externalData;
                var enumList = [
                    "Express Delivery",
                    "Standard Delivery",
                    "Immediate Delivery",
                    "Next Day Delivery",
                    "Same Day Delivery",
                    "Instant Delivery",
                ];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_34, "$.message.catalog['bpp/providers'][*].items[*].category_id");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_34._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_CATEGORY_ID**: every element of $.message.catalog['bpp/providers'][*].items[*].category_id must be in [\"Express Delivery\", \"Standard Delivery\", \"Immediate Delivery\", \"Next Day Delivery\", \"Same Day Delivery\", \"Instant Delivery\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_ID** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.catalog['bpp/providers'][*].items[*].category_id must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_34._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_36 = scope; _i < scope_36.length; _i++) {
                var testObj_35 = scope_36[_i];
                testObj_35._EXTERNAL = input.externalData;
                var enumList = [
                    "Express Delivery",
                    "Standard Delivery",
                    "Immediate Delivery",
                    "Next Day Delivery",
                    "Same Day Delivery",
                    "Instant Delivery",
                ];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_35, "$.message.catalog['bpp/providers'][*].categories[*].id");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_35._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_ID**: every element of $.message.catalog['bpp/providers'][*].categories[*].id must be in [\"Express Delivery\", \"Standard Delivery\", \"Immediate Delivery\", \"Next Day Delivery\", \"Same Day Delivery\", \"Instant Delivery\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_ID** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.catalog['bpp/providers'][*].categories[*].id must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_35._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_37 = scope; _i < scope_37.length; _i++) {
                var testObj_36 = scope_37[_i];
                testObj_36._EXTERNAL = input.externalData;
                var enumList = ["Delivery", "Return", "RTO"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_36, "$.message.catalog['bpp/providers'][*].fulfillments[*].type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_36._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].type must be in [\"Delivery\", \"Return\", \"RTO\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.catalog['bpp/providers'][*].fulfillments[*].type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_36._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_38 = scope; _i < scope_38.length; _i++) {
                var testObj_37 = scope_38[_i];
                testObj_37._EXTERNAL = input.externalData;
                var validTags = ["bpp_terms"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_37, "$.message.catalog['bpp/descriptor'].tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_37._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0**: every element of $.message.catalog['bpp/descriptor'].tags[*].code must be in [\"bpp_terms\"]\n\n\t> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.catalog['bpp/descriptor'].tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_37._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0_bpp_terms(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_39 = scope; _i < scope_39.length; _i++) {
                var testObj_38 = scope_39[_i];
                testObj_38._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_38, "$.list[*].code");
                var validValues = [
                    "static_terms",
                    "static_terms_new",
                    "effective_date",
                    "np_tax_type",
                    "max_liability",
                    "max_liability_cap",
                    "mandatory_arbitration",
                    "court_jurisdiction",
                    "delay_interest",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_38._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0_bpp_terms**: every element of $.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[*].code must be in [\"static_terms\", \"static_terms_new\", \"effective_date\", \"np_tax_type\", \"max_liability\", \"max_liability_cap\", \"mandatory_arbitration\", \"court_jurisdiction\", \"delay_interest\"]",
                        },
                    ];
                }
                delete testObj_38._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_40 = scope; _i < scope_40.length; _i++) {
                var testObj_39 = scope_40[_i];
                testObj_39._EXTERNAL = input.externalData;
                var validTags = [
                    "distance",
                    "fulfill_request",
                    "linked_provider",
                    "fulfill_response",
                ];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_39, "$.message.catalog['bpp/providers'][*].fulfillments[*].tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_39._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].tags[*].code must be in [\"distance\", \"fulfill_request\", \"linked_provider\", \"fulfill_response\"]\n\n\t> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.catalog['bpp/providers'][*].fulfillments[*].tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_39._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1_distance(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.catalog['bpp/providers'][*].fulfillments[*].tags[?(@.code=='distance')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_41 = scope; _i < scope_41.length; _i++) {
                var testObj_40 = scope_41[_i];
                testObj_40._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_40, "$.list[*].code");
                var validValues = [
                    "motorable_distance_type",
                    "motorable_distance",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_40._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1_distance**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].tags[?(@.code=='distance')].list[*].code must be in [\"motorable_distance_type\", \"motorable_distance\"]",
                        },
                    ];
                }
                delete testObj_40._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1_fulfill_request(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.catalog['bpp/providers'][*].fulfillments[*].tags[?(@.code=='fulfill_request')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_42 = scope; _i < scope_42.length; _i++) {
                var testObj_41 = scope_42[_i];
                testObj_41._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_41, "$.list[*].code");
                var validValues = [
                    "rider_count",
                    "order_count",
                    "rate_basis",
                    "motorable_distance",
                    "pickup_slot_start",
                    "pickup_slot_end",
                    "delivery_slot_start",
                    "delivery_slot_end",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_41._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1_fulfill_request**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].tags[?(@.code=='fulfill_request')].list[*].code must be in [\"rider_count\", \"order_count\", \"rate_basis\", \"motorable_distance\", \"pickup_slot_start\", \"pickup_slot_end\", \"delivery_slot_start\", \"delivery_slot_end\"]",
                        },
                    ];
                }
                delete testObj_41._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1_linked_provider(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.catalog['bpp/providers'][*].fulfillments[*].tags[?(@.code=='linked_provider')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_43 = scope; _i < scope_43.length; _i++) {
                var testObj_42 = scope_43[_i];
                testObj_42._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_42, "$.list[*].code");
                var validValues = ["id", "name"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_42._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1_linked_provider**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in [\"id\", \"name\"]",
                        },
                    ];
                }
                delete testObj_42._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1_fulfill_response(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.catalog['bpp/providers'][*].fulfillments[*].tags[?(@.code=='fulfill_response')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_44 = scope; _i < scope_44.length; _i++) {
                var testObj_43 = scope_44[_i];
                testObj_43._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_43, "$.list[*].code");
                var validValues = [
                    "rider_count",
                    "order_count",
                    "rate_basis",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_43._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1_fulfill_response**: every element of $.message.catalog['bpp/providers'][*].fulfillments[*].tags[?(@.code=='fulfill_response')].list[*].code must be in [\"rider_count\", \"order_count\", \"rate_basis\"]",
                        },
                    ];
                }
                delete testObj_43._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_2(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_45 = scope; _i < scope_45.length; _i++) {
                var testObj_44 = scope_45[_i];
                testObj_44._EXTERNAL = input.externalData;
                var validTags = ["type"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_44, "$.message.catalog['bpp/providers'][*].items[*].tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_44._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_2**: every element of $.message.catalog['bpp/providers'][*].items[*].tags[*].code must be in [\"type\"]\n\n\t> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.catalog['bpp/providers'][*].items[*].tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_44._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_2_type(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='type')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_46 = scope; _i < scope_46.length; _i++) {
                var testObj_45 = scope_46[_i];
                testObj_45._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_45, "$.list[*].code");
                var validValues = ["type", "unit"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_45._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_2_type**: every element of $.message.catalog['bpp/providers'][*].items[*].tags[?(@.code=='type')].list[*].code must be in [\"type\", \"unit\"]",
                        },
                    ];
                }
                delete testObj_45._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_47 = scope; _i < scope_47.length; _i++) {
                var testObj_46 = scope_47[_i];
                testObj_46._EXTERNAL = input.externalData;
                var validTags = ["lsp_features", "special_req"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_46, "$.message.catalog['bpp/providers'][*].tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_46._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3**: every element of $.message.catalog['bpp/providers'][*].tags[*].code must be in [\"lsp_features\", \"special_req\"]\n\n\t> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.catalog['bpp/providers'][*].tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_46._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_lsp_features(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.catalog['bpp/providers'][*].tags[?(@.code=='lsp_features')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_48 = scope; _i < scope_48.length; _i++) {
                var testObj_47 = scope_48[_i];
                testObj_47._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_47, "$.list[*].code");
                var validValues = [
                    "00B",
                    "00E",
                    "01D",
                    "005",
                    "009",
                    "00C",
                    "000",
                    "001",
                    "002",
                    "003",
                    "004",
                    "006",
                    "007",
                    "008",
                    "00A",
                    "00D",
                    "00F",
                    "010",
                    "011",
                    "012",
                    "013",
                    "014",
                    "015",
                    "016",
                    "017",
                    "018",
                    "019",
                    "01A",
                    "01B",
                    "01C",
                    "01D",
                    "01E",
                    "01F",
                    "020",
                    "021",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_47._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_lsp_features**: every element of $.message.catalog['bpp/providers'][*].tags[?(@.code=='lsp_features')].list[*].code must be in [\"00B\", \"00E\", \"01D\", \"005\", \"009\", \"00C\", \"000\", \"001\", \"002\", \"003\", \"004\", \"006\", \"007\", \"008\", \"00A\", \"00D\", \"00F\", \"010\", \"011\", \"012\", \"013\", \"014\", \"015\", \"016\", \"017\", \"018\", \"019\", \"01A\", \"01B\", \"01C\", \"01D\", \"01E\", \"01F\", \"020\", \"021\"]",
                        },
                    ];
                }
                delete testObj_47._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_special_req(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.catalog['bpp/providers'][*].tags[?(@.code=='special_req')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_49 = scope; _i < scope_49.length; _i++) {
                var testObj_48 = scope_49[_i];
                testObj_48._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_48, "$.list[*].code");
                var validValues = [
                    "dangerous_goods",
                    "cold_storage",
                    "open_box_delivery",
                    "fragile_handling",
                    "cod_order",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_48._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_special_req**: every element of $.message.catalog['bpp/providers'][*].tags[?(@.code=='special_req')].list[*].code must be in [\"dangerous_goods\", \"cold_storage\", \"open_box_delivery\", \"fragile_handling\", \"cod_order\"]",
                        },
                    ];
                }
                delete testObj_48._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_static_terms(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_50 = scope; _i < scope_50.length; _i++) {
                var testObj_49 = scope_50[_i];
                testObj_49._EXTERNAL = input.externalData;
                var staticTerms = json_path_utils_1.default.getJsonPath(testObj_49, "$.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='static_terms')].value");
                var staticTermsNew = json_path_utils_1.default.getJsonPath(testObj_49, "$.message.catalog['bpp/descriptor'].tags[?(@.code=='bpp_terms')].list[?(@.code=='static_terms_new')].value");
                var validate = validation_utils_1.default.arePresent(staticTermsNew) ||
                    validation_utils_1.default.arePresent(staticTerms);
                if (!validate) {
                    delete testObj_49._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "Static terms should be sent inside bpp/descriptor/tags",
                        },
                    ];
                }
                delete testObj_49._EXTERNAL;
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
            REQUIRED_MESSAGE_NAME,
            REQUIRED_MESSAGE_ID,
            REQUIRED_MESSAGE_NAME_15,
            REQUIRED_MESSAGE_SHORT_DESC,
            REQUIRED_MESSAGE_LONG_DESC,
            REQUIRED_MESSAGE_ID_18,
            REQUIRED_MESSAGE_LABEL,
            REQUIRED_MESSAGE_DURATION,
            REQUIRED_MESSAGE_TIMESTAMP,
            REQUIRED_MESSAGE_ID_22,
            REQUIRED_MESSAGE_TYPE,
            REQUIRED_MESSAGE_ID_24,
            REQUIRED_MESSAGE_PARENT_ITEM_ID,
            REQUIRED_MESSAGE_CATEGORY_ID,
            REQUIRED_MESSAGE_FULFILLMENT_ID,
            REQUIRED_MESSAGE_NAME_28,
            REQUIRED_MESSAGE_SHORT_DESC_29,
            REQUIRED_MESSAGE_LONG_DESC_30,
            REQUIRED_MESSAGE_CURRENCY,
            REQUIRED_MESSAGE_VALUE,
            VALID_ENUM_CONTEXT_DOMAIN,
            VALID_ENUM_MESSAGE_CATEGORY_ID,
            VALID_ENUM_MESSAGE_ID,
            VALID_ENUM_MESSAGE_TYPE,
            validate_tag_0,
            validate_tag_0_bpp_terms,
            validate_tag_1,
            validate_tag_1_distance,
            validate_tag_1_fulfill_request,
            validate_tag_1_linked_provider,
            validate_tag_1_fulfill_response,
            validate_tag_2,
            validate_tag_2_type,
            validate_tag_3,
            validate_tag_3_lsp_features,
            validate_tag_3_special_req,
            validate_static_terms,
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
