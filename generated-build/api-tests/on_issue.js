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
exports.default = on_issue;
var json_path_utils_1 = require("../utils/json-path-utils");
var validation_utils_1 = require("../utils/validation-utils");
function on_issue(input) {
    var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
    var subResults = [];
    var valid = true;
    for (var _i = 0, scope_1 = scope; _i < scope_1.length; _i++) {
        var testObj = scope_1[_i];
        testObj._EXTERNAL = input.externalData;
        function REQUIRED_MESSAGE_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_2 = scope; _i < scope_2.length; _i++) {
                var testObj_1 = scope_2[_i];
                testObj_1._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_1, "$.message.issue.id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_1._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID**: $.message.issue.id must be present in the payload",
                        },
                    ];
                }
                delete testObj_1._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_STATUS(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_3 = scope; _i < scope_3.length; _i++) {
                var testObj_2 = scope_3[_i];
                testObj_2._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_2, "$.message.issue.status");
                var enumList = [
                    "OPEN",
                    "CLOSED",
                    "PROCESSING",
                    "NEED_MORE_INFO",
                    "RESOLVED",
                    "INFO_PROVIDED",
                ];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_2._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.issue.status must be present in the payload\n  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.issue.status must be in [\"OPEN\", \"CLOSED\", \"PROCESSING\", \"NEED_MORE_INFO\", \"RESOLVED\", \"INFO_PROVIDED\"]",
                        },
                    ];
                }
                delete testObj_2._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LEVEL(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_4 = scope; _i < scope_4.length; _i++) {
                var testObj_3 = scope_4[_i];
                testObj_3._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_3, "$.message.issue.level");
                var enumList = ["ISSUE", "GREVIENCE", "DISPUTE"];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_3._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LEVEL**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_LEVEL.1**: $.message.issue.level must be present in the payload\n  - **condition REQUIRED_MESSAGE_LEVEL.2**: every element of $.message.issue.level must be in [\"ISSUE\", \"GREVIENCE\", \"DISPUTE\"]",
                        },
                    ];
                }
                delete testObj_3._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CREATED_AT(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_5 = scope; _i < scope_5.length; _i++) {
                var testObj_4 = scope_5[_i];
                testObj_4._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_4, "$.message.issue.created_at");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_4._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.issue.created_at must be present in the payload",
                        },
                    ];
                }
                delete testObj_4._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UPDATED_AT(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_6 = scope; _i < scope_6.length; _i++) {
                var testObj_5 = scope_6[_i];
                testObj_5._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_5, "$.message.issue.updated_at");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_5._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.issue.updated_at must be present in the payload",
                        },
                    ];
                }
                delete testObj_5._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_DURATION(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_7 = scope; _i < scope_7.length; _i++) {
                var testObj_6 = scope_7[_i];
                testObj_6._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_6, "$.message.issue.expected_response_time.duration");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_6._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_DURATION**: $.message.issue.expected_response_time.duration must be present in the payload",
                        },
                    ];
                }
                delete testObj_6._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_DURATION_7(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_8 = scope; _i < scope_8.length; _i++) {
                var testObj_7 = scope_8[_i];
                testObj_7._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_7, "$.message.issue.expected_resolution_time.duration");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_7._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_DURATION_7**: $.message.issue.expected_resolution_time.duration must be present in the payload",
                        },
                    ];
                }
                delete testObj_7._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_REF_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_9 = scope; _i < scope_9.length; _i++) {
                var testObj_8 = scope_9[_i];
                testObj_8._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_8, "$.message.issue.refs[*].ref_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_8._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_REF_ID**: $.message.issue.refs[*].ref_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_8._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_REF_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_10 = scope; _i < scope_10.length; _i++) {
                var testObj_9 = scope_10[_i];
                testObj_9._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_9, "$.message.issue.refs[*].ref_type");
                var enumList = [
                    "ORDER",
                    "ITEM",
                    "FULFILLMENT",
                    "TRANSACTION_ID",
                    "MESSAGE_ID",
                    "PROVIDER",
                    "COMPLAINT",
                    "ACTION",
                    "PAYMENT",
                    "CUSTOMER",
                    "AGENT",
                ];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_9._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_REF_TYPE**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_REF_TYPE.1**: $.message.issue.refs[*].ref_type must be present in the payload\n  - **condition REQUIRED_MESSAGE_REF_TYPE.2**: every element of $.message.issue.refs[*].ref_type must be in [\"ORDER\", \"ITEM\", \"FULFILLMENT\", \"TRANSACTION_ID\", \"MESSAGE_ID\", \"PROVIDER\", \"COMPLAINT\", \"ACTION\", \"PAYMENT\", \"CUSTOMER\", \"AGENT\"]",
                        },
                    ];
                }
                delete testObj_9._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID_10(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_11 = scope; _i < scope_11.length; _i++) {
                var testObj_10 = scope_11[_i];
                testObj_10._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_10, "$.message.issue.actors[*].id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_10._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID_10**: $.message.issue.actors[*].id must be present in the payload",
                        },
                    ];
                }
                delete testObj_10._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_12 = scope; _i < scope_12.length; _i++) {
                var testObj_11 = scope_12[_i];
                testObj_11._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_11, "$.message.issue.actors[*].type");
                var enumList = [
                    "INTERFACING_NP",
                    "COUNTERPARTY_NP",
                    "CASCADED_NP",
                    "PROVIDER",
                    "AGENT",
                    "CUSTOMER",
                    "INTERFACING_NP_GRO",
                    "COUNTERPARTY_NP_GRO",
                    "CASCADED_NP_GRO",
                    "CONSUMER",
                ];
                var validate = validation_utils_1.default.arePresent(attr) &&
                    validation_utils_1.default.allIn(attr, enumList);
                if (!validate) {
                    delete testObj_11._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:\n\n  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.issue.actors[*].type must be present in the payload\n  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.issue.actors[*].type must be in [\"INTERFACING_NP\", \"COUNTERPARTY_NP\", \"CASCADED_NP\", \"PROVIDER\", \"AGENT\", \"CUSTOMER\", \"INTERFACING_NP_GRO\", \"COUNTERPARTY_NP_GRO\", \"CASCADED_NP_GRO\", \"CONSUMER\"]",
                        },
                    ];
                }
                delete testObj_11._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_13 = scope; _i < scope_13.length; _i++) {
                var testObj_12 = scope_13[_i];
                testObj_12._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_12, "$.message.issue.actors[*].info.person.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_12._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME**: $.message.issue.actors[*].info.person.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_12._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_NAME_13(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_14 = scope; _i < scope_14.length; _i++) {
                var testObj_13 = scope_14[_i];
                testObj_13._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_13, "$.message.issue.actors[*].info.person.name");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_13._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_NAME_13**: $.message.issue.actors[*].info.person.name must be present in the payload",
                        },
                    ];
                }
                delete testObj_13._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_PHONE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_15 = scope; _i < scope_15.length; _i++) {
                var testObj_14 = scope_15[_i];
                testObj_14._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_14, "$.message.issue.actors[*].info.contact.phone");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_14._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_PHONE**: $.message.issue.actors[*].info.contact.phone must be present in the payload",
                        },
                    ];
                }
                delete testObj_14._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_EMAIL(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_16 = scope; _i < scope_16.length; _i++) {
                var testObj_15 = scope_16[_i];
                testObj_15._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_15, "$.message.issue.actors[*].info.contact.email");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_15._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_EMAIL**: $.message.issue.actors[*].info.contact.email must be present in the payload",
                        },
                    ];
                }
                delete testObj_15._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_SOURCE_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_17 = scope; _i < scope_17.length; _i++) {
                var testObj_16 = scope_17[_i];
                testObj_16._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_16, "$.message.issue.source_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_16._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_SOURCE_ID**: $.message.issue.source_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_16._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CODE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_18 = scope; _i < scope_18.length; _i++) {
                var testObj_17 = scope_18[_i];
                testObj_17._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_17, "$.message.issue.descriptor.code");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_17._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CODE**: $.message.issue.descriptor.code must be present in the payload",
                        },
                    ];
                }
                delete testObj_17._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_SHORT_DESC(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_19 = scope; _i < scope_19.length; _i++) {
                var testObj_18 = scope_19[_i];
                testObj_18._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_18, "$.message.issue.descriptor.short_desc");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_18._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.issue.descriptor.short_desc must be present in the payload",
                        },
                    ];
                }
                delete testObj_18._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LONG_DESC(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_20 = scope; _i < scope_20.length; _i++) {
                var testObj_19 = scope_20[_i];
                testObj_19._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_19, "$.message.issue.descriptor.long_desc");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_19._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LONG_DESC**: $.message.issue.descriptor.long_desc must be present in the payload",
                        },
                    ];
                }
                delete testObj_19._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_URL(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_21 = scope; _i < scope_21.length; _i++) {
                var testObj_20 = scope_21[_i];
                testObj_20._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_20, "$.message.issue.descriptor.additional_desc.url");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_20._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_URL**: $.message.issue.descriptor.additional_desc.url must be present in the payload",
                        },
                    ];
                }
                delete testObj_20._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CONTENT_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_22 = scope; _i < scope_22.length; _i++) {
                var testObj_21 = scope_22[_i];
                testObj_21._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_21, "$.message.issue.descriptor.additional_desc.content_type");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_21._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CONTENT_TYPE**: $.message.issue.descriptor.additional_desc.content_type must be present in the payload",
                        },
                    ];
                }
                delete testObj_21._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_LAST_ACTION_ID(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_23 = scope; _i < scope_23.length; _i++) {
                var testObj_22 = scope_23[_i];
                testObj_22._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_22, "$.message.issue.last_action_id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_22._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_LAST_ACTION_ID**: $.message.issue.last_action_id must be present in the payload",
                        },
                    ];
                }
                delete testObj_22._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ID_25(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_24 = scope; _i < scope_24.length; _i++) {
                var testObj_23 = scope_24[_i];
                testObj_23._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_23, "$.message.issue.actions[*].id");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_23._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ID_25**: $.message.issue.actions[*].id must be present in the payload",
                        },
                    ];
                }
                delete testObj_23._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_CODE_26(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_25 = scope; _i < scope_25.length; _i++) {
                var testObj_24 = scope_25[_i];
                testObj_24._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_24, "$.message.issue.actions[*].descriptor.code");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_24._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_CODE_26**: $.message.issue.actions[*].descriptor.code must be present in the payload",
                        },
                    ];
                }
                delete testObj_24._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_SHORT_DESC_27(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_26 = scope; _i < scope_26.length; _i++) {
                var testObj_25 = scope_26[_i];
                testObj_25._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_25, "$.message.issue.actions[*].descriptor.short_desc");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_25._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_SHORT_DESC_27**: $.message.issue.actions[*].descriptor.short_desc must be present in the payload",
                        },
                    ];
                }
                delete testObj_25._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_UPDATED_AT_28(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_27 = scope; _i < scope_27.length; _i++) {
                var testObj_26 = scope_27[_i];
                testObj_26._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_26, "$.message.issue.actions[*].updated_at");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_26._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_UPDATED_AT_28**: $.message.issue.actions[*].updated_at must be present in the payload",
                        },
                    ];
                }
                delete testObj_26._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function REQUIRED_MESSAGE_ACTION_BY(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_28 = scope; _i < scope_28.length; _i++) {
                var testObj_27 = scope_28[_i];
                testObj_27._EXTERNAL = input.externalData;
                var attr = json_path_utils_1.default.getJsonPath(testObj_27, "$.message.issue.actions[*].action_by");
                var validate = validation_utils_1.default.arePresent(attr);
                if (!validate) {
                    delete testObj_27._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition REQUIRED_MESSAGE_ACTION_BY**: $.message.issue.actions[*].action_by must be present in the payload",
                        },
                    ];
                }
                delete testObj_27._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_STATUS(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_29 = scope; _i < scope_29.length; _i++) {
                var testObj_28 = scope_29[_i];
                testObj_28._EXTERNAL = input.externalData;
                var enumList = [
                    "OPEN",
                    "CLOSED",
                    "PROCESSING",
                    "RESOLVED",
                    "NEED_MORE_INFO",
                    "INFO_PROVIDED",
                ];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_28, "$.message.issue.status");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_28._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.issue.status must be in [\"OPEN\", \"CLOSED\", \"PROCESSING\", \"RESOLVED\", \"NEED_MORE_INFO\", \"INFO_PROVIDED\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.issue.status must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_28._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_LEVEL(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_30 = scope; _i < scope_30.length; _i++) {
                var testObj_29 = scope_30[_i];
                testObj_29._EXTERNAL = input.externalData;
                var enumList = ["ISSUE", "GREVIENCE", "DISPUTE"];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_29, "$.message.issue.level");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_29._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_LEVEL**: every element of $.message.issue.level must be in [\"ISSUE\", \"GREVIENCE\", \"DISPUTE\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_LEVEL** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.issue.level must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_29._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        function VALID_ENUM_MESSAGE_REF_TYPE(input) {
            var scope = json_path_utils_1.default.getJsonPath(input.payload, "$");
            var subResults = [];
            var valid = true;
            for (var _i = 0, scope_31 = scope; _i < scope_31.length; _i++) {
                var testObj_30 = scope_31[_i];
                testObj_30._EXTERNAL = input.externalData;
                var enumList = [
                    "ORDER",
                    "ITEM",
                    "FULFILLMENT",
                    "TRANSACTION_ID",
                    "MESSAGE_ID",
                    "PROVIDER",
                    "COMPLAINT",
                    "ACTION",
                    "PAYMENT",
                    "CUSTOMER",
                    "AGENT",
                ];
                var enumPath = json_path_utils_1.default.getJsonPath(testObj_30, "$.message.issue.refs[*].ref_type");
                var skipCheck = !validation_utils_1.default.arePresent(enumPath);
                if (skipCheck)
                    continue;
                var validate = validation_utils_1.default.allIn(enumPath, enumList);
                if (!validate) {
                    delete testObj_30._EXTERNAL;
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: "- **condition VALID_ENUM_MESSAGE_REF_TYPE**: every element of $.message.issue.refs[*].ref_type must be in [\"ORDER\", \"ITEM\", \"FULFILLMENT\", \"TRANSACTION_ID\", \"MESSAGE_ID\", \"PROVIDER\", \"COMPLAINT\", \"ACTION\", \"PAYMENT\", \"CUSTOMER\", \"AGENT\"]\n\n\t> Note: **Condition VALID_ENUM_MESSAGE_REF_TYPE** can be skipped if the following conditions are met:\n\t>\n\t> - **condition B**: $.message.issue.refs[*].ref_type must **not** be present in the payload",
                        },
                    ];
                }
                delete testObj_30._EXTERNAL;
            }
            return __spreadArray([{ valid: valid, code: 200 }], subResults, true);
        }
        var testFunctions = [
            REQUIRED_MESSAGE_ID,
            REQUIRED_MESSAGE_STATUS,
            REQUIRED_MESSAGE_LEVEL,
            REQUIRED_MESSAGE_CREATED_AT,
            REQUIRED_MESSAGE_UPDATED_AT,
            REQUIRED_MESSAGE_DURATION,
            REQUIRED_MESSAGE_DURATION_7,
            REQUIRED_MESSAGE_REF_ID,
            REQUIRED_MESSAGE_REF_TYPE,
            REQUIRED_MESSAGE_ID_10,
            REQUIRED_MESSAGE_TYPE,
            REQUIRED_MESSAGE_NAME,
            REQUIRED_MESSAGE_NAME_13,
            REQUIRED_MESSAGE_PHONE,
            REQUIRED_MESSAGE_EMAIL,
            REQUIRED_MESSAGE_SOURCE_ID,
            REQUIRED_MESSAGE_CODE,
            REQUIRED_MESSAGE_SHORT_DESC,
            REQUIRED_MESSAGE_LONG_DESC,
            REQUIRED_MESSAGE_URL,
            REQUIRED_MESSAGE_CONTENT_TYPE,
            REQUIRED_MESSAGE_LAST_ACTION_ID,
            REQUIRED_MESSAGE_ID_25,
            REQUIRED_MESSAGE_CODE_26,
            REQUIRED_MESSAGE_SHORT_DESC_27,
            REQUIRED_MESSAGE_UPDATED_AT_28,
            REQUIRED_MESSAGE_ACTION_BY,
            VALID_ENUM_MESSAGE_STATUS,
            VALID_ENUM_MESSAGE_LEVEL,
            VALID_ENUM_MESSAGE_REF_TYPE,
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
