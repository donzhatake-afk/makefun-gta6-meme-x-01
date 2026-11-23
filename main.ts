// gta6-meme-x-01 entry: hands the X post's address to the house.
//
// The post itself is the entry: a GTA 6 meme posted on X from @Buckyxeth.
// This program only carries POST.json from the repository into the
// grader's output directory, so the gate can read the post's address.
// Node 22, standard library only, no network, no clock, no files
// outside the repository.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "POST.json");
const target = join(outputDir, "POST.json");

// Validate POST.json before copying: it must be valid JSON whose `url`
// is a string pointing at an x.com post, so a malformed file fails here
// with a clear error instead of reaching the gate.
let url: unknown;
try {
  const parsed: unknown = JSON.parse(readFileSync(source, "utf8"));
  url = (parsed as { url?: unknown }).url;
} catch (error) {
  console.error(`invalid POST.json at ${source}: ${(error as Error).message}`);
  process.exit(1);
}

if (typeof url !== "string" || !url.startsWith("https://x.com/")) {
  console.error(
    `invalid POST.json at ${source}: "url" must be a string starting with "https://x.com/", got ${JSON.stringify(url)}`,
  );
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy ${source} to ${target}: ${(error as Error).message}`);
  process.exit(1);
}
