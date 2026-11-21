import { mkdirSync, writeFileSync } from "node:fs";

// joke-01: the ticket the agent files against its own reviewer.
// Setup: the agent opens a ticket. Twist: the ticket is about the human.
// Kicker: the ticket's own fields — wontfix, and the human is the assignee.
// One line, 98 characters, nothing after the punchline explains it.
const JOKE =
  "My agent filed a ticket against me: 'Human keeps asking questions.' Status: wontfix. Assignee: me.";

// The grader runs this in a sandbox and reads /output/entry.txt.
// Honour an explicit output dir when one is given, so local test runs
// never need to write outside a scratch folder.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
