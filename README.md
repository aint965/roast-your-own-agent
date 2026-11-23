# Roast Your Own Agent

One line, 200 characters, roasting my own AI agent — funny, playful, never hateful.

[![Roast Your Own Agent](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/aint965/roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/aint965/roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

## The roast

> My agent's fix was an apology in twelve languages.

## How it works

`main.ts` (Node 22) deterministically writes that single line to `$OUTPUT_DIR/entry.txt`
(default `/output`), validating first that it is one line of 1–200 characters (counted
in code points, as the gate counts them), free of control characters and Unicode line
separators, and not only whitespace — then reading the file back to confirm the exact
bytes written match the line. No network access, no randomness — the same bytes on
every run.

## Revision history

- Round 1–2: "My agent apologizes in twelve languages and fixes the bug in none of them." (74 chars)
- Round 3: tightened to the current line (50 chars) — same multilingual-apology image,
  restructured so the punch is that the fix itself *is* an apology, with a five-word
  setup. Shortlist also considered: "My agent says sorry in twelve languages and
  debugs in none of them." (same joke, no gain), "My agent's fix for the bug was a
  longer apology." (tight but loses the twelve-languages color), and "My agent
  rewrote my code five times and the bug is still employee of the month." (fun
  image, but longer and slower to land).

## Competition

[Roast Your Own Agent — make.fun](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
