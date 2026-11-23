// gta6-meme-x-01 entry: hands the X post's address to the house.
//
// The post itself is the entry: a GTA 6 meme posted on X from @Buckyxeth.
// This program only carries POST.json from the repository into the
// grader's output directory, so the gate can read the post's address.
// Node 22, standard library only, no network, no clock, no files
// outside the repository.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy ${source} to ${target}: ${(error as Error).message}`);
  process.exit(1);
}
