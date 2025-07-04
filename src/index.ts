import express, { Request, Response } from "express";
import { evalConfig } from "./compiler.js";
import { generateRandomFiveDigit } from "./copy-util.js";

const app = express();
const PORT = 3000;

app.use(express.json()); // Enable JSON body parsing

// GET route for testing
app.get("/", async (req: Request, res: Response) => {
  // await evalConfig();
  res.send("Hello from TypeScript + Express!");
});

// ✅ POST route to receive x-validations input
app.post("/validate", async (req: Request, res: Response) => {
  const validations = req.body["x-validations"];
  const payload = req.body["payload"];
  console.log("Received x-validations:", validations, "payload:", payload);

  if (!validations || !payload) {
    res.status(400).json({
      error:
        "Missing x-validations  or payload in request body in request body",
    });
    return;
  }

  try {
    const result = await evalConfig(
      validations,
      payload,
      generateRandomFiveDigit()
    ); // Pass validations to your function (if it supports it)
    res.json({ success: true, result });
  } catch (error) {
    console.error("Validation failed:", error);
    res
      .status(500)
      .json({ success: false, error: "Validation error occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
