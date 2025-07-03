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
exports.default = search;
var json_path_utils_1 = require("../utils/json-path-utils");
var validation_utils_1 = require("../utils/validation-utils");
function search(input) {
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
        function REQUIRED_CONTEXT_TRANSACTION_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_9 = scope; _i < scope_9.length; _i++) {
                var testObj_8 = scope_9[_i];
                testObj_8._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_8, "$.context.transaction_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_8._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_8._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_MESSAGE_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_10 = scope; _i < scope_10.length; _i++) {
                var testObj_9 = scope_10[_i];
                testObj_9._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_9, "$.context.message_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_9._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_9._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_TIMESTAMP(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_11 = scope; _i < scope_11.length; _i++) {
                var testObj_10 = scope_11[_i];
                testObj_10._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_10, "$.context.timestamp");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_10._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload",
                        },
                    ];
                }
                delete testObj_10._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_CONTEXT_TTL(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_12 = scope; _i < scope_12.length; _i++) {
                var testObj_11 = scope_12[_i];
                testObj_11._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_11, "$.context.ttl");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_11._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload",
                        },
                    ];
                }
                delete testObj_11._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_13 = scope; _i < scope_13.length; _i++) {
                var testObj_12 = scope_13[_i];
                testObj_12._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_12, "$.message.intent.category.id");
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
                    delete testObj_12._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_ID.1**: $.message.intent.category.id must be present in the payload\n  - **condition REQUIRED_MESSAGE_ID.2**: every element of $.message.intent.category.id must be in [\"Express Delivery\", \"Standard Delivery\", \"Immediate Delivery\", \"Next Day Delivery\", \"Same Day Delivery\", \"Instant Delivery\"]",
                        },
                    ];
                }
                delete testObj_12._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_DAYS(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_14 = scope; _i < scope_14.length; _i++) {
                var testObj_13 = scope_14[_i];
                testObj_13._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_13, "$.message.intent.provider.time.days");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_13._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_DAYS**: $.message.intent.provider.time.days must be present in the payload",
                        },
                    ];
                }
                delete testObj_13._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_HOLIDAYS(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_15 = scope; _i < scope_15.length; _i++) {
                var testObj_14 = scope_15[_i];
                testObj_14._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_14, "$.message.intent.provider.time.schedule.holidays[*]");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_14._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_HOLIDAYS**: $.message.intent.provider.time.schedule.holidays[*] must be present in the payload",
                        },
                    ];
                }
                delete testObj_14._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_DURATION(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_16 = scope; _i < scope_16.length; _i++) {
                var testObj_15 = scope_16[_i];
                testObj_15._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_15, "$.message.intent.provider.time.duration");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_15._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_DURATION**: $.message.intent.provider.time.duration must be present in the payload",
                        },
                    ];
                }
                delete testObj_15._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_START(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_17 = scope; _i < scope_17.length; _i++) {
                var testObj_16 = scope_17[_i];
                testObj_16._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_16, "$.message.intent.provider.time.range.start");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_16._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_START**: $.message.intent.provider.time.range.start must be present in the payload",
                        },
                    ];
                }
                delete testObj_16._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_END(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_18 = scope; _i < scope_18.length; _i++) {
                var testObj_17 = scope_18[_i];
                testObj_17._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_17, "$.message.intent.provider.time.range.end");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_17._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_END**: $.message.intent.provider.time.range.end must be present in the payload",
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
                var attr = json_path_utils_1.default.getJsonPath(testObj_18, "$.message.intent.fulfillment.type");
                var enumList = ["Delivery", "Return", "RTO"];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_18._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.intent.fulfillment.type must be present in the payload\n  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.intent.fulfillment.type must be in [\"Delivery\", \"Return\", \"RTO\"]",
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
                var attr = json_path_utils_1.default.getJsonPath(testObj_19, "$.message.intent.fulfillment.start.location.gps");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_19._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_GPS**: $.message.intent.fulfillment.start.location.gps must be present in the payload",
                        },
                    ];
                }
                delete testObj_19._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_AREA_CODE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_21 = scope; _i < scope_21.length; _i++) {
                var testObj_20 = scope_21[_i];
                testObj_20._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_20, "$.message.intent.fulfillment.start.location.address.area_code");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_20._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.intent.fulfillment.start.location.address.area_code must be present in the payload",
                        },
                    ];
                }
                delete testObj_20._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_GPS_21(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_22 = scope; _i < scope_22.length; _i++) {
                var testObj_21 = scope_22[_i];
                testObj_21._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_21, "$.message.intent.fulfillment.end.location.gps");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_21._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_GPS_21**: $.message.intent.fulfillment.end.location.gps must be present in the payload",
                        },
                    ];
                }
                delete testObj_21._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_AREA_CODE_22(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_23 = scope; _i < scope_23.length; _i++) {
                var testObj_22 = scope_23[_i];
                testObj_22._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_22, "$.message.intent.fulfillment.end.location.address.area_code");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_22._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_AREA_CODE_22**: $.message.intent.fulfillment.end.location.address.area_code must be present in the payload",
                        },
                    ];
                }
                delete testObj_22._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_TYPE_23(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_24 = scope; _i < scope_24.length; _i++) {
                var testObj_23 = scope_24[_i];
                testObj_23._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_23, "$.message.intent.payment.type");
                var enumList = [
                    "ON-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_23._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TYPE_23**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_TYPE_23.1**: $.message.intent.payment.type must be present in the payload\n  - **condition REQUIRED_MESSAGE_TYPE_23.2**: every element of $.message.intent.payment.type must be in [\"ON-ORDER\", \"ON-FULFILLMENT\", \"POST-FULFILLMENT\"]",
                        },
                    ];
                }
                delete testObj_23._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UNIT(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_25 = scope; _i < scope_25.length; _i++) {
                var testObj_24 = scope_25[_i];
                testObj_24._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_24, "$.message.intent['@ondc/org/payload_details'].weight.unit");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_24._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UNIT**: $.message.intent['@ondc/org/payload_details'].weight.unit must be present in the payload",
                        },
                    ];
                }
                delete testObj_24._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_26 = scope; _i < scope_26.length; _i++) {
                var testObj_25 = scope_26[_i];
                testObj_25._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_25, "$.message.intent['@ondc/org/payload_details'].weight.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_25._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE**: $.message.intent['@ondc/org/payload_details'].weight.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_25._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UNIT_26(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_27 = scope; _i < scope_27.length; _i++) {
                var testObj_26 = scope_27[_i];
                testObj_26._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_26, "$.message.intent['@ondc/org/payload_details'].dimensions.length.unit");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_26._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UNIT_26**: $.message.intent['@ondc/org/payload_details'].dimensions.length.unit must be present in the payload",
                        },
                    ];
                }
                delete testObj_26._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE_27(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_28 = scope; _i < scope_28.length; _i++) {
                var testObj_27 = scope_28[_i];
                testObj_27._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_27, "$.message.intent['@ondc/org/payload_details'].dimensions.length.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_27._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE_27**: $.message.intent['@ondc/org/payload_details'].dimensions.length.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_27._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UNIT_28(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_29 = scope; _i < scope_29.length; _i++) {
                var testObj_28 = scope_29[_i];
                testObj_28._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_28, "$.message.intent['@ondc/org/payload_details'].dimensions.breadth.unit");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_28._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UNIT_28**: $.message.intent['@ondc/org/payload_details'].dimensions.breadth.unit must be present in the payload",
                        },
                    ];
                }
                delete testObj_28._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE_29(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_30 = scope; _i < scope_30.length; _i++) {
                var testObj_29 = scope_30[_i];
                testObj_29._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_29, "$.message.intent['@ondc/org/payload_details'].dimensions.breadth.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_29._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE_29**: $.message.intent['@ondc/org/payload_details'].dimensions.breadth.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_29._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UNIT_30(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_31 = scope; _i < scope_31.length; _i++) {
                var testObj_30 = scope_31[_i];
                testObj_30._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_30, "$.message.intent['@ondc/org/payload_details'].dimensions.height.unit");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_30._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UNIT_30**: $.message.intent['@ondc/org/payload_details'].dimensions.height.unit must be present in the payload",
                        },
                    ];
                }
                delete testObj_30._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE_31(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_32 = scope; _i < scope_32.length; _i++) {
                var testObj_31 = scope_32[_i];
                testObj_31._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_31, "$.message.intent['@ondc/org/payload_details'].dimensions.height.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_31._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE_31**: $.message.intent['@ondc/org/payload_details'].dimensions.height.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_31._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CATEGORY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_33 = scope; _i < scope_33.length; _i++) {
                var testObj_32 = scope_33[_i];
                testObj_32._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_32, "$.message.intent['@ondc/org/payload_details'].category");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_32._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CATEGORY**: $.message.intent['@ondc/org/payload_details'].category must be present in the payload",
                        },
                    ];
                }
                delete testObj_32._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CURRENCY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_34 = scope; _i < scope_34.length; _i++) {
                var testObj_33 = scope_34[_i];
                testObj_33._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_33, "$.message.intent['@ondc/org/payload_details'].value.currency");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_33._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.intent['@ondc/org/payload_details'].value.currency must be present in the payload",
                        },
                    ];
                }
                delete testObj_33._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_VALUE_34(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_35 = scope; _i < scope_35.length; _i++) {
                var testObj_34 = scope_35[_i];
                testObj_34._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_34, "$.message.intent['@ondc/org/payload_details'].value.value");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_34._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_VALUE_34**: $.message.intent['@ondc/org/payload_details'].value.value must be present in the payload",
                        },
                    ];
                }
                delete testObj_34._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_DANGEROUS_GOODS(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_36 = scope; _i < scope_36.length; _i++) {
                var testObj_35 = scope_36[_i];
                testObj_35._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_35, "$.message.intent['@ondc/org/payload_details'].dangerous_goods");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_35._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_DANGEROUS_GOODS**: $.message.intent['@ondc/org/payload_details'].dangerous_goods must be present in the payload",
                        },
                    ];
                }
                delete testObj_35._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_CONTEXT_DOMAIN(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_37 = scope; _i < scope_37.length; _i++) {
                var testObj_36 = scope_37[_i];
                testObj_36._EXTERNAL = input.externalData;
                var enumList = ["ONDC:LOG10", "ONDC:LOG11", "nic2004:60232"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_36, "$.context.domain");
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
                            description: "- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in [\"ONDC:LOG10\", \"ONDC:LOG11\", \"nic2004:60232\"]\n\n\t> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.context.domain must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_36._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_38 = scope; _i < scope_38.length; _i++) {
                var testObj_37 = scope_38[_i];
                testObj_37._EXTERNAL = input.externalData;
                var enumList = ["Delivery", "Return", "RTO"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_37, "$.message.intent.fulfillment.type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_37._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.intent.fulfillment.type must be in [\"Delivery\", \"Return\", \"RTO\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.intent.fulfillment.type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_37._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_TYPE_3(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_39 = scope; _i < scope_39.length; _i++) {
                var testObj_38 = scope_39[_i];
                testObj_38._EXTERNAL = input.externalData;
                var enumList = ["OTP"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_38, "$.message.intent.fulfillment.start.authorization.type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_38._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_TYPE_3**: every element of $.message.intent.fulfillment.start.authorization.type must be in [\"OTP\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_TYPE_3** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.intent.fulfillment.start.authorization.type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_38._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_CODE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_40 = scope; _i < scope_40.length; _i++) {
                var testObj_39 = scope_40[_i];
                testObj_39._EXTERNAL = input.externalData;
                var enumList = ["2", "3", "4", "5"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_39, "$.message.intent.fulfillment.start.instructions.code");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_39._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.intent.fulfillment.start.instructions.code must be in [\"2\", \"3\", \"4\", \"5\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.intent.fulfillment.start.instructions.code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_39._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_TYPE_5(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_41 = scope; _i < scope_41.length; _i++) {
                var testObj_40 = scope_41[_i];
                testObj_40._EXTERNAL = input.externalData;
                var enumList = ["OTP"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_40, "$.message.intent.fulfillment.end.authorization.type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_40._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_TYPE_5**: every element of $.message.intent.fulfillment.end.authorization.type must be in [\"OTP\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_TYPE_5** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.intent.fulfillment.end.authorization.type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_40._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_CODE_6(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_42 = scope; _i < scope_42.length; _i++) {
                var testObj_41 = scope_42[_i];
                testObj_41._EXTERNAL = input.externalData;
                var enumList = ["1", "2", "3", "5"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_41, "$.message.intent.fulfillment.end.instructions.code");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_41._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_CODE_6**: every element of $.message.intent.fulfillment.end.instructions.code must be in [\"1\", \"2\", \"3\", \"5\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_CODE_6** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.intent.fulfillment.end.instructions.code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_41._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_TYPE_7(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_43 = scope; _i < scope_43.length; _i++) {
                var testObj_42 = scope_43[_i];
                testObj_42._EXTERNAL = input.externalData;
                var enumList = [
                    "ON-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_42, "$.message.intent.payment.type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_42._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_TYPE_7**: every element of $.message.intent.payment.type must be in [\"ON-ORDER\", \"ON-FULFILLMENT\", \"POST-FULFILLMENT\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_TYPE_7** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.intent.payment.type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_42._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_44 = scope; _i < scope_44.length; _i++) {
                var testObj_43 = scope_44[_i];
                testObj_43._EXTERNAL = input.externalData;
                var enumList = [
                    "Express Delivery",
                    "Standard Delivery",
                    "Immediate Delivery",
                    "Next Day Delivery",
                    "Same Day Delivery",
                    "Instant Delivery",
                ];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_43, "$.message.intent.category.id");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_43._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_ID**: every element of $.message.intent.category.id must be in [\"Express Delivery\", \"Standard Delivery\", \"Immediate Delivery\", \"Next Day Delivery\", \"Same Day Delivery\", \"Instant Delivery\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_ID** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.intent.category.id must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_43._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_45 = scope; _i < scope_45.length; _i++) {
                var testObj_44 = scope_45[_i];
                testObj_44._EXTERNAL = input.externalData;
                var validTags = [
                    "linked_provider",
                    "linked_order",
                    "fulfill_request",
                ];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_44, "$.message.intent.fulfillment.tags[*].code");
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
                            description: "- **condition validate_tag_0**: every element of $.message.intent.fulfillment.tags[*].code must be in [\"linked_provider\", \"linked_order\", \"fulfill_request\"]\n\n\t> Note: **Condition validate_tag_0** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.intent.fulfillment.tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_44._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0_linked_provider(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.intent.fulfillment.tags[?(@.code=='linked_provider')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_46 = scope; _i < scope_46.length; _i++) {
                var testObj_45 = scope_46[_i];
                testObj_45._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_45, "$.list[*].code");
                var validValues = ["id", "name"];
                var validate = validation_utils_1.default.allIn(subTags, validValues);
                if (!validate) {
                    delete testObj_45._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0_linked_provider**: every element of $.message.intent.fulfillment.tags[?(@.code=='linked_provider')].list[*].code must be in [\"id\", \"name\"]",
                        },
                    ];
                }
                delete testObj_45._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0_linked_order(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.intent.fulfillment.tags[?(@.code=='linked_order')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_47 = scope; _i < scope_47.length; _i++) {
                var testObj_46 = scope_47[_i];
                testObj_46._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_46, "$.list[*].code");
                var validValues = [
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
                    delete testObj_46._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0_linked_order**: every element of $.message.intent.fulfillment.tags[?(@.code=='linked_order')].list[*].code must be in [\"cod_order\", \"collection_amount\", \"currency\", \"declared_value\", \"category\", \"weight_unit\", \"weight_value\", \"dim_unit\", \"length\", \"breadth\", \"height\"]",
                        },
                    ];
                }
                delete testObj_46._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_0_fulfill_request(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.intent.fulfillment.tags[?(@.code=='fulfill_request')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_48 = scope; _i < scope_48.length; _i++) {
                var testObj_47 = scope_48[_i];
                testObj_47._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_47, "$.list[*].code");
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
                    delete testObj_47._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_0_fulfill_request**: every element of $.message.intent.fulfillment.tags[?(@.code=='fulfill_request')].list[*].code must be in [\"rider_count\", \"order_count\", \"rate_basis\", \"motorable_distance\", \"pickup_slot_start\", \"pickup_slot_end\", \"delivery_slot_start\", \"delivery_slot_end\"]",
                        },
                    ];
                }
                delete testObj_47._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_49 = scope; _i < scope_49.length; _i++) {
                var testObj_48 = scope_49[_i];
                testObj_48._EXTERNAL = input.externalData;
                var validTags = ["lbnp_features", "lbnp_sla_terms"];
                var tagPath = json_path_utils_1.default.getJsonPath(testObj_48, "$.message.intent.tags[*].code");
                var skipCheck = !validation_utils_1.default.arePresent(tagPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(tagPath, validTags);
                if (!validate) {
                    delete testObj_48._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1**: every element of $.message.intent.tags[*].code must be in [\"lbnp_features\", \"lbnp_sla_terms\"]\n\n\t> Note: **Condition validate_tag_1** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.intent.tags[*].code must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_48._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1_lbnp_features(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.intent.tags[?(@.code=='lbnp_features')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_50 = scope; _i < scope_50.length; _i++) {
                var testObj_49 = scope_50[_i];
                testObj_49._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_49, "$.list[*].code");
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
                    delete testObj_49._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1_lbnp_features**: every element of $.message.intent.tags[?(@.code=='lbnp_features')].list[*].code must be in [\"00B\", \"00E\", \"01D\", \"005\", \"009\", \"00C\", \"000\", \"001\", \"002\", \"003\", \"004\", \"006\", \"007\", \"008\", \"00A\", \"00D\", \"00F\", \"010\", \"011\", \"012\", \"013\", \"014\", \"015\", \"016\", \"017\", \"018\", \"019\", \"01A\", \"01B\", \"01C\", \"01D\", \"01E\", \"01F\", \"020\", \"021\"]",
                        },
                    ];
                }
                delete testObj_49._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function validate_tag_1_lbnp_sla_terms(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$.message.intent.tags[?(@.code=='lbnp_sla_terms')]");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_51 = scope; _i < scope_51.length; _i++) {
                var testObj_50 = scope_51[_i];
                testObj_50._EXTERNAL = input.externalData;
                var subTags = json_path_utils_1.default.getJsonPath(testObj_50, "$.list[*].code");
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
                    delete testObj_50._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition validate_tag_1_lbnp_sla_terms**: every element of $.message.intent.tags[?(@.code=='lbnp_sla_terms')].list[*].code must be in [\"metric\", \"base_unit\", \"base_min\", \"base_max\", \"penalty_min\", \"penalty_max\", \"penalty_unit\", \"penalty_value\"]",
                        },
                    ];
                }
                delete testObj_50._EXTERNAL;
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
            REQUIRED_CONTEXT_TRANSACTION_ID,
            REQUIRED_CONTEXT_MESSAGE_ID,
            REQUIRED_CONTEXT_TIMESTAMP,
            REQUIRED_CONTEXT_TTL,
            REQUIRED_MESSAGE_ID,
            REQUIRED_MESSAGE_DAYS,
            REQUIRED_MESSAGE_HOLIDAYS,
            REQUIRED_MESSAGE_DURATION,
            REQUIRED_MESSAGE_START,
            REQUIRED_MESSAGE_END,
            REQUIRED_MESSAGE_TYPE,
            REQUIRED_MESSAGE_GPS,
            REQUIRED_MESSAGE_AREA_CODE,
            REQUIRED_MESSAGE_GPS_21,
            REQUIRED_MESSAGE_AREA_CODE_22,
            REQUIRED_MESSAGE_TYPE_23,
            REQUIRED_MESSAGE_UNIT,
            REQUIRED_MESSAGE_VALUE,
            REQUIRED_MESSAGE_UNIT_26,
            REQUIRED_MESSAGE_VALUE_27,
            REQUIRED_MESSAGE_UNIT_28,
            REQUIRED_MESSAGE_VALUE_29,
            REQUIRED_MESSAGE_UNIT_30,
            REQUIRED_MESSAGE_VALUE_31,
            REQUIRED_MESSAGE_CATEGORY,
            REQUIRED_MESSAGE_CURRENCY,
            REQUIRED_MESSAGE_VALUE_34,
            REQUIRED_MESSAGE_DANGEROUS_GOODS,
            VALID_ENUM_CONTEXT_DOMAIN,
            VALID_ENUM_MESSAGE_TYPE,
            VALID_ENUM_MESSAGE_TYPE_3,
            VALID_ENUM_MESSAGE_CODE,
            VALID_ENUM_MESSAGE_TYPE_5,
            VALID_ENUM_MESSAGE_CODE_6,
            VALID_ENUM_MESSAGE_TYPE_7,
            VALID_ENUM_MESSAGE_ID,
            validate_tag_0,
            validate_tag_0_linked_provider,
            validate_tag_0_linked_order,
            validate_tag_0_fulfill_request,
            validate_tag_1,
            validate_tag_1_lbnp_features,
            validate_tag_1_lbnp_sla_terms,
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
