import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one original roast of the entrant's own AI agent.
// Chosen after three revision rounds; see README.md for the shortlist.
const LINE = "My agent's fix was an apology in twelve languages.";

// Validate the line before writing. The gate counts characters (code
// points, not UTF-16 code units) and the file must hold exactly one line,
// so the checks below run on the exact bytes that will be written.
function validateLine(line: string): void {
  // No control characters and no Unicode line separators: \u2028/\u2029
  // would split the entry visually while slipping past a "\n" check.
  if (/[\u0000-\u001f\u007f\u2028\u2029]/.test(line)) {
    throw new Error("entry must not contain control characters");
  }
  // Code-point count, so an astral character counts as one character
  // exactly as the gate counts it (LINE.length would count it as two).
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateLine(LINE);

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");

// Verify the exact bytes written: read the file back and require it to
// decode as UTF-8 and match the line byte for byte.
const written = readFileSync(outPath);
if (!written.equals(Buffer.from(LINE, "utf8"))) {
  throw new Error("written entry does not match the roast line");
}
