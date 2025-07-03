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
exports.default = init;
var json_path_utils_1 = require("../utils/json-path-utils");
var validation_utils_1 = require("../utils/validation-utils");
function init(input) {
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
                var attr = json_path_utils_1.default.getJsonPath(testObj_14, "$.message.order.provider.id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_14._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID**: $.message.order.provider.id must be present in the payload",
                        },
                    ];
                }
                delete testObj_14._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID_15(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_16 = scope; _i < scope_16.length; _i++) {
                var testObj_15 = scope_16[_i];
                testObj_15._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_15, "$.message.order.items[*].id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_15._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.items[*].id must be present in the payload",
                        },
                    ];
                }
                delete testObj_15._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CATEGORY_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_17 = scope; _i < scope_17.length; _i++) {
                var testObj_16 = scope_17[_i];
                testObj_16._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_16, "$.message.order.items[*].category_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_16._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CATEGORY_ID**: $.message.order.items[*].category_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_16._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID_17(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_18 = scope; _i < scope_18.length; _i++) {
                var testObj_17 = scope_18[_i];
                testObj_17._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_17, "$.message.order.fulfillments[*].id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_17._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.fulfillments[*].id must be present in the payload",
                        },
                    ];
                }
                delete testObj_17._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_19 = scope; _i < scope_19.length; _i++) {
                var testObj_18 = scope_19[_i];
                testObj_18._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_18, "$.message.order.fulfillments[*].type");
                var enumList = ["Delivery", "Return", "RTO"];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_18._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload\n  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in [\"Delivery\", \"Return\", \"RTO\"]",
                        },
                    ];
                }
                delete testObj_18._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_GPS(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_20 = scope; _i < scope_20.length; _i++) {
                var testObj_19 = scope_20[_i];
                testObj_19._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_19, "$.message.order.fulfillments[*].start.location.gps");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_19._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload",
                        },
                    ];
                }
                delete testObj_19._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_21 = scope; _i < scope_21.length; _i++) {
                var testObj_20 = scope_21[_i];
                testObj_20._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_20, "$.message.order.fulfillments[*].start.location.address.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_20._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME**: $.message.order.fulfillments[*].start.location.address.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_20._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_BUILDING(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_22 = scope; _i < scope_22.length; _i++) {
                var testObj_21 = scope_22[_i];
                testObj_21._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_21, "$.message.order.fulfillments[*].start.location.address.building");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_21._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.fulfillments[*].start.location.address.building must be present in the payload",
                        },
                    ];
                }
                delete testObj_21._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LOCALITY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_23 = scope; _i < scope_23.length; _i++) {
                var testObj_22 = scope_23[_i];
                testObj_22._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_22, "$.message.order.fulfillments[*].start.location.address.locality");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_22._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.fulfillments[*].start.location.address.locality must be present in the payload",
                        },
                    ];
                }
                delete testObj_22._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CITY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_24 = scope; _i < scope_24.length; _i++) {
                var testObj_23 = scope_24[_i];
                testObj_23._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_23, "$.message.order.fulfillments[*].start.location.address.city");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_23._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CITY**: $.message.order.fulfillments[*].start.location.address.city must be present in the payload",
                        },
                    ];
                }
                delete testObj_23._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_STATE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_25 = scope; _i < scope_25.length; _i++) {
                var testObj_24 = scope_25[_i];
                testObj_24._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_24, "$.message.order.fulfillments[*].start.location.address.state");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_24._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_STATE**: $.message.order.fulfillments[*].start.location.address.state must be present in the payload",
                        },
                    ];
                }
                delete testObj_24._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_COUNTRY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_26 = scope; _i < scope_26.length; _i++) {
                var testObj_25 = scope_26[_i];
                testObj_25._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_25, "$.message.order.fulfillments[*].start.location.address.country");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_25._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.fulfillments[*].start.location.address.country must be present in the payload",
                        },
                    ];
                }
                delete testObj_25._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_AREA_CODE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_27 = scope; _i < scope_27.length; _i++) {
                var testObj_26 = scope_27[_i];
                testObj_26._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_26, "$.message.order.fulfillments[*].start.location.address.area_code");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_26._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload",
                        },
                    ];
                }
                delete testObj_26._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_PHONE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_28 = scope; _i < scope_28.length; _i++) {
                var testObj_27 = scope_28[_i];
                testObj_27._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_27, "$.message.order.fulfillments[*].start.contact.phone");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_27._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.fulfillments[*].start.contact.phone must be present in the payload",
                        },
                    ];
                }
                delete testObj_27._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_EMAIL(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_29 = scope; _i < scope_29.length; _i++) {
                var testObj_28 = scope_29[_i];
                testObj_28._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_28, "$.message.order.fulfillments[*].start.contact.email");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_28._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.fulfillments[*].start.contact.email must be present in the payload",
                        },
                    ];
                }
                delete testObj_28._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_GPS_29(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_30 = scope; _i < scope_30.length; _i++) {
                var testObj_29 = scope_30[_i];
                testObj_29._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_29, "$.message.order.fulfillments[*].end.location.gps");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_29._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_GPS_29**: $.message.order.fulfillments[*].end.location.gps must be present in the payload",
                        },
                    ];
                }
                delete testObj_29._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_30(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_31 = scope; _i < scope_31.length; _i++) {
                var testObj_30 = scope_31[_i];
                testObj_30._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_30, "$.message.order.fulfillments[*].end.location.address.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_30._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_30**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_30._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_BUILDING_31(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_32 = scope; _i < scope_32.length; _i++) {
                var testObj_31 = scope_32[_i];
                testObj_31._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_31, "$.message.order.fulfillments[*].end.location.address.building");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_31._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_BUILDING_31**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload",
                        },
                    ];
                }
                delete testObj_31._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LOCALITY_32(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_33 = scope; _i < scope_33.length; _i++) {
                var testObj_32 = scope_33[_i];
                testObj_32._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_32, "$.message.order.fulfillments[*].end.location.address.locality");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_32._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LOCALITY_32**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload",
                        },
                    ];
                }
                delete testObj_32._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CITY_33(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_34 = scope; _i < scope_34.length; _i++) {
                var testObj_33 = scope_34[_i];
                testObj_33._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_33, "$.message.order.fulfillments[*].end.location.address.city");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_33._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CITY_33**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload",
                        },
                    ];
                }
                delete testObj_33._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_STATE_34(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_35 = scope; _i < scope_35.length; _i++) {
                var testObj_34 = scope_35[_i];
                testObj_34._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_34, "$.message.order.fulfillments[*].end.location.address.state");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_34._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_STATE_34**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload",
                        },
                    ];
                }
                delete testObj_34._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_COUNTRY_35(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_36 = scope; _i < scope_36.length; _i++) {
                var testObj_35 = scope_36[_i];
                testObj_35._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_35, "$.message.order.fulfillments[*].end.location.address.country");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_35._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_COUNTRY_35**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload",
                        },
                    ];
                }
                delete testObj_35._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_AREA_CODE_36(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_37 = scope; _i < scope_37.length; _i++) {
                var testObj_36 = scope_37[_i];
                testObj_36._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_36, "$.message.order.fulfillments[*].end.location.address.area_code");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_36._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_AREA_CODE_36**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload",
                        },
                    ];
                }
                delete testObj_36._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_PHONE_37(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_38 = scope; _i < scope_38.length; _i++) {
                var testObj_37 = scope_38[_i];
                testObj_37._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_37, "$.message.order.fulfillments[*].end.contact.phone");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_37._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_PHONE_37**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload",
                        },
                    ];
                }
                delete testObj_37._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_38(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_39 = scope; _i < scope_39.length; _i++) {
                var testObj_38 = scope_39[_i];
                testObj_38._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_38, "$.message.order.billing.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_38._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_38**: $.message.order.billing.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_38._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_39(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_40 = scope; _i < scope_40.length; _i++) {
                var testObj_39 = scope_40[_i];
                testObj_39._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_39, "$.message.order.billing.address.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_39._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_39**: $.message.order.billing.address.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_39._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_BUILDING_40(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_41 = scope; _i < scope_41.length; _i++) {
                var testObj_40 = scope_41[_i];
                testObj_40._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_40, "$.message.order.billing.address.building");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_40._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_BUILDING_40**: $.message.order.billing.address.building must be present in the payload",
                        },
                    ];
                }
                delete testObj_40._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LOCALITY_41(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_42 = scope; _i < scope_42.length; _i++) {
                var testObj_41 = scope_42[_i];
                testObj_41._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_41, "$.message.order.billing.address.locality");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_41._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LOCALITY_41**: $.message.order.billing.address.locality must be present in the payload",
                        },
                    ];
                }
                delete testObj_41._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CITY_42(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_43 = scope; _i < scope_43.length; _i++) {
                var testObj_42 = scope_43[_i];
                testObj_42._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_42, "$.message.order.billing.address.city");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_42._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CITY_42**: $.message.order.billing.address.city must be present in the payload",
                        },
                    ];
                }
                delete testObj_42._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_STATE_43(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_44 = scope; _i < scope_44.length; _i++) {
                var testObj_43 = scope_44[_i];
                testObj_43._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_43, "$.message.order.billing.address.state");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_43._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_STATE_43**: $.message.order.billing.address.state must be present in the payload",
                        },
                    ];
                }
                delete testObj_43._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_COUNTRY_44(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_45 = scope; _i < scope_45.length; _i++) {
                var testObj_44 = scope_45[_i];
                testObj_44._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_44, "$.message.order.billing.address.country");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_44._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_COUNTRY_44**: $.message.order.billing.address.country must be present in the payload",
                        },
                    ];
                }
                delete testObj_44._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_AREA_CODE_45(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_46 = scope; _i < scope_46.length; _i++) {
                var testObj_45 = scope_46[_i];
                testObj_45._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_45, "$.message.order.billing.address.area_code");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_45._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_AREA_CODE_45**: $.message.order.billing.address.area_code must be present in the payload",
                        },
                    ];
                }
                delete testObj_45._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_TAX_NUMBER(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_47 = scope; _i < scope_47.length; _i++) {
                var testObj_46 = scope_47[_i];
                testObj_46._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_46, "$.message.order.billing.tax_number");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_46._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TAX_NUMBER**: $.message.order.billing.tax_number must be present in the payload",
                        },
                    ];
                }
                delete testObj_46._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_PHONE_47(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_48 = scope; _i < scope_48.length; _i++) {
                var testObj_47 = scope_48[_i];
                testObj_47._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_47, "$.message.order.billing.phone");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_47._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_PHONE_47**: $.message.order.billing.phone must be present in the payload",
                        },
                    ];
                }
                delete testObj_47._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_EMAIL_48(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_49 = scope; _i < scope_49.length; _i++) {
                var testObj_48 = scope_49[_i];
                testObj_48._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_48, "$.message.order.billing.email");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_48._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_EMAIL_48**: $.message.order.billing.email must be present in the payload",
                        },
                    ];
                }
                delete testObj_48._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CREATED_AT(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_50 = scope; _i < scope_50.length; _i++) {
                var testObj_49 = scope_50[_i];
                testObj_49._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_49, "$.message.order.billing.created_at");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_49._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload",
                        },
                    ];
                }
                delete testObj_49._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UPDATED_AT(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_51 = scope; _i < scope_51.length; _i++) {
                var testObj_50 = scope_51[_i];
                testObj_50._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_50, "$.message.order.billing.updated_at");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_50._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload",
                        },
                    ];
                }
                delete testObj_50._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_COLLECTED_BY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_52 = scope; _i < scope_52.length; _i++) {
                var testObj_51 = scope_52[_i];
                testObj_51._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_51, "$.message.order.payment.collected_by");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_51._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_COLLECTED_BY**: $.message.order.payment.collected_by must be present in the payload",
                        },
                    ];
                }
                delete testObj_51._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_TYPE_52(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_53 = scope; _i < scope_53.length; _i++) {
                var testObj_52 = scope_53[_i];
                testObj_52._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_52, "$.message.order.payment.type");
                var enumList = [
                    "ON-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_52._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TYPE_52**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_TYPE_52.1**: $.message.order.payment.type must be present in the payload\n  - **condition REQUIRED_MESSAGE_TYPE_52.2**: every element of $.message.order.payment.type must be in [\"ON-ORDER\", \"ON-FULFILLMENT\", \"POST-FULFILLMENT\"]",
                        },
                    ];
                }
                delete testObj_52._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_CONTEXT_DOMAIN(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_54 = scope; _i < scope_54.length; _i++) {
                var testObj_53 = scope_54[_i];
                testObj_53._EXTERNAL = input.externalData;
                var enumList = ["ONDC:LOG10", "ONDC:LOG11", "nic2004:60232"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_53, "$.context.domain");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_53._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in [\"ONDC:LOG10\", \"ONDC:LOG11\", \"nic2004:60232\"]\n\n\t> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.context.domain must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_53._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_55 = scope; _i < scope_55.length; _i++) {
                var testObj_54 = scope_55[_i];
                testObj_54._EXTERNAL = input.externalData;
                var enumList = ["Delivery", "Return", "RTO"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_54, "$.message.order.fulfillments[*].type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_54._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in [\"Delivery\", \"Return\", \"RTO\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_54._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_TYPE_3(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_56 = scope; _i < scope_56.length; _i++) {
                var testObj_55 = scope_56[_i];
                testObj_55._EXTERNAL = input.externalData;
                var enumList = [
                    "ON-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_55, "$.message.order.payment.type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_55._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_TYPE_3**: every element of $.message.order.payment.type must be in [\"ON-ORDER\", \"ON-FULFILLMENT\", \"POST-FULFILLMENT\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_TYPE_3** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.payment.type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_55._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_57 = scope; _i < scope_57.length; _i++) {
                var testObj_56 = scope_57[_i];
                testObj_56._EXTERNAL = input.externalData;
                var enumList = ["lbnp", "lsp"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_56, "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_56._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be in [\"lbnp\", \"lsp\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_56._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_58 = scope; _i < scope_58.length; _i++) {
                var testObj_57 = scope_58[_i];
                testObj_57._EXTERNAL = input.externalData;
                var validTags = ["masked_contact"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_57, "$.message.order.fulfillments[*].start.contact.tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_57._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0**: every element of $.message.order.fulfillments[*].start.contact.tags[*].code must be in [\"masked_contact\"]\n\n\t> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].start.contact.tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_57._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0_masked_contact(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_59 = scope; _i < scope_59.length; _i++) {
                var testObj_58 = scope_59[_i];
                testObj_58._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_58, "$.list[*].code");
                var validValues = ["type", "setup", "token"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_58._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0_masked_contact**: every element of $.message.order.fulfillments[*].start.contact.tags[?(@.code=='masked_contact')].list[*].code must be in [\"type\", \"setup\", \"token\"]",
                        },
                    ];
                }
                delete testObj_58._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_60 = scope; _i < scope_60.length; _i++) {
                var testObj_59 = scope_60[_i];
                testObj_59._EXTERNAL = input.externalData;
                var validTags = ["masked_contact"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_59, "$.message.order.fulfillments[*].end.contact.tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_59._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1**: every element of $.message.order.fulfillments[*].end.contact.tags[*].code must be in [\"masked_contact\"]\n\n\t> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].end.contact.tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_59._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1_masked_contact(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_61 = scope; _i < scope_61.length; _i++) {
                var testObj_60 = scope_61[_i];
                testObj_60._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_60, "$.list[*].code");
                var validValues = ["type", "setup", "token"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_60._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1_masked_contact**: every element of $.message.order.fulfillments[*].end.contact.tags[?(@.code=='masked_contact')].list[*].code must be in [\"type\", \"setup\", \"token\"]",
                        },
                    ];
                }
                delete testObj_60._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_2(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_62 = scope; _i < scope_62.length; _i++) {
                var testObj_61 = scope_62[_i];
                testObj_61._EXTERNAL = input.externalData;
                var validTags = [
                    "linked_provider",
                    "fulfill_request",
                    "fulfill_response",
                    "linked_order",
                ];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_61, "$.message.order.fulfillments[*].tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_61._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_2**: every element of $.message.order.fulfillments[*].tags[*].code must be in [\"linked_provider\", \"fulfill_request\", \"fulfill_response\", \"linked_order\"]\n\n\t> Note: **Condition validate_tag_2** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.fulfillments[*].tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_61._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_2_linked_provider(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='linked_provider')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_63 = scope; _i < scope_63.length; _i++) {
                var testObj_62 = scope_63[_i];
                testObj_62._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_62, "$.list[*].code");
                var validValues = ["id", "name", "address", "tax_id"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_62._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_2_linked_provider**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_provider')].list[*].code must be in [\"id\", \"name\", \"address\", \"tax_id\"]",
                        },
                    ];
                }
                delete testObj_62._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_2_fulfill_request(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='fulfill_request')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_64 = scope; _i < scope_64.length; _i++) {
                var testObj_63 = scope_64[_i];
                testObj_63._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_63, "$.list[*].code");
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
                    delete testObj_63._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_2_fulfill_request**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_request')].list[*].code must be in [\"rider_count\", \"order_count\", \"rate_basis\", \"motorable_distance\", \"pickup_slot_start\", \"pickup_slot_end\", \"delivery_slot_start\", \"delivery_slot_end\"]",
                        },
                    ];
                }
                delete testObj_63._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_2_fulfill_response(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='fulfill_response')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_65 = scope; _i < scope_65.length; _i++) {
                var testObj_64 = scope_65[_i];
                testObj_64._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_64, "$.list[*].code");
                var validValues = [
                    "rider_count",
                    "order_count",
                    "rate_basis",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_64._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_2_fulfill_response**: every element of $.message.order.fulfillments[*].tags[?(@.code=='fulfill_response')].list[*].code must be in [\"rider_count\", \"order_count\", \"rate_basis\"]",
                        },
                    ];
                }
                delete testObj_64._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_2_linked_order(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.fulfillments[*].tags[?(@.code=='linked_order')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_66 = scope; _i < scope_66.length; _i++) {
                var testObj_65 = scope_66[_i];
                testObj_65._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_65, "$.list[*].code");
                var validValues = [
                    "id",
                    "cod_order",
                    "collection_amount",
                    "currency",
                    "declared_value",
                    "category",
                    "weight_unit",
                    "weight_value",
                    "dim_unit",
                    "length",
                    "breadth",
                    "height",
                ];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_65._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_2_linked_order**: every element of $.message.order.fulfillments[*].tags[?(@.code=='linked_order')].list[*].code must be in [\"id\", \"cod_order\", \"collection_amount\", \"currency\", \"declared_value\", \"category\", \"weight_unit\", \"weight_value\", \"dim_unit\", \"length\", \"breadth\", \"height\"]",
                        },
                    ];
                }
                delete testObj_65._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_67 = scope; _i < scope_67.length; _i++) {
                var testObj_66 = scope_67[_i];
                testObj_66._EXTERNAL = input.externalData;
                var validTags = ["type"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_66, "$.message.order.items[*].tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_66._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3**: every element of $.message.order.items[*].tags[*].code must be in [\"type\"]\n\n\t> Note: **Condition validate_tag_3** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.items[*].tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_66._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_3_type(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.items[*].tags[?(@.code=='type')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_68 = scope; _i < scope_68.length; _i++) {
                var testObj_67 = scope_68[_i];
                testObj_67._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_67, "$.list[*].code");
                var validValues = ["type"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_67._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_3_type**: every element of $.message.order.items[*].tags[?(@.code=='type')].list[*].code must be in [\"type\"]",
                        },
                    ];
                }
                delete testObj_67._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_4(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_69 = scope; _i < scope_69.length; _i++) {
                var testObj_68 = scope_69[_i];
                testObj_68._EXTERNAL = input.externalData;
                var validTags = ["bap_terms"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_68, "$.message.order.tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_68._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_4**: every element of $.message.order.tags[*].code must be in [\"bap_terms\"]\n\n\t> Note: **Condition validate_tag_4** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.order.tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_68._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_4_bap_terms(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.order.tags[?(@.code=='bap_terms')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_70 = scope; _i < scope_70.length; _i++) {
                var testObj_69 = scope_70[_i];
                testObj_69._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_69, "$.list[*].code");
                var validValues = ["accept_bpp_terms"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_69._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_4_bap_terms**: every element of $.message.order.tags[?(@.code=='bap_terms')].list[*].code must be in [\"accept_bpp_terms\"]",
                        },
                    ];
                }
                delete testObj_69._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function init_fulfillment_id_validations(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_71 = scope; _i < scope_71.length; _i++) {
                var testObj_70 = scope_71[_i];
                testObj_70._EXTERNAL = input.externalData;
                function validate_fulfillment_id_in_items(input) {
                    var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
                    var subResults = [];
                    var valid = true;
                    for (var _i = 0, scope_72 = scope; _i < scope_72.length; _i++) {
                        var testObj_71 = scope_72[_i];
                        testObj_71._EXTERNAL = input.externalData;
                        var fulfillment_id = json_path_utils_1.default.getJsonPath(testObj_71, "$.message.order.items[*].fulfillment_id");
                        var fulfillment_ids = json_path_utils_1.default.getJsonPath(testObj_71, "$.message.order.items[*].fulfillment_ids[*]");
                        var validate = validation_utils_1.default.arePresent(fulfillment_id) ||
                            validation_utils_1.default.arePresent(fulfillment_ids);
                        if (!validate) {
                            delete testObj_71._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: "fulfillment_id or fulfillment_ids should be present in items",
                                },
                            ];
                        }
                        delete testObj_71._EXTERNAL;
                    }
                    return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
                }
                function validate_fulfillment_id_in_fulfillments(input) {
                    var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
                    var subResults = [];
                    var valid = true;
                    for (var _i = 0, scope_73 = scope; _i < scope_73.length; _i++) {
                        var testObj_72 = scope_73[_i];
                        testObj_72._EXTERNAL = input.externalData;
                        var fulfillment_id = json_path_utils_1.default.getJsonPath(testObj_72, "$.message.order.fulfillments[*].id");
                        var item_fulfillment_id = json_path_utils_1.default.getJsonPath(testObj_72, "$.message.order.items[*].fulfillment_id");
                        var item_fulfillment_ids = json_path_utils_1.default.getJsonPath(testObj_72, "$.message.order.items[*].fulfillment_ids[*]");
                        var validate = validation_utils_1.default.allIn(item_fulfillment_id, fulfillment_id) ||
                            validation_utils_1.default.allIn(item_fulfillment_ids, fulfillment_id);
                        if (!validate) {
                            delete testObj_72._EXTERNAL;
                            return [
                                {
                                    valid: false,
                                    code: 30000,
                                    description: "Fulfillment id in items should be mapped correctly in fulfillments array",
                                },
                            ];
                        }
                        delete testObj_72._EXTERNAL;
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
                delete testObj_70._EXTERNAL;
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
            REQUIRED_MESSAGE_ID_15,
            REQUIRED_MESSAGE_CATEGORY_ID,
            REQUIRED_MESSAGE_ID_17,
            REQUIRED_MESSAGE_TYPE,
            REQUIRED_MESSAGE_GPS,
            REQUIRED_MESSAGE_NAME,
            REQUIRED_MESSAGE_BUILDING,
            REQUIRED_MESSAGE_LOCALITY,
            REQUIRED_MESSAGE_CITY,
            REQUIRED_MESSAGE_STATE,
            REQUIRED_MESSAGE_COUNTRY,
            REQUIRED_MESSAGE_AREA_CODE,
            REQUIRED_MESSAGE_PHONE,
            REQUIRED_MESSAGE_EMAIL,
            REQUIRED_MESSAGE_GPS_29,
            REQUIRED_MESSAGE_NAME_30,
            REQUIRED_MESSAGE_BUILDING_31,
            REQUIRED_MESSAGE_LOCALITY_32,
            REQUIRED_MESSAGE_CITY_33,
            REQUIRED_MESSAGE_STATE_34,
            REQUIRED_MESSAGE_COUNTRY_35,
            REQUIRED_MESSAGE_AREA_CODE_36,
            REQUIRED_MESSAGE_PHONE_37,
            REQUIRED_MESSAGE_NAME_38,
            REQUIRED_MESSAGE_NAME_39,
            REQUIRED_MESSAGE_BUILDING_40,
            REQUIRED_MESSAGE_LOCALITY_41,
            REQUIRED_MESSAGE_CITY_42,
            REQUIRED_MESSAGE_STATE_43,
            REQUIRED_MESSAGE_COUNTRY_44,
            REQUIRED_MESSAGE_AREA_CODE_45,
            REQUIRED_MESSAGE_TAX_NUMBER,
            REQUIRED_MESSAGE_PHONE_47,
            REQUIRED_MESSAGE_EMAIL_48,
            REQUIRED_MESSAGE_CREATED_AT,
            REQUIRED_MESSAGE_UPDATED_AT,
            REQUIRED_MESSAGE_COLLECTED_BY,
            REQUIRED_MESSAGE_TYPE_52,
            VALID_ENUM_CONTEXT_DOMAIN,
            VALID_ENUM_MESSAGE_TYPE,
            VALID_ENUM_MESSAGE_TYPE_3,
            VALID_ENUM_MESSAGE_SETTLEMENT_COUNTERPARTY,
            validate_tag_0,
            validate_tag_0_masked_contact,
            validate_tag_1,
            validate_tag_1_masked_contact,
            validate_tag_2,
            validate_tag_2_linked_provider,
            validate_tag_2_fulfill_request,
            validate_tag_2_fulfill_response,
            validate_tag_2_linked_order,
            validate_tag_3,
            validate_tag_3_type,
            validate_tag_4,
            validate_tag_4_bap_terms,
            init_fulfillment_id_validations,
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
