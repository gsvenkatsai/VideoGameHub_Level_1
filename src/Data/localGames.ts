import type { Game } from "../entities/Game";

export interface LocalGameItem extends Game {
  accentColor: string;
  tagline?: string;
  shortDescription: string;
}

export const LOCAL_GAMES: LocalGameItem[] = [
  {
    "id": 3498,
    "name": "Grand Theft Auto V",
    "slug": "grand-theft-auto-v",
    "released": "2013-09-17",
    "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    "metacritic": 92,
    "rating_top": 5,
    "description_raw": "Los Santos: a sprawling sun-soaked metropolis full of self-help gurus, starlets, and fading celebrities struggling to stay afloat in an era of economic uncertainty.",
    "shortDescription": "RECORD-BREAKING CRIME SAGA",
    "accentColor": "#F59E0B",
    "tagline": "RECORD-BREAKING CRIME SAGA",
    "publishers": [
      {
        "id": 1,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      }
    ]
  },
  {
    "id": 3328,
    "name": "The Witcher 3: Wild Hunt",
    "slug": "the-witcher-3-wild-hunt",
    "released": "2015-05-18",
    "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    "metacritic": 92,
    "rating_top": 5,
    "description_raw": "You are Geralt of Rivia, mercenary monster slayer. At your disposal is every tool of the trade: razor-sharp swords, lethal mixtures, and powerful combat magic.",
    "shortDescription": "DEFINITIVE DARK FANTASY RPG",
    "accentColor": "#3B82F6",
    "tagline": "DEFINITIVE DARK FANTASY RPG",
    "publishers": [
      {
        "id": 2,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ]
  },
  {
    "id": 4200,
    "name": "Portal 2",
    "slug": "portal-2",
    "released": "2011-04-18",
    "background_image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    "metacritic": 95,
    "rating_top": 5,
    "description_raw": "The highly acclaimed sequel introduces an expanded cast of dynamic characters, a host of fresh puzzle elements, and a much larger set of devious test chambers.",
    "shortDescription": "APERTURE SCIENCE MASTERPIECE",
    "accentColor": "#06B6D4",
    "tagline": "APERTURE SCIENCE MASTERPIECE",
    "publishers": [
      {
        "id": 3,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter"
      },
      {
        "id": 7,
        "name": "Puzzle",
        "slug": "puzzle"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ]
  },
  {
    "id": 4291,
    "name": "Counter-Strike: Global Offensive",
    "slug": "counter-strike-global-offensive",
    "released": "2012-08-21",
    "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    "metacritic": 81,
    "rating_top": 4,
    "description_raw": "Counter-Strike: Global Offensive expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago.",
    "shortDescription": "TACTICAL COMPETITIVE SHOOTER",
    "accentColor": "#22C55E",
    "tagline": "TACTICAL COMPETITIVE SHOOTER",
    "publishers": [
      {
        "id": 4,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ]
  },
  {
    "id": 13536,
    "name": "Portal",
    "slug": "portal",
    "released": "2007-10-09",
    "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    "metacritic": 90,
    "rating_top": 5,
    "description_raw": "Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon.",
    "shortDescription": "PORTAL EXPERIMENTAL CLASSIC",
    "accentColor": "#06B6D4",
    "tagline": "PORTAL EXPERIMENTAL CLASSIC",
    "publishers": [
      {
        "id": 5,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 7,
        "name": "Puzzle",
        "slug": "puzzle"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ]
  },
  {
    "id": 5286,
    "name": "Tomb Raider",
    "slug": "tomb-raider",
    "released": "2013-03-05",
    "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    "metacritic": 86,
    "rating_top": 4,
    "description_raw": "Tomb Raider explores the intense and gritty origin story of Lara Croft and her ascent from a young woman to a hardened survivor.",
    "shortDescription": "GRITTY SURVIVAL ORIGIN STORY",
    "accentColor": "#14B8A6",
    "tagline": "GRITTY SURVIVAL ORIGIN STORY",
    "publishers": [
      {
        "id": 6,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      }
    ]
  },
  {
    "id": 12020,
    "name": "Left 4 Dead 2",
    "slug": "left-4-dead-2",
    "released": "2009-11-17",
    "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    "metacritic": 89,
    "rating_top": 4,
    "description_raw": "Set in the zombie apocalypse, Left 4 Dead 2 is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op shooter.",
    "shortDescription": "FOUR-PLAYER CO-OP SLAUGHTER",
    "accentColor": "#84CC16",
    "tagline": "FOUR-PLAYER CO-OP SLAUGHTER",
    "publishers": [
      {
        "id": 7,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ]
  },
  {
    "id": 28,
    "name": "Red Dead Redemption 2",
    "slug": "red-dead-redemption-2",
    "released": "2018-10-26",
    "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    "metacritic": 96,
    "rating_top": 5,
    "description_raw": "America, 1899. Arthur Morgan and the Van der Linde gang are outlaws on the run with federal agents and the best bounty hunters massing on their heels.",
    "shortDescription": "OUTLAWS FOR LIFE ACROSS FRONTIER",
    "accentColor": "#DC2626",
    "tagline": "OUTLAWS FOR LIFE ACROSS FRONTIER",
    "publishers": [
      {
        "id": 8,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      }
    ]
  },
  {
    "id": 5679,
    "name": "The Elder Scrolls V: Skyrim",
    "slug": "the-elder-scrolls-v-skyrim",
    "released": "2011-11-11",
    "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    "metacritic": 94,
    "rating_top": 5,
    "description_raw": "EPIC FANTASY REBORN. The legendary open-world masterpiece re-imagines the fantasy epic, bringing to life an entire living virtual world.",
    "shortDescription": "IMMORTAL OPEN-WORLD FANTASY",
    "accentColor": "#A855F7",
    "tagline": "IMMORTAL OPEN-WORLD FANTASY",
    "publishers": [
      {
        "id": 9,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ]
  },
  {
    "id": 13537,
    "name": "Half-Life 2",
    "slug": "half-life-2",
    "released": "2004-11-16",
    "background_image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    "metacritic": 96,
    "rating_top": 5,
    "description_raw": "Half-Life 2 takes the suspense, challenge and visceral charge of the original, and adds startling new realism and responsiveness.",
    "shortDescription": "TIMELESS DYSTOPIAN SCI-FI",
    "accentColor": "#EAB308",
    "tagline": "TIMELESS DYSTOPIAN SCI-FI",
    "publishers": [
      {
        "id": 10,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ]
  },
  {
    "id": 4062,
    "name": "BioShock Infinite",
    "slug": "bioshock-infinite",
    "released": "2013-03-26",
    "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    "metacritic": 94,
    "rating_top": 5,
    "description_raw": "Indebted to the wrong people, former cavalry veteran Booker DeWitt has only one opportunity to wipe his slate clean: rescue Elizabeth from Columbia.",
    "shortDescription": "FLOATING CITY IN THE CLOUDS",
    "accentColor": "#F97316",
    "tagline": "FLOATING CITY IN THE CLOUDS",
    "publishers": [
      {
        "id": 11,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ]
  },
  {
    "id": 802,
    "name": "Borderlands 2",
    "slug": "borderlands-2",
    "released": "2012-09-18",
    "background_image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    "metacritic": 89,
    "rating_top": 4,
    "description_raw": "Play as one of four new vault hunters facing off against a massive new world of creatures, psychos and the evil mastermind, Handsome Jack.",
    "shortDescription": "SHOOT AND LOOT MAYHEM",
    "accentColor": "#EC4899",
    "tagline": "SHOOT AND LOOT MAYHEM",
    "publishers": [
      {
        "id": 12,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter"
      },
      {
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ]
  },
  {
    "id": 3439,
    "name": "Life is Strange",
    "slug": "life-is-strange-episode-1-2",
    "released": "2015-01-29",
    "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    "metacritic": 83,
    "rating_top": 5,
    "description_raw": "Life is Strange is an award-winning five-part episodic game that sets out to revolutionise story-based choice and consequences in gaming.",
    "shortDescription": "TIME REWIND MYSTERY",
    "accentColor": "#8B5CF6",
    "tagline": "TIME REWIND MYSTERY",
    "publishers": [
      {
        "id": 13,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 4,
          "name": "iOS",
          "slug": "ios"
        }
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ]
  },
  {
    "id": 4286,
    "name": "BioShock",
    "slug": "bioshock",
    "released": "2007-08-21",
    "background_image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    "metacritic": 96,
    "rating_top": 5,
    "description_raw": "BioShock is a shooter unlike any you have ever played, loaded with weapons and tactics never seen. Explore the sunken city of Rapture.",
    "shortDescription": "UNDERWATER DYSTOPIA OF RAPTURE",
    "accentColor": "#10B981",
    "tagline": "UNDERWATER DYSTOPIA OF RAPTURE",
    "publishers": [
      {
        "id": 14,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      }
    ]
  },
  {
    "id": 58175,
    "name": "God of War (2018)",
    "slug": "god-of-war-2",
    "released": "2018-04-20",
    "background_image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    "metacritic": 94,
    "rating_top": 5,
    "description_raw": "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters, mentoring his son Atreus.",
    "shortDescription": "BRUTAL NORSE MYTHOLOGY SAGA",
    "accentColor": "#EF4444",
    "tagline": "BRUTAL NORSE MYTHOLOGY SAGA",
    "publishers": [
      {
        "id": 15,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      }
    ]
  },
  {
    "id": 32,
    "name": "Destiny 2",
    "slug": "destiny-2",
    "released": "2017-09-06",
    "background_image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    "metacritic": 82,
    "rating_top": 4,
    "description_raw": "Dive into the world of Destiny 2 to explore the mysteries of the solar system and experience responsive first-person shooter combat.",
    "shortDescription": "SOLAR SYSTEM SCI-FI ODYSSEY",
    "accentColor": "#6366F1",
    "tagline": "SOLAR SYSTEM SCI-FI ODYSSEY",
    "publishers": [
      {
        "id": 16,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 14,
          "name": "Web",
          "slug": "web"
        }
      }
    ]
  },
  {
    "id": 3070,
    "name": "Fallout 4",
    "slug": "fallout-4",
    "released": "2015-11-09",
    "background_image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    "metacritic": 84,
    "rating_top": 4,
    "description_raw": "As the sole survivor of Vault 111, you enter a world destroyed by nuclear war. Every second is a fight for survival, and every choice is yours.",
    "shortDescription": "POST-NUCLEAR WASTELAND",
    "accentColor": "#D97706",
    "tagline": "POST-NUCLEAR WASTELAND",
    "publishers": [
      {
        "id": 17,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      }
    ]
  },
  {
    "id": 1030,
    "name": "Limbo",
    "slug": "limbo",
    "released": "2010-07-21",
    "background_image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    "metacritic": 88,
    "rating_top": 4,
    "description_raw": "Uncertain of his sister fate, a boy enters LIMBO. An atmospheric, monochrome puzzle platforming masterpiece.",
    "shortDescription": "ATMOSPHERIC MONOCHROME PUZZLE",
    "accentColor": "#71717A",
    "tagline": "ATMOSPHERIC MONOCHROME PUZZLE",
    "publishers": [
      {
        "id": 18,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure"
      },
      {
        "id": 51,
        "name": "Indie",
        "slug": "indie"
      },
      {
        "id": 7,
        "name": "Puzzle",
        "slug": "puzzle"
      },
      {
        "id": 83,
        "name": "Platformer",
        "slug": "platformer"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 4,
          "name": "iOS",
          "slug": "ios"
        }
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ]
  },
  {
    "id": 3939,
    "name": "PAYDAY 2",
    "slug": "payday-2",
    "released": "2013-08-13",
    "background_image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    "metacritic": 79,
    "rating_top": 4,
    "description_raw": "PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew.",
    "shortDescription": "COOPERATIVE CRIME HEISTS",
    "accentColor": "#3B82F6",
    "tagline": "COOPERATIVE CRIME HEISTS",
    "publishers": [
      {
        "id": 19,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ]
  },
  {
    "id": 2454,
    "name": "DOOM (2016)",
    "slug": "doom",
    "released": "2016-05-12",
    "background_image": "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg",
    "metacritic": 85,
    "rating_top": 5,
    "description_raw": "Developed by id Software, DOOM returns as a brutally fun and challenging modern-day shooter experience with relentless demons and impossible guns.",
    "shortDescription": "RELENTLESS DEMON COMBAT",
    "accentColor": "#EF4444",
    "tagline": "RELENTLESS DEMON COMBAT",
    "publishers": [
      {
        "id": 20,
        "name": "Verified Archive Publisher"
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter"
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ]
  }
];
