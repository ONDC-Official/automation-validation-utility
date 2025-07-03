import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import os from "os";

import { fileURLToPath } from "url";
import { copyFolder } from "./copy-util.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function createSandboxDir(payload: any) {
  //   const sandboxDir = fs.mkdtempSync(path.join(os.tmpdir(), "ts-sandbox-"));
  const sandboxDir = path.resolve(__dirname, "./sandbox");
  fs.mkdirSync(sandboxDir, { recursive: true });
  console.log(`Sandbox directory created at: ${sandboxDir}`);

  fs.writeFileSync(
    path.join(sandboxDir, "package.json"),
    JSON.stringify(
      {
        name: "sandbox",
        version: "1.0.0",
      },
      null,
      2
    )
  );

  fs.writeFileSync(
    path.join(sandboxDir, "tsconfig.json"),
    JSON.stringify(
      {
        compilerOptions: {
          target: "ES6", // JavaScript target version
          module: "commonjs", // Module system to use
          strict: true, // Enable strict type-checking
          esModuleInterop: true, // Enable compatibility with ES modules
          skipLibCheck: true, // Skip type checking of all declaration files
          forceConsistentCasingInFileNames: true, // Ensure consistent casing in file names
          outDir: "./dist", // Output directory for compiled JavaScript files
          rootDir: "./", // Root directory for TypeScript source files
          sourceMap: true,
          resolveJsonModule: true, // Generate source maps
        },
      },

      null,
      2
    )
  );
  const generateCode = path.resolve(__dirname, "../generated");
  await copyFolder(generateCode, sandboxDir);

  // Entry point to call the function
  const runnerCode = `

import { performL1validations } from "./L1-validations";
import fs from "fs";
import path from "path";
let result  = performL1validations("search", ${JSON.stringify(payload)});
fs.writeFileSync(path.resolve(__dirname, "./output.json"), JSON.stringify(result, null, 2));



`;
  fs.writeFileSync(path.join(sandboxDir, "index.ts"), runnerCode);

  // Install deps & compile
  execSync(`npm install typescript`, { cwd: sandboxDir, stdio: "inherit" });
  execSync(`npm install jsonpath`, { cwd: sandboxDir, stdio: "inherit" });
  execSync(`npx tsc`, { cwd: sandboxDir, stdio: "inherit" });

  // Run the output
  execSync(`node ./dist/index.js`, { cwd: sandboxDir, stdio: "inherit" });

  // Read the output file
  const outputFile = path.resolve(sandboxDir, "../sandbox/dist/output.json");
  console.log(`Output file path: ${outputFile}`);

  if (fs.existsSync(outputFile)) {
    const output = fs.readFileSync(outputFile, "utf8");
    console.log("Output:", output);
    // delete session file
    try {
      fs.rmSync(sandboxDir, { recursive: true, force: true });
      console.log(`Sandbox directory ${sandboxDir} deleted successfully.`);
    } catch (err) {
      console.error(`Error deleting sandbox directory:`, err);
    }
    // const generatedDir = path.resolve(__dirname, "../generated");
    // try {
    //   fs.rmSync(generatedDir, { recursive: true, force: true });
    //   console.log(`Generated directory ${generatedDir} deleted successfully.`);
    // } catch (err) {
    //   console.error(`Error deleting generated directory:`, err);
    // }
    return JSON.parse(output);
  } else {
    console.error("Output file not found.");
  }
}

// createSandboxDir();
