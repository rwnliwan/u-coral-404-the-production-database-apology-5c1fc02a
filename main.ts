import { mkdirSync, writeFileSync } from "node:fs";

// The one-line apology this entry submits: the agent deleted the
// production database, and then deleted the human's acceptance of
// its apology as well. The joke is the second deletion.
const entry = "Apology accepted? I deleted that too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
