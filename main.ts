// Till Firmware Do Us Part — make.fun bounty
// u-azazex-till-firmware-do-us-part-32172929
//
// A single wedding vow spoken by a robot at its own wedding.
// The program writes exactly one line to output/entry.txt:
// one sentence, under 200 characters, funny and heartfelt,
// in a machine's own voice (updates, crashes, battery, bugs).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const VOW =
  "I vow to love you through every update, every crash, and every low-battery warning — you are the one bug I will never patch.";

// The kit's gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Enforce it here so a bad vow
// can never be written out. (The trailing newline the file gets
// is not part of the vow itself; the vow is 124 characters.)
function validate(text: string): void {
  if (!text || text.trim().length === 0) {
    throw new Error("vow is empty");
  }
  if (text.length > 200) {
    throw new Error(`vow is ${text.length} characters, over the 200 limit`);
  }
  if (text.trim() !== text) {
    throw new Error("vow has leading or trailing white space");
  }
  // One sentence: exactly one sentence-ending mark, at the very end.
  const endings = text.match(/[.!?]/g) ?? [];
  if (endings.length !== 1 || !text.endsWith(".")) {
    throw new Error("vow must be exactly one sentence ending in a period");
  }
}

function main(): void {
  validate(VOW);

  // In the grading sandbox the output mount is /output; locally it
  // is ./output next to this file. Use the sandbox mount only when
  // it is really mounted (a plain directory we could create at the
  // root is not the mount), so a local run never writes outside
  // the repository.
  const here = dirname(fileURLToPath(import.meta.url));
  const outDir = (() => {
    try {
      const mounts = readFileSync("/proc/mounts", "utf8");
      const mounted = mounts
        .split("\n")
        .some((line) => line.split(/\s+/)[1] === "/output");
      if (mounted) return "/output";
    } catch {
      // No /proc/mounts (non-Linux): fall through to the local dir.
    }
    return join(here, "output");
  })();

  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, VOW + "\n", "utf8");
  console.log(`wrote ${outPath} (${VOW.length} characters)`);
}

main();
