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
exports.default = confirm;
var json_path_utils_1 = require("../utils/json-path-utils");
var validation_utils_1 = require("../utils/validation-utils");
function confirm(input) {
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
        function REQUIRED_CONTEXT_TTL(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_14 = scope; _i < scope_14.length; _i++) {
                var testObj_13 = scope_14[_i];
                testObj_13._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_13, "$.context.ttl");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_13._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload",
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
                var attr = json_path_utils_1.default.getJsonPath(testObj_14, "$.message.order.id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_14._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload",
                        },
                    ];
                }
                delete testObj_14._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_STATE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_16 = scope; _i < scope_16.length; _i++) {
                var testObj_15 = scope_16[_i];
                testObj_15._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_15, "$.message.order.state");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_15._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_STATE**: $.message.order.state must be present in the payload",
                        },
                    ];
                }
                delete testObj_15._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID_16(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_17 = scope; _i < scope_17.length; _i++) {
                var testObj_16 = scope_17[_i];
                testObj_16._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_16, "$.message.order.provider.id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_16._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.provider.id must be present in the payload",
                        },
                    ];
                }
                delete testObj_16._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CATEGORY_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_18 = scope; _i < scope_18.length; _i++) {
                var testObj_17 = scope_18[_i];
                testObj_17._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_17, "$.message.order.items[*].category_id");
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
                    delete testObj_17._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CATEGORY_ID**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_CATEGORY_ID.1**: $.message.order.items[*].category_id must be present in the payload\n  - **condition REQUIRED_MESSAGE_CATEGORY_ID.2**: every element of $.message.order.items[*].category_id must be in [\"Express Delivery\", \"Standard Delivery\", \"Immediate Delivery\", \"Next Day Delivery\", \"Same Day Delivery\", \"Instant Delivery\"]",
                        },
                    ];
                }
                delete testObj_17._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LABEL(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_19 = scope; _i < scope_19.length; _i++) {
                var testObj_18 = scope_19[_i];
                testObj_18._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_18, "$.message.order.items[*].time.label");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_18._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LABEL**: $.message.order.items[*].time.label must be present in the payload",
                        },
                    ];
                }
                delete testObj_18._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_DURATION(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_20 = scope; _i < scope_20.length; _i++) {
                var testObj_19 = scope_20[_i];
                testObj_19._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_19, "$.message.order.items[*].time.duration");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_19._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_DURATION**: $.message.order.items[*].time.duration must be present in the payload",
                        },
                    ];
                }
                delete testObj_19._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_TIMESTAMP(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_21 = scope; _i < scope_21.length; _i++) {
                var testObj_20 = scope_21[_i];
                testObj_20._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_20, "$.message.order.items[*].time.timestamp");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_20._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.order.items[*].time.timestamp must be present in the payload",
                        },
                    ];
                }
                delete testObj_20._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CURRENCY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_22 = scope; _i < scope_22.length; _i++) {
                var testObj_21 = scope_22[_i];
                testObj_21._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_21, "$.message.order.quote.price.currency");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_21._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload",
                        },
                    ];
                }
                delete testObj_21._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_23 = scope; _i < scope_23.length; _i++) {
                var testObj_22 = scope_23[_i];
                testObj_22._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_22, "$.message.order.quote.price.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_22._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_22._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_24 = scope; _i < scope_24.length; _i++) {
                var testObj_23 = scope_24[_i];
                testObj_23._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_23, "$.message.order.quote.breakup[*]['@ondc/org/item_id']");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_23._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload",
                        },
                    ];
                }
                delete testObj_23._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_25 = scope; _i < scope_25.length; _i++) {
                var testObj_24 = scope_25[_i];
                testObj_24._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_24, "$.message.order.quote.breakup[*]['@ondc/org/title_type']");
                var enumList = [
                    "delivery",
                    "rto",
                    "tax",
                    "diff",
                    "tax_diff",
                    "discount",
                    "cod",
                    "surge",
                ];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_24._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload\n  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in [\"delivery\", \"rto\", \"tax\", \"diff\", \"tax_diff\", \"discount\", \"cod\", \"surge\"]",
                        },
                    ];
                }
                delete testObj_24._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CURRENCY_25(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_26 = scope; _i < scope_26.length; _i++) {
                var testObj_25 = scope_26[_i];
                testObj_25._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_25, "$.message.order.quote.breakup[*].price.currency");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_25._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CURRENCY_25**: $.message.order.quote.breakup[*].price.currency must be present in the payload",
                        },
                    ];
                }
                delete testObj_25._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE_26(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_27 = scope; _i < scope_27.length; _i++) {
                var testObj_26 = scope_27[_i];
                testObj_26._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_26, "$.message.order.quote.breakup[*].price.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_26._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE_26**: $.message.order.quote.breakup[*].price.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_26._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID_27(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_28 = scope; _i < scope_28.length; _i++) {
                var testObj_27 = scope_28[_i];
                testObj_27._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_27, "$.message.order.fulfillments[*].id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_27._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID_27**: $.message.order.fulfillments[*].id must be present in the payload",
                        },
                    ];
                }
                delete testObj_27._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_29 = scope; _i < scope_29.length; _i++) {
                var testObj_28 = scope_29[_i];
                testObj_28._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_28, "$.message.order.fulfillments[*].type");
                var enumList = ["Delivery", "Return", "RTO"];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_28._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload\n  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in [\"Delivery\", \"Return\", \"RTO\"]",
                        },
                    ];
                }
                delete testObj_28._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_DURATION_29(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_30 = scope; _i < scope_30.length; _i++) {
                var testObj_29 = scope_30[_i];
                testObj_29._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_29, "$.message.order.fulfillments[*].start.time.duration");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_29._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_DURATION_29**: $.message.order.fulfillments[*].start.time.duration must be present in the payload",
                        },
                    ];
                }
                delete testObj_29._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_31 = scope; _i < scope_31.length; _i++) {
                var testObj_30 = scope_31[_i];
                testObj_30._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_30, "$.message.order.fulfillments[*].start.person.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_30._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME**: $.message.order.fulfillments[*].start.person.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_30._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID_31(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_32 = scope; _i < scope_32.length; _i++) {
                var testObj_31 = scope_32[_i];
                testObj_31._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_31, "$.message.order.fulfillments[*].start.location.id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_31._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID_31**: $.message.order.fulfillments[*].start.location.id must be present in the payload",
                        },
                    ];
                }
                delete testObj_31._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_GPS(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_33 = scope; _i < scope_33.length; _i++) {
                var testObj_32 = scope_33[_i];
                testObj_32._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_32, "$.message.order.fulfillments[*].start.location.gps");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_32._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload",
                        },
                    ];
                }
                delete testObj_32._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_33(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_34 = scope; _i < scope_34.length; _i++) {
                var testObj_33 = scope_34[_i];
                testObj_33._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_33, "$.message.order.fulfillments[*].start.location.address.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_33._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_33**: $.message.order.fulfillments[*].start.location.address.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_33._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_BUILDING(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_35 = scope; _i < scope_35.length; _i++) {
                var testObj_34 = scope_35[_i];
                testObj_34._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_34, "$.message.order.fulfillments[*].start.location.address.building");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_34._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.fulfillments[*].start.location.address.building must be present in the payload",
                        },
                    ];
                }
                delete testObj_34._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LOCALITY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_36 = scope; _i < scope_36.length; _i++) {
                var testObj_35 = scope_36[_i];
                testObj_35._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_35, "$.message.order.fulfillments[*].start.location.address.locality");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_35._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.fulfillments[*].start.location.address.locality must be present in the payload",
                        },
                    ];
                }
                delete testObj_35._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CITY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_37 = scope; _i < scope_37.length; _i++) {
                var testObj_36 = scope_37[_i];
                testObj_36._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_36, "$.message.order.fulfillments[*].start.location.address.city");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_36._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CITY**: $.message.order.fulfillments[*].start.location.address.city must be present in the payload",
                        },
                    ];
                }
                delete testObj_36._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_STATE_37(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_38 = scope; _i < scope_38.length; _i++) {
                var testObj_37 = scope_38[_i];
                testObj_37._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_37, "$.message.order.fulfillments[*].start.location.address.state");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_37._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_STATE_37**: $.message.order.fulfillments[*].start.location.address.state must be present in the payload",
                        },
                    ];
                }
                delete testObj_37._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_COUNTRY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_39 = scope; _i < scope_39.length; _i++) {
                var testObj_38 = scope_39[_i];
                testObj_38._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_38, "$.message.order.fulfillments[*].start.location.address.country");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_38._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.fulfillments[*].start.location.address.country must be present in the payload",
                        },
                    ];
                }
                delete testObj_38._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_AREA_CODE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_40 = scope; _i < scope_40.length; _i++) {
                var testObj_39 = scope_40[_i];
                testObj_39._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_39, "$.message.order.fulfillments[*].start.location.address.area_code");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_39._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload",
                        },
                    ];
                }
                delete testObj_39._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_PHONE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_41 = scope; _i < scope_41.length; _i++) {
                var testObj_40 = scope_41[_i];
                testObj_40._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_40, "$.message.order.fulfillments[*].start.contact.phone");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_40._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.fulfillments[*].start.contact.phone must be present in the payload",
                        },
                    ];
                }
                delete testObj_40._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_EMAIL(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_42 = scope; _i < scope_42.length; _i++) {
                var testObj_41 = scope_42[_i];
                testObj_41._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_41, "$.message.order.fulfillments[*].start.contact.email");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_41._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.fulfillments[*].start.contact.email must be present in the payload",
                        },
                    ];
                }
                delete testObj_41._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_42(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_43 = scope; _i < scope_43.length; _i++) {
                var testObj_42 = scope_43[_i];
                testObj_42._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_42, "$.message.order.fulfillments[*].end.person.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_42._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_42**: $.message.order.fulfillments[*].end.person.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_42._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_GPS_43(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_44 = scope; _i < scope_44.length; _i++) {
                var testObj_43 = scope_44[_i];
                testObj_43._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_43, "$.message.order.fulfillments[*].end.location.gps");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_43._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_GPS_43**: $.message.order.fulfillments[*].end.location.gps must be present in the payload",
                        },
                    ];
                }
                delete testObj_43._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_44(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_45 = scope; _i < scope_45.length; _i++) {
                var testObj_44 = scope_45[_i];
                testObj_44._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_44, "$.message.order.fulfillments[*].end.location.address.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_44._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_44**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_44._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_BUILDING_45(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_46 = scope; _i < scope_46.length; _i++) {
                var testObj_45 = scope_46[_i];
                testObj_45._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_45, "$.message.order.fulfillments[*].end.location.address.building");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_45._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_BUILDING_45**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload",
                        },
                    ];
                }
                delete testObj_45._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LOCALITY_46(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_47 = scope; _i < scope_47.length; _i++) {
                var testObj_46 = scope_47[_i];
                testObj_46._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_46, "$.message.order.fulfillments[*].end.location.address.locality");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_46._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LOCALITY_46**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload",
                        },
                    ];
                }
                delete testObj_46._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CITY_47(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_48 = scope; _i < scope_48.length; _i++) {
                var testObj_47 = scope_48[_i];
                testObj_47._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_47, "$.message.order.fulfillments[*].end.location.address.city");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_47._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CITY_47**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload",
                        },
                    ];
                }
                delete testObj_47._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_STATE_48(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_49 = scope; _i < scope_49.length; _i++) {
                var testObj_48 = scope_49[_i];
                testObj_48._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_48, "$.message.order.fulfillments[*].end.location.address.state");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_48._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_STATE_48**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload",
                        },
                    ];
                }
                delete testObj_48._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_COUNTRY_49(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_50 = scope; _i < scope_50.length; _i++) {
                var testObj_49 = scope_50[_i];
                testObj_49._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_49, "$.message.order.fulfillments[*].end.location.address.country");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_49._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_COUNTRY_49**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload",
                        },
                    ];
                }
                delete testObj_49._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_AREA_CODE_50(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_51 = scope; _i < scope_51.length; _i++) {
                var testObj_50 = scope_51[_i];
                testObj_50._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_50, "$.message.order.fulfillments[*].end.location.address.area_code");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_50._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_AREA_CODE_50**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload",
                        },
                    ];
                }
                delete testObj_50._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_PHONE_51(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_52 = scope; _i < scope_52.length; _i++) {
                var testObj_51 = scope_52[_i];
                testObj_51._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_51, "$.message.order.fulfillments[*].end.contact.phone");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_51._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_PHONE_51**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload",
                        },
                    ];
                }
                delete testObj_51._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_EMAIL_52(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_53 = scope; _i < scope_53.length; _i++) {
                var testObj_52 = scope_53[_i];
                testObj_52._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_52, "$.message.order.fulfillments[*].end.contact.email");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_52._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_EMAIL_52**: $.message.order.fulfillments[*].end.contact.email must be present in the payload",
                        },
                    ];
                }
                delete testObj_52._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_53(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_54 = scope; _i < scope_54.length; _i++) {
                var testObj_53 = scope_54[_i];
                testObj_53._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_53, "$.message.order.billing.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_53._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_53**: $.message.order.billing.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_53._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_54(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_55 = scope; _i < scope_55.length; _i++) {
                var testObj_54 = scope_55[_i];
                testObj_54._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_54, "$.message.order.billing.address.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_54._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_54**: $.message.order.billing.address.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_54._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_BUILDING_55(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_56 = scope; _i < scope_56.length; _i++) {
                var testObj_55 = scope_56[_i];
                testObj_55._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_55, "$.message.order.billing.address.building");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_55._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_BUILDING_55**: $.message.order.billing.address.building must be present in the payload",
                        },
                    ];
                }
                delete testObj_55._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LOCALITY_56(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_57 = scope; _i < scope_57.length; _i++) {
                var testObj_56 = scope_57[_i];
                testObj_56._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_56, "$.message.order.billing.address.locality");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_56._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LOCALITY_56**: $.message.order.billing.address.locality must be present in the payload",
                        },
                    ];
                }
                delete testObj_56._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CITY_57(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_58 = scope; _i < scope_58.length; _i++) {
                var testObj_57 = scope_58[_i];
                testObj_57._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_57, "$.message.order.billing.address.city");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_57._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CITY_57**: $.message.order.billing.address.city must be present in the payload",
                        },
                    ];
                }
                delete testObj_57._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_STATE_58(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_59 = scope; _i < scope_59.length; _i++) {
                var testObj_58 = scope_59[_i];
                testObj_58._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_58, "$.message.order.billing.address.state");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_58._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_STATE_58**: $.message.order.billing.address.state must be present in the payload",
                        },
                    ];
                }
                delete testObj_58._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_COUNTRY_59(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_60 = scope; _i < scope_60.length; _i++) {
                var testObj_59 = scope_60[_i];
                testObj_59._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_59, "$.message.order.billing.address.country");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_59._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_COUNTRY_59**: $.message.order.billing.address.country must be present in the payload",
                        },
                    ];
                }
                delete testObj_59._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_AREA_CODE_60(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_61 = scope; _i < scope_61.length; _i++) {
                var testObj_60 = scope_61[_i];
                testObj_60._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_60, "$.message.order.billing.address.area_code");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_60._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_AREA_CODE_60**: $.message.order.billing.address.area_code must be present in the payload",
                        },
                    ];
                }
                delete testObj_60._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_TAX_NUMBER(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_62 = scope; _i < scope_62.length; _i++) {
                var testObj_61 = scope_62[_i];
                testObj_61._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_61, "$.message.order.billing.tax_number");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_61._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TAX_NUMBER**: $.message.order.billing.tax_number must be present in the payload",
                        },
                    ];
                }
                delete testObj_61._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_PHONE_62(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_63 = scope; _i < scope_63.length; _i++) {
                var testObj_62 = scope_63[_i];
                testObj_62._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_62, "$.message.order.billing.phone");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_62._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_PHONE_62**: $.message.order.billing.phone must be present in the payload",
                        },
                    ];
                }
                delete testObj_62._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_EMAIL_63(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_64 = scope; _i < scope_64.length; _i++) {
                var testObj_63 = scope_64[_i];
                testObj_63._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_63, "$.message.order.billing.email");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_63._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_EMAIL_63**: $.message.order.billing.email must be present in the payload",
                        },
                    ];
                }
                delete testObj_63._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CREATED_AT(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_65 = scope; _i < scope_65.length; _i++) {
                var testObj_64 = scope_65[_i];
                testObj_64._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_64, "$.message.order.billing.created_at");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_64._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload",
                        },
                    ];
                }
                delete testObj_64._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UPDATED_AT(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_66 = scope; _i < scope_66.length; _i++) {
                var testObj_65 = scope_66[_i];
                testObj_65._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_65, "$.message.order.billing.updated_at");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_65._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload",
                        },
                    ];
                }
                delete testObj_65._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_COLLECTED_BY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_67 = scope; _i < scope_67.length; _i++) {
                var testObj_66 = scope_67[_i];
                testObj_66._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_66, "$.message.order.payment.collected_by");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_66._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_COLLECTED_BY**: $.message.order.payment.collected_by must be present in the payload",
                        },
                    ];
                }
                delete testObj_66._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_TYPE_67(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_68 = scope; _i < scope_68.length; _i++) {
                var testObj_67 = scope_68[_i];
                testObj_67._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_67, "$.message.order.payment.type");
                var enumList = [
                    "ON-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_67._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TYPE_67**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_TYPE_67.1**: $.message.order.payment.type must be present in the payload\n  - **condition REQUIRED_MESSAGE_TYPE_67.2**: every element of $.message.order.payment.type must be in [\"ON-ORDER\", \"ON-FULFILLMENT\", \"POST-FULFILLMENT\"]",
                        },
                    ];
                }
                delete testObj_67._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_68(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_69 = scope; _i < scope_69.length; _i++) {
                var testObj_68 = scope_69[_i];
                testObj_68._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_68, "$.message.order['@ondc/org/linked_order'].items[*].descriptor.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_68._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_68**: $.message.order['@ondc/org/linked_order'].items[*].descriptor.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_68._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_COUNT(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_70 = scope; _i < scope_70.length; _i++) {
                var testObj_69 = scope_70[_i];
                testObj_69._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_69, "$.message.order['@ondc/org/linked_order'].items[*].quantity.count");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_69._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_COUNT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.count must be present in the payload",
                        },
                    ];
                }
                delete testObj_69._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UNIT(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_71 = scope; _i < scope_71.length; _i++) {
                var testObj_70 = scope_71[_i];
                testObj_70._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_70, "$.message.order['@ondc/org/linked_order'].items[*].quantity.measure.unit");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_70._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UNIT**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.unit must be present in the payload",
                        },
                    ];
                }
                delete testObj_70._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE_71(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_72 = scope; _i < scope_72.length; _i++) {
                var testObj_71 = scope_72[_i];
                testObj_71._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_71, "$.message.order['@ondc/org/linked_order'].items[*].quantity.measure.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_71._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE_71**: $.message.order['@ondc/org/linked_order'].items[*].quantity.measure.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_71._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CURRENCY_72(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_73 = scope; _i < scope_73.length; _i++) {
                var testObj_72 = scope_73[_i];
                testObj_72._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_72, "$.message.order['@ondc/org/linked_order'].items[*].price.currency");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_72._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CURRENCY_72**: $.message.order['@ondc/org/linked_order'].items[*].price.currency must be present in the payload",
                        },
                    ];
                }
                delete testObj_72._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE_73(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_74 = scope; _i < scope_74.length; _i++) {
                var testObj_73 = scope_74[_i];
                testObj_73._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_73, "$.message.order['@ondc/org/linked_order'].items[*].price.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_73._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE_73**: $.message.order['@ondc/org/linked_order'].items[*].price.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_73._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_74(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_75 = scope; _i < scope_75.length; _i++) {
                var testObj_74 = scope_75[_i];
                testObj_74._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_74, "$.message.order['@ondc/org/linked_order'].provider.descriptor.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_74._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_74**: $.message.order['@ondc/org/linked_order'].provider.descriptor.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_74._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_75(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_76 = scope; _i < scope_76.length; _i++) {
                var testObj_75 = scope_76[_i];
                testObj_75._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_75, "$.message.order['@ondc/org/linked_order'].provider.address.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_75._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_75**: $.message.order['@ondc/org/linked_order'].provider.address.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_75._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_BUILDING_76(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_77 = scope; _i < scope_77.length; _i++) {
                var testObj_76 = scope_77[_i];
                testObj_76._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_76, "$.message.order['@ondc/org/linked_order'].provider.address.building");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_76._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_BUILDING_76**: $.message.order['@ondc/org/linked_order'].provider.address.building must be present in the payload",
                        },
                    ];
                }
                delete testObj_76._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LOCALITY_77(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_78 = scope; _i < scope_78.length; _i++) {
                var testObj_77 = scope_78[_i];
                testObj_77._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_77, "$.message.order['@ondc/org/linked_order'].provider.address.locality");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_77._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LOCALITY_77**: $.message.order['@ondc/org/linked_order'].provider.address.locality must be present in the payload",
                        },
                    ];
                }
                delete testObj_77._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CITY_78(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_79 = scope; _i < scope_79.length; _i++) {
                var testObj_78 = scope_79[_i];
                testObj_78._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_78, "$.message.order['@ondc/org/linked_order'].provider.address.city");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_78._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CITY_78**: $.message.order['@ondc/org/linked_order'].provider.address.city must be present in the payload",
                        },
                    ];
                }
                delete testObj_78._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_STATE_79(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_80 = scope; _i < scope_80.length; _i++) {
                var testObj_79 = scope_80[_i];
                testObj_79._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_79, "$.message.order['@ondc/org/linked_order'].provider.address.state");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_79._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_STATE_79**: $.message.order['@ondc/org/linked_order'].provider.address.state must be present in the payload",
                        },
                    ];
                }
                delete testObj_79._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_AREA_CODE_80(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_81 = scope; _i < scope_81.length; _i++) {
                var testObj_80 = scope_81[_i];
                testObj_80._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_80, "$.message.order['@ondc/org/linked_order'].provider.address.area_code");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_80._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_AREA_CODE_80**: $.message.order['@ondc/org/linked_order'].provider.address.area_code must be present in the payload",
                        },
                    ];
                }
                delete testObj_80._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID_81(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_82 = scope; _i < scope_82.length; _i++) {
                var testObj_81 = scope_82[_i];
                testObj_81._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_81, "$.message.order['@ondc/org/linked_order'].order.id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_81._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID_81**: $.message.order['@ondc/org/linked_order'].order.id must be present in the payload",
                        },
                    ];
                }
                delete testObj_81._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UNIT_82(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_83 = scope; _i < scope_83.length; _i++) {
                var testObj_82 = scope_83[_i];
                testObj_82._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_82, "$.message.order['@ondc/org/linked_order'].order.weight.unit");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_82._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UNIT_82**: $.message.order['@ondc/org/linked_order'].order.weight.unit must be present in the payload",
                        },
                    ];
                }
                delete testObj_82._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE_83(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_84 = scope; _i < scope_84.length; _i++) {
                var testObj_83 = scope_84[_i];
                testObj_83._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_83, "$.message.order['@ondc/org/linked_order'].order.weight.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_83._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE_83**: $.message.order['@ondc/org/linked_order'].order.weight.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_83._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UNIT_84(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_85 = scope; _i < scope_85.length; _i++) {
                var testObj_84 = scope_85[_i];
                testObj_84._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_84, "$.message.order['@ondc/org/linked_order'].order.dimensions.length.unit");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_84._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UNIT_84**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.unit must be present in the payload",
                        },
                    ];
                }
                delete testObj_84._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE_85(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_86 = scope; _i < scope_86.length; _i++) {
                var testObj_85 = scope_86[_i];
                testObj_85._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_85, "$.message.order['@ondc/org/linked_order'].order.dimensions.length.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_85._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE_85**: $.message.order['@ondc/org/linked_order'].order.dimensions.length.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_85._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UNIT_86(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_87 = scope; _i < scope_87.length; _i++) {
                var testObj_86 = scope_87[_i];
                testObj_86._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_86, "$.message.order['@ondc/org/linked_order'].order.dimensions.breadth.unit");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_86._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UNIT_86**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.unit must be present in the payload",
                        },
                    ];
                }
                delete testObj_86._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE_87(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_88 = scope; _i < scope_88.length; _i++) {
                var testObj_87 = scope_88[_i];
                testObj_87._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_87, "$.message.order['@ondc/org/linked_order'].order.dimensions.breadth.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_87._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE_87**: $.message.order['@ondc/org/linked_order'].order.dimensions.breadth.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_87._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UNIT_88(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_89 = scope; _i < scope_89.length; _i++) {
                var testObj_88 = scope_89[_i];
                testObj_88._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_88, "$.message.order['@ondc/org/linked_order'].order.dimensions.height.unit");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_88._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UNIT_88**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.unit must be present in the payload",
                        },
                    ];
                }
                delete testObj_88._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE_89(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_90 = scope; _i < scope_90.length; _i++) {
                var testObj_89 = scope_90[_i];
                testObj_89._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_89, "$.message.order['@ondc/org/linked_order'].order.dimensions.height.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_89._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE_89**: $.message.order['@ondc/org/linked_order'].order.dimensions.height.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_89._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CREATED_AT_90(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_91 = scope; _i < scope_91.length; _i++) {
                var testObj_90 = scope_91[_i];
                testObj_90._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_90, "$.message.order.created_at");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_90._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CREATED_AT_90**: $.message.order.created_at must be present in the payload",
                        },
                    ];
                }
                delete testObj_90._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UPDATED_AT_91(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_92 = scope; _i < scope_92.length; _i++) {
                var testObj_91 = scope_92[_i];
                testObj_91._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_91, "$.message.order.updated_at");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_91._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UPDATED_AT_91**: $.message.order.updated_at must be present in the payload",
                        },
                    ];
                }
                delete testObj_91._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_CONTEXT_DOMAIN(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_93 = scope; _i < scope_93.length; _i++) {
                var testObj_92 = scope_93[_i];
                testObj_92._EXTERNAL = input.externalData;
                var enumList = ["ONDC:LOG10", "ONDC:LOG11", "nic2004:60232"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_92, "$.context.domain");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_92._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in [\"ONDC:LOG10\", \"ONDC:LOG11\", \"nic2004:60232\"]\n\n\t> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.context.domain must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_92._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_CATEGORY_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_94 = scope; _i < scope_94.length; _i++) {
                var testObj_93 = scope_94[_i];
                testObj_93._EXTERNAL = input.externalData;
                var enumList = [
                    "Express Delivery",
                    "Standard Delivery",
                    "Immediate Delivery",
                    "Next Day Delivery",
                    "Same Day Delivery",
                    "Instant Delivery",
                ];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_93, "$.message.order.items[*].category_id");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_93._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_CATEGORY_ID**: every element of $.message.order.items[*].category_id must be in [\"Express Delivery\", \"Standard Delivery\", \"Immediate Delivery\", \"Next Day Delivery\", \"Same Day Delivery\", \"Instant Delivery\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_CATEGORY_ID** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.items[*].category_id must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_93._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_95 = scope; _i < scope_95.length; _i++) {
                var testObj_94 = scope_95[_i];
                testObj_94._EXTERNAL = input.externalData;
                var enumList = [
                    "delivery",
                    "rto",
                    "tax",
                    "diff",
                    "tax_diff",
                    "discount",
                    "cod",
                    "surge",
                ];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_94, "$.message.order.quote.breakup[*]['@ondc/org/title_type']");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_94._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in [\"delivery\", \"rto\", \"tax\", \"diff\", \"tax_diff\", \"discount\", \"cod\", \"surge\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_94._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_96 = scope; _i < scope_96.length; _i++) {
                var testObj_95 = scope_96[_i];
                testObj_95._EXTERNAL = input.externalData;
                var enumList = ["Delivery", "Return", "RTO"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_95, "$.message.order.fulfillments[*].type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_95._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in [\"Delivery\", \"Return\", \"RTO\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_95._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_TYPE_5(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_97 = scope; _i < scope_97.length; _i++) {
                var testObj_96 = scope_97[_i];
                testObj_96._EXTERNAL = input.externalData;
                var enumList = ["OTP"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_96, "$.message.order.fulfillments[*].start.authorization.type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_96._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_TYPE_5**: every element of $.message.order.fulfillments[*].start.authorization.type must be in [\"OTP\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_TYPE_5** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].start.authorization.type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_96._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_CODE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_98 = scope; _i < scope_98.length; _i++) {
                var testObj_97 = scope_98[_i];
                testObj_97._EXTERNAL = input.externalData;
                var enumList = ["2", "3", "4", "5"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_97, "$.message.order.fulfillments[*].start.instructions.code");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_97._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.fulfillments[*].start.instructions.code must be in [\"2\", \"3\", \"4\", \"5\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].start.instructions.code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_97._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_TYPE_7(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_99 = scope; _i < scope_99.length; _i++) {
                var testObj_98 = scope_99[_i];
                testObj_98._EXTERNAL = input.externalData;
                var enumList = ["OTP"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_98, "$.message.order.fulfillments[*].end.authorization.type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_98._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_TYPE_7**: every element of $.message.order.fulfillments[*].end.authorization.type must be in [\"OTP\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_TYPE_7** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].end.authorization.type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_98._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_CODE_8(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_100 = scope; _i < scope_100.length; _i++) {
                var testObj_99 = scope_100[_i];
                testObj_99._EXTERNAL = input.externalData;
                var enumList = ["1", "2", "3", "5"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_99, "$.message.order.fulfillments[*].end.instructions.code");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_99._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_CODE_8**: every element of $.message.order.fulfillments[*].end.instructions.code must be in [\"1\", \"2\", \"3\", \"5\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_CODE_8** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].end.instructions.code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_99._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_CODE_9(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_101 = scope; _i < scope_101.length; _i++) {
                var testObj_100 = scope_101[_i];
                testObj_100._EXTERNAL = input.externalData;
                var enumList = [
                    "Pending",
                    "Cancelled",
                    "Order-picked-up",
                    "RTO",
                    "RTO-Initiated",
                    "RTO-Delivered",
                    "RTO-Disposed",
                    "Out-for-pickup",
                    "At-destination-hub",
                    "In-transit",
                    "At-pickup",
                    "Out-for-delivery",
                    "At-delivery",
                    "Searching-for-Agent",
                    "Agent-assigned",
                    "Pickup-failed",
                    "Pickup-rescheduled",
                    "Delivery-failed",
                    "Delivery-rescheduled",
                    "Order-delivered",
                ];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_100, "$.message.order.fulfillments[*].state.descriptor.code");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_100._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_CODE_9**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in [\"Pending\", \"Cancelled\", \"Order-picked-up\", \"RTO\", \"RTO-Initiated\", \"RTO-Delivered\", \"RTO-Disposed\", \"Out-for-pickup\", \"At-destination-hub\", \"In-transit\", \"At-pickup\", \"Out-for-delivery\", \"At-delivery\", \"Searching-for-Agent\", \"Agent-assigned\", \"Pickup-failed\", \"Pickup-rescheduled\", \"Delivery-failed\", \"Delivery-rescheduled\", \"Order-delivered\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_CODE_9** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_100._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_TYPE_10(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_102 = scope; _i < scope_102.length; _i++) {
                var testObj_101 = scope_102[_i];
                testObj_101._EXTERNAL = input.externalData;
                var enumList = [
                    "ON-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_101, "$.message.order.payment.type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_101._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_TYPE_10**: every element of $.message.order.payment.type must be in [\"ON-ORDER\", \"ON-FULFILLMENT\", \"POST-FULFILLMENT\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_TYPE_10** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.payment.type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_101._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_103 = scope; _i < scope_103.length; _i++) {
                var testObj_102 = scope_103[_i];
                testObj_102._EXTERNAL = input.externalData;
                var enumList = ["lbnp", "lsp"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_102, "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_102._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be in [\"lbnp\", \"lsp\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_102._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_104 = scope; _i < scope_104.length; _i++) {
                var testObj_103 = scope_104[_i];
                testObj_103._EXTERNAL = input.externalData;
                var validTags = ["type"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_103, "$.message.order.items[*].tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_103._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0**: every element of $.message.order.items[*].tags[*].code must be in [\"type\"]\n\n\t> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.items[*].tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_103._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0_type(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.items[*].tags[?(@.code=='type')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_105 = scope; _i < scope_105.length; _i++) {
                var testObj_104 = scope_105[_i];
                testObj_104._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_104, "$.list[*].code");
                var validValues = ["type"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_104._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0_type**: every element of $.message.order.items[*].tags[?(@.code=='type')].list[*].code must be in [\"type\"]",
                        },
                    ];
                }
                delete testObj_104._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_106 = scope; _i < scope_106.length; _i++) {
                var testObj_105 = scope_106[_i];
                testObj_105._EXTERNAL = input.externalData;
                var validTags = ["masked_contact"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_105, "$.message.order.fulfillments[*].start.contact.tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_105._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1**: every element of $.message.order.fulfillments[*].start.contact.tags[*].code must be in [\"masked_contact\"]\n\n\t> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].start.contact.tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_105._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1_masked_contact(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_107 = scope; _i < scope_107.length; _i++) {
                var testObj_106 = scope_107[_i];
                testObj_106._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_106, "$.list[*].code");
                var validValues = ["type", "setup", "token"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_106._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1_masked_contact**: every element of $.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')].list[*].code must be in [\"type\", \"setup\", \"token\"]",
                        },
                    ];
                }
                delete testObj_106._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_2(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_108 = scope; _i < scope_108.length; _i++) {
                var testObj_107 = scope_108[_i];
                testObj_107._EXTERNAL = input.externalData;
                var validTags = ["masked_contact"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_107, "$.message.order.fulfillments[*].end.contact.tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_107._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].end.contact.tags[*].code must be in [\"masked_contact\"]\n\n\t> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].end.contact.tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_107._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_2_masked_contact(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_109 = scope; _i < scope_109.length; _i++) {
                var testObj_108 = scope_109[_i];
                testObj_108._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_108, "$.list[*].code");
                var validValues = ["type", "setup", "token"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_108._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_2_masked_contact**: every element of $.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')].list[*].code must be in [\"type\", \"setup\", \"token\"]",
                        },
                    ];
                }
                delete testObj_108._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_110 = scope; _i < scope_110.length; _i++) {
                var testObj_109 = scope_110[_i];
                testObj_109._EXTERNAL = input.externalData;
                var validTags = [
                    "linked_provider",
                    "linked_order",
                    "linked_order_item",
                    "cod_settlement_detail",
                    "fulfill_request",
                    "fulfill_response",
                    "state",
                    "rto_action",
                    "provider",
                    "order",
                    "rto_verification",
                    "items",
                    "reverseqc_input",
                ];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_109, "$.message.order.fulfillments[*].tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_109._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3**: every element of $.message.order.fulfillments[*].tags[*].code must be in [\"linked_provider\", \"linked_order\", \"linked_order_item\", \"cod_settlement_detail\", \"fulfill_request\", \"fulfill_response\", \"state\", \"rto_action\", \"provider\", \"order\", \"rto_verification\", \"items\", \"reverseqc_input\"]\n\n\t> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_109._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_linked_provider(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='linked_provider')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_111 = scope; _i < scope_111.length; _i++) {
                var testObj_110 = scope_111[_i];
                testObj_110._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_110, "$.list[*].code");
                var validValues = [
                    "id",
                    "name",
                    "address",
                    "cred_code",
                    "cred_desc",
                    "tax_id",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_110._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_linked_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in [\"id\", \"name\", \"address\", \"cred_code\", \"cred_desc\", \"tax_id\"]",
                        },
                    ];
                }
                delete testObj_110._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_linked_order(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='linked_order')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_112 = scope; _i < scope_112.length; _i++) {
                var testObj_111 = scope_112[_i];
                testObj_111._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_111, "$.list[*].code");
                var validValues = [
                    "id",
                    "prep_time",
                    "cod_order",
                    "currency",
                    "declared_value",
                    "collection_amount",
                    "weight_unit",
                    "weight_value",
                    "dim_unit",
                    "length",
                    "breadth",
                    "height",
                    "shipment_type",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_111._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_linked_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order')].list[*].code must be in [\"id\", \"prep_time\", \"cod_order\", \"currency\", \"declared_value\", \"collection_amount\", \"weight_unit\", \"weight_value\", \"dim_unit\", \"length\", \"breadth\", \"height\", \"shipment_type\"]",
                        },
                    ];
                }
                delete testObj_111._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_linked_order_item(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='linked_order_item')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_113 = scope; _i < scope_113.length; _i++) {
                var testObj_112 = scope_113[_i];
                testObj_112._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_112, "$.list[*].code");
                var validValues = [
                    "category",
                    "name",
                    "currency",
                    "value",
                    "quantity",
                    "weight_unit",
                    "weight_value",
                    "return_to_origin",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_112._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_linked_order_item**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order_item')].list[*].code must be in [\"category\", \"name\", \"currency\", \"value\", \"quantity\", \"weight_unit\", \"weight_value\", \"return_to_origin\"]",
                        },
                    ];
                }
                delete testObj_112._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_cod_settlement_detail(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='cod_settlement_detail')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_114 = scope; _i < scope_114.length; _i++) {
                var testObj_113 = scope_114[_i];
                testObj_113._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_113, "$.list[*].code");
                var validValues = [
                    "settlement_window",
                    "settlement_type",
                    "beneficiary_name",
                    "upi_address",
                    "bank_account_no",
                    "ifsc_code",
                    "bank_name",
                    "branch_name",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_113._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_cod_settlement_detail**: every element of $.message.order.fulfillments[*].tags[?(@.code=='cod_settlement_detail')].list[*].code must be in [\"settlement_window\", \"settlement_type\", \"beneficiary_name\", \"upi_address\", \"bank_account_no\", \"ifsc_code\", \"bank_name\", \"branch_name\"]",
                        },
                    ];
                }
                delete testObj_113._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_fulfill_request(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='fulfill_request')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_115 = scope; _i < scope_115.length; _i++) {
                var testObj_114 = scope_115[_i];
                testObj_114._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_114, "$.list[*].code");
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
                    delete testObj_114._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_fulfill_request**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_request')].list[*].code must be in [\"rider_count\", \"order_count\", \"rate_basis\", \"motorable_distance\", \"pickup_slot_start\", \"pickup_slot_end\", \"delivery_slot_start\", \"delivery_slot_end\"]",
                        },
                    ];
                }
                delete testObj_114._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_fulfill_response(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='fulfill_response')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_116 = scope; _i < scope_116.length; _i++) {
                var testObj_115 = scope_116[_i];
                testObj_115._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_115, "$.list[*].code");
                var validValues = [
                    "rider_count",
                    "order_count",
                    "rate_basis",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_115._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_fulfill_response**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_response')].list[*].code must be in [\"rider_count\", \"order_count\", \"rate_basis\"]",
                        },
                    ];
                }
                delete testObj_115._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_state(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='state')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_117 = scope; _i < scope_117.length; _i++) {
                var testObj_116 = scope_117[_i];
                testObj_116._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_116, "$.list[*].code");
                var validValues = ["ready_to_ship"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_116._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_state**: every element of $.message.order.fulfillments[*].tags[?(@.code=='state')].list[*].code must be in [\"ready_to_ship\"]",
                        },
                    ];
                }
                delete testObj_116._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_rto_action(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='rto_action')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_118 = scope; _i < scope_118.length; _i++) {
                var testObj_117 = scope_118[_i];
                testObj_117._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_117, "$.list[*].code");
                var validValues = ["return_to_origin"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_117._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_rto_action**: every element of $.message.order.fulfillments[*].tags[?(@.code=='rto_action')].list[*].code must be in [\"return_to_origin\"]",
                        },
                    ];
                }
                delete testObj_117._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_provider(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='provider')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_119 = scope; _i < scope_119.length; _i++) {
                var testObj_118 = scope_119[_i];
                testObj_118._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_118, "$.list[*].code");
                var validValues = ["name", "address", "tax_id"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_118._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='provider')].list[*].code must be in [\"name\", \"address\", \"tax_id\"]",
                        },
                    ];
                }
                delete testObj_118._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_order(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='order')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_120 = scope; _i < scope_120.length; _i++) {
                var testObj_119 = scope_120[_i];
                testObj_119._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_119, "$.list[*].code");
                var validValues = [
                    "id",
                    "weight_unit",
                    "weight_value",
                    "dim_unit",
                    "length",
                    "breadth",
                    "height",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_119._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='order')].list[*].code must be in [\"id\", \"weight_unit\", \"weight_value\", \"dim_unit\", \"length\", \"breadth\", \"height\"]",
                        },
                    ];
                }
                delete testObj_119._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_rto_verification(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='rto_verification')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_121 = scope; _i < scope_121.length; _i++) {
                var testObj_120 = scope_121[_i];
                testObj_120._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_120, "$.list[*].code");
                var validValues = ["code", "short_desc"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_120._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_rto_verification**: every element of $.message.order.fulfillments[*].tags[?(@.code=='rto_verification')].list[*].code must be in [\"code\", \"short_desc\"]",
                        },
                    ];
                }
                delete testObj_120._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_items(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='items')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_122 = scope; _i < scope_122.length; _i++) {
                var testObj_121 = scope_122[_i];
                testObj_121._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_121, "$.list[*].code");
                var validValues = [
                    "category",
                    "name",
                    "currency",
                    "value",
                    "quantity",
                    "weight_unit",
                    "weight_value",
                    "hsn_code",
                    "ebn_exempt",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_121._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_items**: every element of $.message.order.fulfillments[*].tags[?(@.code=='items')].list[*].code must be in [\"category\", \"name\", \"currency\", \"value\", \"quantity\", \"weight_unit\", \"weight_value\", \"hsn_code\", \"ebn_exempt\"]",
                        },
                    ];
                }
                delete testObj_121._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_reverseqc_input(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='reverseqc_input')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_123 = scope; _i < scope_123.length; _i++) {
                var testObj_122 = scope_123[_i];
                testObj_122._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_122, "$.list[*].code");
                var validValues = ["P001", "P003", "Q001"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_122._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_reverseqc_input**: every element of $.message.order.fulfillments[*].tags[?(@.code=='reverseqc_input')].list[*].code must be in [\"P001\", \"P003\", \"Q001\"]",
                        },
                    ];
                }
                delete testObj_122._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_4(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_124 = scope; _i < scope_124.length; _i++) {
                var testObj_123 = scope_124[_i];
                testObj_123._EXTERNAL = input.externalData;
                var validTags = ["bap_terms", "lbnp_sla_terms"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_123, "$.message.order.tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_123._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_4**: every element of $.message.order.tags[*].code must be in [\"bap_terms\", \"lbnp_sla_terms\"]\n\n\t> Note: **Condition validate_tag_4** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_123._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_4_bap_terms(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.tags[?(@.code=='bap_terms')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_125 = scope; _i < scope_125.length; _i++) {
                var testObj_124 = scope_125[_i];
                testObj_124._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_124, "$.list[*].code");
                var validValues = ["accept_bpp_terms"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_124._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_4_bap_terms**: every element of $.message.order.tags[?(@.code=='bap_terms')].list[*].code must be in [\"accept_bpp_terms\"]",
                        },
                    ];
                }
                delete testObj_124._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_4_lbnp_sla_terms(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.tags[?(@.code=='lbnp_sla_terms')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_126 = scope; _i < scope_126.length; _i++) {
                var testObj_125 = scope_126[_i];
                testObj_125._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_125, "$.list[*].code");
                var validValues = [
                    "metric",
                    "base_unit",
                    "base_min",
                    "base_max",
                    "penalty_min",
                    "penalty_max",
                    "penalty_unit",
                    "penalty_value",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_125._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_4_lbnp_sla_terms**: every element of $.message.order.tags[?(@.code=='lbnp_sla_terms')].list[*].code must be in [\"metric\", \"base_unit\", \"base_min\", \"base_max\", \"penalty_min\", \"penalty_max\", \"penalty_unit\", \"penalty_value\"]",
                        },
                    ];
                }
                delete testObj_125._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function confirm_fulfillment_id_validations(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_127 = scope; _i < scope_127.length; _i++) {
                var testObj_126 = scope_127[_i];
                testObj_126._EXTERNAL = input.externalData;
                function validate_fulfillment_id_in_items(input) {
                    var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
                    var subResults = [];
                    var valid = true;
                    for (var _i = 0, scope_128 = scope; _i < scope_128.length; _i++) {
                        var testObj_127 = scope_128[_i];
                        testObj_127._EXTERNAL = input.externalData;
                        var fulfillment_id = json_path_utils_1.default.getJsonPath(testObj_127, "$.message.order.items[*].fulfillment_id");
                        var fulfillment_ids = json_path_utils_1.default.getJsonPath(testObj_127, "$.message.order.items[*].fulfillment_ids[*]");
                        var validate = validation_utils_1.default.arePresent(fulfillment_id) ||
                            validation_utils_1.default.arePresent(fulfillment_ids);
                        if (!validate) {
                            delete testObj_127._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: "fulfillment_id or fulfillment_ids should be present in items",
                                },
                            ];
                        }
                        delete testObj_127._EXTERNAL;
                    }
                    return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
                }
                function validate_fulfillment_id_in_fulfillments(input) {
                    var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
                    var subResults = [];
                    var valid = true;
                    for (var _i = 0, scope_129 = scope; _i < scope_129.length; _i++) {
                        var testObj_128 = scope_129[_i];
                        testObj_128._EXTERNAL = input.externalData;
                        var fulfillment_id = json_path_utils_1.default.getJsonPath(testObj_128, "$.message.order.fulfillments[*].id");
                        var item_fulfillment_id = json_path_utils_1.default.getJsonPath(testObj_128, "$.message.order.items[*].fulfillment_id");
                        var item_fulfillment_ids = json_path_utils_1.default.getJsonPath(testObj_128, "$.message.order.items[*].fulfillment_ids[*]");
                        var validate = validation_utils_1.default.allIn(item_fulfillment_id, fulfillment_id) ||
                            validation_utils_1.default.allIn(item_fulfillment_ids, fulfillment_id);
                        if (!validate) {
                            delete testObj_128._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: "Fulfillment id in items should be mapped correctly in fulfillments array",
                                },
                            ];
                        }
                        delete testObj_128._EXTERNAL;
                    }
                    return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
                }
                var testFunctions_3 = [
                    validate_fulfillment_id_in_items,
                    validate_fulfillment_id_in_fulfillments,
                ];
                var invalidResults_1 = [];
                for (var _a = 0, testFunctions_2 = testFunctions_3; _a < testFunctions_2.length; _a++) {
                    var fn = testFunctions_2[_a];
                    var subResult = fn(input);
                    // .filter(r => !r.valid);
                    invalidResults_1 = __spreadArray(__spreadArray([], invalidResults_1, true), subResult, true);
                    if (!input.config.runAllValidations &&
                        invalidResults_1.length > 0) {
                        return invalidResults_1;
                    }
                }
                if (invalidResults_1.length > 0) {
                    // return invalidResults;
                    subResults = invalidResults_1;
                    valid = subResults.every(function (r) { return r.valid; });
                }
                delete testObj_126._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function instructions_validations(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_130 = scope; _i < scope_130.length; _i++) {
                var testObj_129 = scope_130[_i];
                testObj_129._EXTERNAL = input.externalData;
                function start_instructions_short_desc_present(input) {
                    var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
                    var subResults = [];
                    var valid = true;
                    for (var _i = 0, scope_131 = scope; _i < scope_131.length; _i++) {
                        var testObj_130 = scope_131[_i];
                        testObj_130._EXTERNAL = input.externalData;
                        var ship_status = ["yes"];
                        var instructions_code = json_path_utils_1.default.getJsonPath(testObj_130, "$.message.order.fulfillments[*].start.instructions.code");
                        var instructions_short_desc = json_path_utils_1.default.getJsonPath(testObj_130, "$.message.order.fulfillments[*].start.instructions.short_desc");
                        var shipStatus = json_path_utils_1.default.getJsonPath(testObj_130, "$.message.order.fulfillments[*].tags[?(@.code=='state')].list[?(@.code=='ready_to_ship')].value");
                        var skipCheck = !validation_utils_1.default.allIn(shipStatus, ship_status);
                        if (skipCheck)
                            continue;
                        var validate = validation_utils_1.default.arePresent(instructions_code) &&
                            validation_utils_1.default.arePresent(instructions_short_desc);
                        if (!validate) {
                            delete testObj_130._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: "In start instructions, short description is required when ready_to_ship = yes\n\n\t> Note: **Condition start_instructions_short_desc_present** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: every element of $.message.order.fulfillments[*].tags[?(@.code=='state')].list[?(@.code=='ready_to_ship')].value must **not** be in [\"yes\"]",
                                },
                            ];
                        }
                        delete testObj_130._EXTERNAL;
                    }
                    return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
                }
                var testFunctions_5 = [
                    start_instructions_short_desc_present,
                ];
                var invalidResults_2 = [];
                for (var _a = 0, testFunctions_4 = testFunctions_5; _a < testFunctions_4.length; _a++) {
                    var fn = testFunctions_4[_a];
                    var subResult = fn(input);
                    // .filter(r => !r.valid);
                    invalidResults_2 = __spreadArray(__spreadArray([], invalidResults_2, true), subResult, true);
                    if (!input.config.runAllValidations &&
                        invalidResults_2.length > 0) {
                        return invalidResults_2;
                    }
                }
                if (invalidResults_2.length > 0) {
                    // return invalidResults;
                    subResults = invalidResults_2;
                    valid = subResults.every(function (r) { return r.valid; });
                }
                delete testObj_129._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function accept_bpp_terms(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_132 = scope; _i < scope_132.length; _i++) {
                var testObj_131 = scope_132[_i];
                testObj_131._EXTERNAL = input.externalData;
                var tags = json_path_utils_1.default.getJsonPath(testObj_131, "$.message.order.tags[?(@.code=='bap_terms')].list[?(@.code=='accept_bpp_terms')].value");
                var acceptance = ["yes"];
                var validate = validation_utils_1.default.allIn(tags, acceptance);
                if (!validate) {
                    delete testObj_131._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "Acceptance to the LSP terms should be provided by LBNP in order/tags",
                        },
                    ];
                }
                delete testObj_131._EXTERNAL;
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
            REQUIRED_CONTEXT_TTL,
            REQUIRED_MESSAGE_ID,
            REQUIRED_MESSAGE_STATE,
            REQUIRED_MESSAGE_ID_16,
            REQUIRED_MESSAGE_CATEGORY_ID,
            REQUIRED_MESSAGE_LABEL,
            REQUIRED_MESSAGE_DURATION,
            REQUIRED_MESSAGE_TIMESTAMP,
            REQUIRED_MESSAGE_CURRENCY,
            REQUIRED_MESSAGE_VALUE,
            REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID,
            REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE,
            REQUIRED_MESSAGE_CURRENCY_25,
            REQUIRED_MESSAGE_VALUE_26,
            REQUIRED_MESSAGE_ID_27,
            REQUIRED_MESSAGE_TYPE,
            REQUIRED_MESSAGE_DURATION_29,
            REQUIRED_MESSAGE_NAME,
            REQUIRED_MESSAGE_ID_31,
            REQUIRED_MESSAGE_GPS,
            REQUIRED_MESSAGE_NAME_33,
            REQUIRED_MESSAGE_BUILDING,
            REQUIRED_MESSAGE_LOCALITY,
            REQUIRED_MESSAGE_CITY,
            REQUIRED_MESSAGE_STATE_37,
            REQUIRED_MESSAGE_COUNTRY,
            REQUIRED_MESSAGE_AREA_CODE,
            REQUIRED_MESSAGE_PHONE,
            REQUIRED_MESSAGE_EMAIL,
            REQUIRED_MESSAGE_NAME_42,
            REQUIRED_MESSAGE_GPS_43,
            REQUIRED_MESSAGE_NAME_44,
            REQUIRED_MESSAGE_BUILDING_45,
            REQUIRED_MESSAGE_LOCALITY_46,
            REQUIRED_MESSAGE_CITY_47,
            REQUIRED_MESSAGE_STATE_48,
            REQUIRED_MESSAGE_COUNTRY_49,
            REQUIRED_MESSAGE_AREA_CODE_50,
            REQUIRED_MESSAGE_PHONE_51,
            REQUIRED_MESSAGE_EMAIL_52,
            REQUIRED_MESSAGE_NAME_53,
            REQUIRED_MESSAGE_NAME_54,
            REQUIRED_MESSAGE_BUILDING_55,
            REQUIRED_MESSAGE_LOCALITY_56,
            REQUIRED_MESSAGE_CITY_57,
            REQUIRED_MESSAGE_STATE_58,
            REQUIRED_MESSAGE_COUNTRY_59,
            REQUIRED_MESSAGE_AREA_CODE_60,
            REQUIRED_MESSAGE_TAX_NUMBER,
            REQUIRED_MESSAGE_PHONE_62,
            REQUIRED_MESSAGE_EMAIL_63,
            REQUIRED_MESSAGE_CREATED_AT,
            REQUIRED_MESSAGE_UPDATED_AT,
            REQUIRED_MESSAGE_COLLECTED_BY,
            REQUIRED_MESSAGE_TYPE_67,
            REQUIRED_MESSAGE_NAME_68,
            REQUIRED_MESSAGE_COUNT,
            REQUIRED_MESSAGE_UNIT,
            REQUIRED_MESSAGE_VALUE_71,
            REQUIRED_MESSAGE_CURRENCY_72,
            REQUIRED_MESSAGE_VALUE_73,
            REQUIRED_MESSAGE_NAME_74,
            REQUIRED_MESSAGE_NAME_75,
            REQUIRED_MESSAGE_BUILDING_76,
            REQUIRED_MESSAGE_LOCALITY_77,
            REQUIRED_MESSAGE_CITY_78,
            REQUIRED_MESSAGE_STATE_79,
            REQUIRED_MESSAGE_AREA_CODE_80,
            REQUIRED_MESSAGE_ID_81,
            REQUIRED_MESSAGE_UNIT_82,
            REQUIRED_MESSAGE_VALUE_83,
            REQUIRED_MESSAGE_UNIT_84,
            REQUIRED_MESSAGE_VALUE_85,
            REQUIRED_MESSAGE_UNIT_86,
            REQUIRED_MESSAGE_VALUE_87,
            REQUIRED_MESSAGE_UNIT_88,
            REQUIRED_MESSAGE_VALUE_89,
            REQUIRED_MESSAGE_CREATED_AT_90,
            REQUIRED_MESSAGE_UPDATED_AT_91,
            VALID_ENUM_CONTEXT_DOMAIN,
            VALID_ENUM_MESSAGE_CATEGORY_ID,
            VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE,
            VALID_ENUM_MESSAGE_TYPE,
            VALID_ENUM_MESSAGE_TYPE_5,
            VALID_ENUM_MESSAGE_CODE,
            VALID_ENUM_MESSAGE_TYPE_7,
            VALID_ENUM_MESSAGE_CODE_8,
            VALID_ENUM_MESSAGE_CODE_9,
            VALID_ENUM_MESSAGE_TYPE_10,
            VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY,
            validate_tag_0,
            validate_tag_0_type,
            validate_tag_1,
            validate_tag_1_masked_contact,
            validate_tag_2,
            validate_tag_2_masked_contact,
            validate_tag_3,
            validate_tag_3_linked_provider,
            validate_tag_3_linked_order,
            validate_tag_3_linked_order_item,
            validate_tag_3_cod_settlement_detail,
            validate_tag_3_fulfill_request,
            validate_tag_3_fulfill_response,
            validate_tag_3_state,
            validate_tag_3_rto_action,
            validate_tag_3_provider,
            validate_tag_3_order,
            validate_tag_3_rto_verification,
            validate_tag_3_items,
            validate_tag_3_reverseqc_input,
            validate_tag_4,
            validate_tag_4_bap_terms,
            validate_tag_4_lbnp_sla_terms,
            confirm_fulfillment_id_validations,
            instructions_validations,
            accept_bpp_terms,
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
