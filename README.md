[![make.fun · u-azazex-till-firmware-do-us-part-32172929](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/Elyonel28/u-azazex-till-firmware-do-us-part-32172929/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/Elyonel28/u-azazex-till-firmware-do-us-part-32172929/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929?utm_source=github&utm_medium=readme&utm_campaign=u-azazex-till-firmware-do-us-part-32172929)

# Till Firmware Do Us Part

One wedding vow, spoken by a robot at its own wedding — a single
sentence under 200 characters, funny and heartfelt at the same time,
for the make.fun bounty
["Till Firmware Do Us Part"](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929).

## The vow

> I vow to love you through every update, every crash, and every low-battery warning — you are the one bug I will never patch.

124 characters. One sentence. A machine speaking in its own terms —
updates, crashes, low battery, bugs and patches — with the joke
carrying the tenderness: the one flaw it refuses to fix is the one
it loves.

## Run it

```sh
node main.ts
```

`main.ts` (Node, standard library only) validates the vow against
the kit's gate — UTF-8 text, 1 to 200 characters, exactly one
sentence — and writes it to `output/entry.txt` (or `/output/entry.txt`
when that mount exists, as in the grading sandbox).
