import normalizeKeys from "./utils/json-normalizer";
import search from "./api-tests/search";

export function performL1validations(
    action: string,
    payload: any,
    allErrors = false,
    externalData: any = {},
) {
    const normalizedPayload = normalizeKeys(payload);
    externalData._SELF = normalizedPayload;
    switch (action) {
        case "search":
            return search({
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
