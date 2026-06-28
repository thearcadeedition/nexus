// =============================================================
//  HOW TO ADD A GAME — quick guide for Silver
//
//  Step 1: Copy /gamefiles/_TEMPLATE.html, rename it, paste your
//          game URL where it says PASTE_GAME_URL_HERE.
//
//  Step 2: Add one entry to the GAMES array below.
//
//  ENTRY FORMAT:
//  {
//      title: "Game Name",
//      file:  "mygame.html",        ← filename you created in /gamefiles/
//
//      img:   "https://...",        ← OPTION A: paste any image URL directly
//                                      (right-click image → Copy image address)
//      OR
//      img:   "mygame.webp",        ← OPTION B: filename in /gameimages/ folder
//
//      tags:  ["action"]            ← pick from the list below:
//  }
//
//  AVAILABLE TAGS:
//    action | puzzle | platformer | racing | rpg
//    sandbox | horror | idle | sports | io | multiplayer
// =============================================================

const GAMES = [

    // ── ACTION ───────────────────────────────────────────────
    {
        title: "10 Minutes Till Dawn",
        file:  "10minutestildawn.html",
        img:   "https://iogamesweb.com/thumb/10_Minutes_Till_Dawn.webp",
        tags:  ["action"]
    },
    {
        title: "20 Minutes Till Dawn",
        file:  "20minutestildawn.html",
        img:   "20minutestildawn.webp",
        tags:  ["action"]
    },
    {
        title: "10 Bullets",
        file:  "10bullet.html",
        img:   "10bullet.webp",
        tags:  ["action"]
    },
    {
        title: "10 More Bullets",
        file:  "10morebullets.html",
        img:   "10morebullets.webp",
        tags:  ["action"]
    },
    {
        title: "2Doom",
        file:  "2doomy.html",
        img:   "2doomy.webp",
        tags:  ["action"]
    },
    {
        title: "500 Caliber Contractz",
        file:  "500calibercontractz.html",
        img:   "500calibercontractz.webp",
        tags:  ["action"]
    },
    {
        title: "Hollow Knight",
        file:  "hollowknight.html",
        img:   "https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_992,q_auto:low/MNS/NOE/70010000003207/SQ_NSwitchDS_HollowKnight",
        tags:  ["platformer", "action"]
    },
    {
        title: "99 Nights In The Forest",
        file:  "99nightsitf.html",
        img:   "99nightsitf.webp",
        tags:  ["action"]
    },

    // ── PUZZLE ───────────────────────────────────────────────
    {
        title: "2048",
        file:  "2048.html",
        img:   "2048.webp",
        tags:  ["puzzle"]
    },
    {
        title: "2048 Merge Run",
        file:  "2048mergerun.html",
        img:   "2048mergerun.webp",
        tags:  ["puzzle", "idle"]
    },
    {
        title: "20 Small Mazes",
        file:  "20smallmazes.html",
        img:   "20smallmazes.webp",
        tags:  ["puzzle"]
    },
    {
        title: "3 Slices 2",
        file:  "3slices2.html",
        img:   "3slices2.webp",
        tags:  ["puzzle"]
    },
    {
        title: "40xescape",
        file:  "40escape.html",
        img:   "40escape.webp",
        tags:  ["puzzle"]
    },
    {
        title: "9007199254740992",
        file:  "9007199254740992.html",
        img:   "9007199254740992.webp",
        tags:  ["puzzle"]
    },
    {
        title: "99 Balls",
        file:  "99balls.html",
        img:   "99balls.webp",
        tags:  ["puzzle", "idle"]
    },

    // ── RACING ───────────────────────────────────────────────
    {
        title: "2D Rocket League",
        file:  "2drocketleague.html",
        img:   "2drocketleague.webp",
        tags:  ["racing", "sports"]
    },

    // ── SPORTS ───────────────────────────────────────────────
    {
        title: "1 On 1 Soccer",
        file:  "1on1soccer.html",
        img:   "1on1soccer.webp",
        tags:  ["sports", "multiplayer"]
    },
    {
        title: "1 On 1 Tennis",
        file:  "1v1tennis.html",
        img:   "https://tcf.admeen.org/category/500/382/400x400/tennis.jpg",
        tags:  ["sports", "multiplayer"]
    },
    {
        title: "3D Bowling",
        file:  "3dbowling.html",
        img:   "3dbowling.webp",
        tags:  ["sports"]
    },
    {
        title: "4th And Goal",
        file:  "4thandgoal.html",
        img:   "4thandgoal.webp",
        tags:  ["sports"]
    },
    {
        title: "8 Ball Classic",
        file:  "8ballclassic.html",
        img:   "8ballclassic.webp",
        tags:  ["sports"]
    },
    {
        title: "8 Ball Pool",
        file:  "8ballpool.html",
        img:   "8ballpool.webp",
        tags:  ["sports", "multiplayer"]
    },

    // ── HORROR ───────────────────────────────────────────────
    // (No horror titles were present in this list batch)

    // ── IDLE ─────────────────────────────────────────────────
    {
        title: "1",
        file:  "1.html",
        img:   "1.webp",
        tags:  ["idle"]
    },
    {
        title: "3D Pinball Space Cadet",
        file:  "3dpinballspacecadet.html",
        img:   "3dpinballspacecadet.webp",
        tags:  ["idle"]
    },
    {
        title: "30 Dollar Haircut",
        file:  "30dollarhaircut.html",
        img:   "30dollarhaircut.webp",
        tags:  ["idle"]
    },
    {
        title: "64 in 1",
        file:  "64in1.html",
        img:   "64in1.webp",
        tags:  ["idle"]
    },

    // ── PLATFORMER ───────────────────────────────────────────
    {
        title: "3Dash",
        file:  "3dashy.html",
        img:   "3dashy.webp",
        tags:  ["platformer"]
    },
    {
        title: "3 Pandas",
        file:  "3pandas.html",
        img:   "3pandas.webp",
        tags:  ["platformer", "puzzle"]
    },
    {
        title: "3 Pandas Night",
        file:  "3pandasnight.html",
        img:   "3pandasnight.webp",
        tags:  ["platformer", "puzzle"]
    },
    {
        title: "3 Pandas Brazil",
        file:  "3pandasbrazil.html",
        img:   "3pandasbrazil.webp",
        tags:  ["platformer", "puzzle"]
    },
    {
        title: "3 Pandas Fantasy",
        file:  "3pandasfantasy.html",
        img:   "3pandasfantasy.webp",
        tags:  ["platformer", "puzzle"]
    },
    {
        title: "3 Pandas Japan",
        file:  "3pandasjapan.html",
        img:   "3pandasjapan.webp",
        tags:  ["platformer", "puzzle"]
    },
    {
        title: "60 Seconds Burger Run",
        file:  "60secondsburgerrun.html",
        img:   "60secondsburgerrun.webp",
        tags:  ["platformer", "action"]
    },
    {
        title: "60 Seconds Santa Run",
        file:  "santarun.html",
        img:   "santarun.webp",
        tags:  ["platformer", "action"]
    },

    // ── RPG ──────────────────────────────────────────────────
    // (No RPG titles were present in this list batch)

    // ── SANDBOX ──────────────────────────────────────────────
    // (No sandbox titles were present in this list batch)

    // ── MULTIPLAYER ──────────────────────────────────────────
    {
        title: "12 Mini Battles",
        file:  "12minibattles.html",
        img:   "12minibattles.webp",
        tags:  ["multiplayer", "action"]
    },
    {
        title: "10-103 Null Kevin",
        file:  "nullkevin.html",
        img:   "nullkevin.webp",
        tags:  ["multiplayer", "action"]
    },
    {
        title: "2-3-4 Player Games",
        file:  "234playergame.html",
        img:   "234playergame.webp",
        tags:  ["multiplayer"]
    },

    // ── IO ────────────────────────────────────────────────────
    {
        title: "1v1.lol",
        file:  "1v1lol.html",
        img:   "1v1lol.webp", 
        tags:  ["io", "multiplayer", "action"]
    },
    
    // ADD MORE GAMES BELOW THIS LINE ──────────────────────────
    // {
    //     title: "My New Game",
    //     file:  "mynewgame.html",
    //     img:   "mynewgame.png",
    //     tags:  ["action"]
    // },

];


// =============================================================
//  GAME PAGE TEMPLATE
//  Save as /gamefiles/GAMENAME.html
//  Replace the src URL with your actual game embed URL.
// =============================================================
//
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>GAME TITLE</title>
//     <style>
//         * { margin: 0; padding: 0; box-sizing: border-box; }
//         body { background: #000; display: flex; flex-direction: column; height: 100vh; font-family: sans-serif; }
//         header { background: #111; color: #fff; padding: 8px 16px; display: flex; align-items: center; gap: 12px; }
//         header a { color: #f5a623; text-decoration: none; font-size: 13px; }
//         iframe { flex: 1; border: none; width: 100%; }
//     </style>
// </head>
// <body>
//     <header>
//         <a href="/">← Back</a>
//         <span>GAME TITLE</span>
//     </header>
//     <iframe src="PASTE_GAME_URL_HERE" allowfullscreen></iframe>
// </body>
// </html>
