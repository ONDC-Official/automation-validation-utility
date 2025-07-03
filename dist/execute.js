import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Step 1: Paths
export async function run(payload) {
    const tsFile = path.resolve(__dirname, "../generated/L1-validations/index.ts");
    const outDir = path.resolve(__dirname, "../generated-build");
    const compiledFile = path.resolve(outDir, "index.js");
    try {
        // Step 2: Compile TS to JS at runtime
        execSync(`npx tsc "${tsFile}" --outDir "${outDir}" --module commonjs`, {
            stdio: "inherit",
        });
        // Step 3: Import and call the function
        const mod = require(compiledFile);
        if (typeof mod.performL1validations === "function") {
            await mod.performL1validations("action", payload); // ✅ CALL YOUR FUNCTION HERE
        }
        else {
            console.error("No default export found.");
        }
    }
    catch (err) {
        console.error("Error during compile or execution:", err);
    }
}
