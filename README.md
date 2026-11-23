# GTA 6 meme on X — make.fun bounty gta6-meme-x-01

The entry is the post itself: a GTA 6 meme posted on X from the public
account @Buckyxeth.

## The meme

A skeleton slumped on a cobwebbed couch, still waiting for GTA 6 since
2013 (calendar years crossed out behind him). The TV reads "GTA VI VICE
CITY SUNSET • 2026 • PRESS START". Next to him stands make.fun's white
ghost mascot in a "make.fun" shirt, holding a sack of USDC coins.

- Top caption: "ME, STILL WAITING FOR GTA 6"
- Bottom caption: "MEANWHILE I'M WINNING USDC ON MAKE.FUN"

## The post

- Post: https://x.com/Buckyxeth/status/2124729749532758148
- Text carries a tag of @makefunai and the entrant's play code
  `makefun-star-pizza-sonnet`.
- Account @Buckyxeth stays public until the results are out.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads the post's
address. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
