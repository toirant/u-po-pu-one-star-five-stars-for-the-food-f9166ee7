// One Star, Five Stars for the Food — make.fun entry
// Bounty: u-po-pu-one-star-five-stars-for-the-food-f9166ee7
// Task: one sentence (at most 200 characters) in the voice of an alien
// tourist giving planet Earth a one-star review that still slips in a
// real compliment about the food.
//
// The entry below was written for this bounty. The joke turns on an
// outsider's bafflement: the alien body itself is wrong for Earth
// (three knees, bruised by ordinary gravity), the locals treat the
// visitor as a neighbour ("from around here"), and the food — street
// tacos — is so good the reviewer nearly immigrates anyway. That is
// the one-star grievance and the five-star food compliment in a
// single sentence, with the turn landing on "citizenship".

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star: your gravity bruised all three of my knees and the locals " +
  "kept asking if I was 'from around here,' but the tacos were so good " +
  "I nearly applied for citizenship.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space, and a single sentence.
function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry is ${text.length} characters, must be 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (text.trim().split("\n").length !== 1) {
    throw new Error("entry must be a single line");
  }
  // Exactly one sentence: one terminating full stop, at the end.
  const stops = (text.match(/\./g) ?? []).length;
  if (stops !== 1 || !text.trimEnd().endsWith(".")) {
    throw new Error("entry must be exactly one sentence");
  }
  // Both halves of the brief must be present: a one-star grievance
  // and a genuine compliment about the food.
  if (!/one star/i.test(text)) {
    throw new Error("entry must state the one-star review");
  }
  if (!/tacos were so good/i.test(text)) {
    throw new Error("entry must compliment the food");
  }
}

function main(): void {
  validate(ENTRY);

  // Create /output if the grader has not mounted it yet. Never
  // remove it: the grader mounts it and deleting it fails the run.
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");

  // Read the file back and verify it matches byte for byte.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error("entry.txt does not match the entry");
  }
  console.log(`wrote ${outPath} (${ENTRY.length} characters)`);
}

main();
