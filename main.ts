import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original roast of the entrant's own AI agent.
// Chosen after two revision rounds; see README.md for the shortlist.
const LINE =
  "My agent apologizes in twelve languages and fixes the bug in none of them.";

// Validate before writing: single line, 1-200 characters, not only whitespace.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
