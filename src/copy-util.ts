import { log } from "console";
import fs from "fs/promises";
import path from "path";

/**
 * Recursively copies a folder from src to dest
 */
export async function copyFolder(src: string, dest: string): Promise<void> {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyFolder(srcPath, destPath); // recursively copy subfolder
    } else {
      await fs.copyFile(srcPath, destPath); // copy file
    }
  }
}

export function generateRandomFiveDigit() {
  return String(Math.floor(10000 + Math.random() * 90000));
}
