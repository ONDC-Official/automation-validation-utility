import { fileURLToPath } from "url";
import { ConfigCompiler } from "../node_modules/ondc-code-generator/dist/index.js";
import { SupportedLanguages } from "../node_modules/ondc-code-generator/dist/types/compiler-types.js";
import fs, { rmSync } from "fs";
import path from "path";
import { loadAndDereferenceYaml } from "./yaml-util.js";
import { createSandboxDir } from "./sandbox.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import { SupportedLanguages } from "ondc-code-generator/dist/types/compiler-types.js";

export async function evalConfig(x_validations: any, payload: any, id: string) {
	try {
		const comp = new ConfigCompiler(SupportedLanguages.Typescript);
		// const buildString = "build.yaml";
		const filePath = path.resolve(__dirname, "./config/build.yaml");
		const buildString = fs.readFileSync(filePath, "utf8");
		const buildParsed = (await loadAndDereferenceYaml(buildString)) as any;
		// console.log("buildString", buildString);
		await comp.initialize(buildString);
		let dummyConfig = {
			_TESTS_: {
				search: [x_validations],
			},
			_SESSION_DATA_: {},
		};
		//   x_validations = buildParsed["x-validations"] as any;
		const randomPath = `./processing/${id}/`;
		await comp.generateCode(dummyConfig, "L1-validations", true, randomPath);
		// pass the validations object and the name of the function of the generated code

		const finalOutput = await createSandboxDir(payload, id);
		try {
			rmSync(path.resolve(__dirname, `../processing/${id}`), {
				recursive: true,
				force: true,
			});
		} catch (e) {
			console.error("Error removing directory:", e);
		}
		return finalOutput;
	} catch (error) {
		console.error("Error in evalConfig:", error);
		return {
			error: "Failed to evaluate config",
			details: error instanceof Error ? error.message : String(error),
			// details: JSON.stringify(error, Object.getOwnPropertyNames(error), 2),
		};
	}
}
