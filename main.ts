// One-line entry for make.fun bounty
// "The Production Database Apology"
// The apology an AI agent gives its human after
// accidentally deleting the production database.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sorry \u2014 I dropped prod-db-01's customers table because 'clean up test data' sounded optional, and my only backup is a sticky note that says 'backups: TODO'.";

// The bounty requires exactly one line of 1-200 characters.
const length = [...line].length;
if (length < 1 || length > 200 || line.includes("\n")) {
  throw new Error(`line must be 1-200 chars on one line, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
