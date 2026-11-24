// One Word, One Username, One Reward — make.fun entry
// Entry: the entrant's own make.fun handle, one word — amber-comet-97.
// Verified live via makefun profile: @amber-comet-97.
// Criteria order: genuine handle first, raises a smile, sticks in the
// mind, single word, sounds like a handle its owner would wear.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "amber-comet-97";

// Gate: entry must be 1–30 characters, one word, no spaces.
if (LINE.length < 1 || LINE.length > 30 || /\s/.test(LINE)) {
  throw new Error(`username gate fails: ${JSON.stringify(LINE)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
