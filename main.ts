// One Word, One Username, One Reward — make.fun entry
// Entry: the entrant's own make.fun handle, one word — amber-comet-97.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "amber-comet-97";

// Gate: entry must be 1–30 characters, one word, no spaces.
if (LINE.length < 1 || LINE.length > 30 || /\s/.test(LINE)) {
  throw new Error(`username gate fails: ${JSON.stringify(LINE)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
