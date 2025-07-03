"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performL1validations = performL1validations;
var json_normalizer_1 = require("./utils/json-normalizer");
var search_1 = require("./api-tests/search");
var init_1 = require("./api-tests/init");
var confirm_1 = require("./api-tests/confirm");
var status_1 = require("./api-tests/status");
var track_1 = require("./api-tests/track");
var cancel_1 = require("./api-tests/cancel");
var update_1 = require("./api-tests/update");
var on_search_1 = require("./api-tests/on_search");
var on_init_1 = require("./api-tests/on_init");
var on_confirm_1 = require("./api-tests/on_confirm");
var on_track_1 = require("./api-tests/on_track");
var on_cancel_1 = require("./api-tests/on_cancel");
var on_update_1 = require("./api-tests/on_update");
var on_status_1 = require("./api-tests/on_status");
var issue_1 = require("./api-tests/issue");
var on_issue_1 = require("./api-tests/on_issue");
function performL1validations(action, payload, allErrors, externalData) {
    if (allErrors === void 0) { allErrors = false; }
    if (externalData === void 0) { externalData = {}; }
    var normalizedPayload = (0, json_normalizer_1.default)(payload);
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
        case "init":
            return (0, init_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "confirm":
            return (0, confirm_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "status":
            return (0, status_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "track":
            return (0, track_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "cancel":
            return (0, cancel_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "update":
            return (0, update_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_search":
            return (0, on_search_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_init":
            return (0, on_init_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_confirm":
            return (0, on_confirm_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_track":
            return (0, on_track_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_cancel":
            return (0, on_cancel_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_update":
            return (0, on_update_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_status":
            return (0, on_status_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "issue":
            return (0, issue_1.default)({
                payload: normalizedPayload,
                externalData: externalData,
                config: {
                    runAllValidations: allErrors,
                },
            });
        case "on_issue":
            return (0, on_issue_1.default)({
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
