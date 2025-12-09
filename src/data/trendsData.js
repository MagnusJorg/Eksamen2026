// src/data/trendsData.js

// 1. Vi importerer alle dine .webp billeder fra mappen
import labubuImg from '../assets/trendbillede/labubu.webp';
import clashImg from '../assets/trendbillede/clashroyale.webp';
import brainrotImg from '../assets/trendbillede/brainrot.webp';
import fidgetImg from '../assets/trendbillede/fidgetcube.webp';
import slimeImg from '../assets/trendbillede/slime.webp';
import s67Img from '../assets/trendbillede/67.webp';
import soapImg from '../assets/trendbillede/soapcutting.webp';
import mrbeastImg from '../assets/trendbillede/mrbeast.webp';
import chillguyImg from '../assets/trendbillede/chillguy.webp';
import demonhuntersImg from '../assets/trendbillede/demonhunters.webp';
import squidgameImg from '../assets/trendbillede/squidgame.webp';

export const trendsData = [
  // ==============================================================================
  // KATEGORI: ETABLERET (>70%)
  // ==============================================================================
  {
    id: 1,
    titel: "Labubu",
    beskrivelse: "Gået viralt på TikTok pga. unboxing-videoer.",
    kendskabsgrad: 92,
    tags: ["Plys", "Nøgleringe", "8-12 år"],
    billede: labubuImg,
    billeder: [labubuImg, labubuImg, labubuImg],
    nordiskStatus: [
        "Er totalt udsolgt i de fleste danske hobbybutikker.",
        "Særligt populær blandt piger i alderen 10-14 år.",
        "Der ses en stigning i bytte-grupper på Facebook."
    ],

    grafData: [
      { navn: 'Jan', Danmark: { '6-7 år': 2, '8-10 år': 5, '11-12 år': 3, 'Drenge': 2, 'Piger': 8 }, Norge: { '6-7 år': 1, '8-10 år': 3, '11-12 år': 2, 'Drenge': 1, 'Piger': 5 }, Sverige: { '6-7 år': 3, '8-10 år': 6, '11-12 år': 4, 'Drenge': 3, 'Piger': 10 }, Finland: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 1, 'Drenge': 0, 'Piger': 3 } },
      { navn: 'Feb', Danmark: { '6-7 år': 5, '8-10 år': 12, '11-12 år': 8, 'Drenge': 5, 'Piger': 20 }, Norge: { '6-7 år': 3, '8-10 år': 8, '11-12 år': 5, 'Drenge': 3, 'Piger': 13 }, Sverige: { '6-7 år': 6, '8-10 år': 15, '11-12 år': 10, 'Drenge': 6, 'Piger': 25 }, Finland: { '6-7 år': 1, '8-10 år': 5, '11-12 år': 3, 'Drenge': 2, 'Piger': 7 } },
      { navn: 'Mar', Danmark: { '6-7 år': 10, '8-10 år': 25, '11-12 år': 15, 'Drenge': 10, 'Piger': 40 }, Norge: { '6-7 år': 8, '8-10 år': 20, '11-12 år': 12, 'Drenge': 8, 'Piger': 32 }, Sverige: { '6-7 år': 12, '8-10 år': 30, '11-12 år': 18, 'Drenge': 15, 'Piger': 45 }, Finland: { '6-7 år': 5, '8-10 år': 10, '11-12 år': 8, 'Drenge': 5, 'Piger': 18 } },
      { navn: 'Apr', Danmark: { '6-7 år': 15, '8-10 år': 40, '11-12 år': 25, 'Drenge': 15, 'Piger': 65 }, Norge: { '6-7 år': 12, '8-10 år': 35, '11-12 år': 20, 'Drenge': 12, 'Piger': 55 }, Sverige: { '6-7 år': 18, '8-10 år': 45, '11-12 år': 30, 'Drenge': 20, 'Piger': 73 }, Finland: { '6-7 år': 8, '8-10 år': 20, '11-12 år': 15, 'Drenge': 8, 'Piger': 35 } },
      { navn: 'Maj', Danmark: { '6-7 år': 20, '8-10 år': 60, '11-12 år': 40, 'Drenge': 25, 'Piger': 95 }, Norge: { '6-7 år': 18, '8-10 år': 50, '11-12 år': 35, 'Drenge': 20, 'Piger': 83 }, Sverige: { '6-7 år': 22, '8-10 år': 65, '11-12 år': 45, 'Drenge': 30, 'Piger': 102 }, Finland: { '6-7 år': 12, '8-10 år': 30, '11-12 år': 20, 'Drenge': 10, 'Piger': 52 } },
      { navn: 'Jun', Danmark: { '6-7 år': 25, '8-10 år': 70, '11-12 år': 50, 'Drenge': 30, 'Piger': 115 }, Norge: { '6-7 år': 20, '8-10 år': 60, '11-12 år': 40, 'Drenge': 25, 'Piger': 95 }, Sverige: { '6-7 år': 28, '8-10 år': 75, '11-12 år': 55, 'Drenge': 35, 'Piger': 123 }, Finland: { '6-7 år': 15, '8-10 år': 40, '11-12 år': 25, 'Drenge': 15, 'Piger': 65 } },
    ]
  },
  {
    id: 2,
    titel: "Clash Royale",
    beskrivelse: "Gået viralt på Twitch pga. Influencer.",
    kendskabsgrad: 88,
    tags: ["Gaming", "iPad", "10-12 år"],
    billede: clashImg,
    billeder: [clashImg, clashImg, clashImg],
    nordiskStatus: [
        "Spillet oplever en renæssance i skolegårdene.",
        "Store turneringer afholdes online i Sverige.",
        "Drenge 10-12 år er den primære målgruppe."
    ],

    grafData: [
      { navn: 'Jan', Danmark: { '6-7 år': 5, '8-10 år': 30, '11-12 år': 40, 'Drenge': 60, 'Piger': 15 }, Norge: { '6-7 år': 2, '8-10 år': 25, '11-12 år': 35, 'Drenge': 50, 'Piger': 12 }, Sverige: { '6-7 år': 6, '8-10 år': 35, '11-12 år': 45, 'Drenge': 70, 'Piger': 16 }, Finland: { '6-7 år': 3, '8-10 år': 20, '11-12 år': 30, 'Drenge': 40, 'Piger': 13 } },
      { navn: 'Feb', Danmark: { '6-7 år': 5, '8-10 år': 32, '11-12 år': 42, 'Drenge': 65, 'Piger': 14 }, Norge: { '6-7 år': 3, '8-10 år': 28, '11-12 år': 38, 'Drenge': 55, 'Piger': 14 }, Sverige: { '6-7 år': 7, '8-10 år': 38, '11-12 år': 48, 'Drenge': 75, 'Piger': 18 }, Finland: { '6-7 år': 4, '8-10 år': 22, '11-12 år': 32, 'Drenge': 45, 'Piger': 13 } },
      { navn: 'Mar', Danmark: { '6-7 år': 6, '8-10 år': 35, '11-12 år': 45, 'Drenge': 70, 'Piger': 16 }, Norge: { '6-7 år': 4, '8-10 år': 30, '11-12 år': 40, 'Drenge': 60, 'Piger': 14 }, Sverige: { '6-7 år': 8, '8-10 år': 40, '11-12 år': 50, 'Drenge': 80, 'Piger': 18 }, Finland: { '6-7 år': 5, '8-10 år': 25, '11-12 år': 35, 'Drenge': 50, 'Piger': 15 } },
      { navn: 'Apr', Danmark: { '6-7 år': 6, '8-10 år': 38, '11-12 år': 48, 'Drenge': 75, 'Piger': 17 }, Norge: { '6-7 år': 5, '8-10 år': 32, '11-12 år': 42, 'Drenge': 65, 'Piger': 14 }, Sverige: { '6-7 år': 9, '8-10 år': 42, '11-12 år': 52, 'Drenge': 85, 'Piger': 18 }, Finland: { '6-7 år': 5, '8-10 år': 28, '11-12 år': 38, 'Drenge': 55, 'Piger': 16 } },
      { navn: 'Maj', Danmark: { '6-7 år': 7, '8-10 år': 40, '11-12 år': 50, 'Drenge': 80, 'Piger': 17 }, Norge: { '6-7 år': 6, '8-10 år': 35, '11-12 år': 45, 'Drenge': 70, 'Piger': 16 }, Sverige: { '6-7 år': 10, '8-10 år': 45, '11-12 år': 55, 'Drenge': 90, 'Piger': 20 }, Finland: { '6-7 år': 6, '8-10 år': 30, '11-12 år': 40, 'Drenge': 60, 'Piger': 16 } },
      { navn: 'Jun', Danmark: { '6-7 år': 8, '8-10 år': 42, '11-12 år': 52, 'Drenge': 85, 'Piger': 17 }, Norge: { '6-7 år': 7, '8-10 år': 38, '11-12 år': 48, 'Drenge': 75, 'Piger': 18 }, Sverige: { '6-7 år': 12, '8-10 år': 48, '11-12 år': 58, 'Drenge': 95, 'Piger': 23 }, Finland: { '6-7 år': 7, '8-10 år': 32, '11-12 år': 42, 'Drenge': 65, 'Piger': 16 } },
    ]
  },
  {
    id: 3,
    titel: "Brainrot",
    beskrivelse: "Startede på TikTok, nu på Roblox.",
    kendskabsgrad: 74,
    tags: ["Roblox", "YouTube", "Meme"],
    billede: brainrotImg,
    billeder: [brainrotImg, brainrotImg, brainrotImg],
    nordiskStatus: [
        "Sprog og slang spreder sig hurtigt i skolegårdene.",
        "Mange forældre i Norden forstår ikke begreberne.",
        "Roblox er den primære drivkraft for udbredelsen."
    ],

    grafData: [
      { navn: 'Jan', Danmark: { '6-7 år': 10, '8-10 år': 20, '11-12 år': 30, 'Drenge': 35, 'Piger': 25 }, Norge: { '6-7 år': 8, '8-10 år': 18, '11-12 år': 28, 'Drenge': 30, 'Piger': 24 }, Sverige: { '6-7 år': 12, '8-10 år': 22, '11-12 år': 32, 'Drenge': 38, 'Piger': 28 }, Finland: { '6-7 år': 5, '8-10 år': 15, '11-12 år': 25, 'Drenge': 25, 'Piger': 20 } },
      { navn: 'Feb', Danmark: { '6-7 år': 12, '8-10 år': 25, '11-12 år': 35, 'Drenge': 40, 'Piger': 32 }, Norge: { '6-7 år': 10, '8-10 år': 22, '11-12 år': 32, 'Drenge': 35, 'Piger': 29 }, Sverige: { '6-7 år': 15, '8-10 år': 28, '11-12 år': 38, 'Drenge': 45, 'Piger': 36 }, Finland: { '6-7 år': 8, '8-10 år': 18, '11-12 år': 28, 'Drenge': 30, 'Piger': 24 } },
      { navn: 'Mar', Danmark: { '6-7 år': 15, '8-10 år': 35, '11-12 år': 45, 'Drenge': 50, 'Piger': 45 }, Norge: { '6-7 år': 12, '8-10 år': 30, '11-12 år': 40, 'Drenge': 45, 'Piger': 37 }, Sverige: { '6-7 år': 18, '8-10 år': 38, '11-12 år': 48, 'Drenge': 55, 'Piger': 49 }, Finland: { '6-7 år': 10, '8-10 år': 25, '11-12 år': 35, 'Drenge': 35, 'Piger': 35 } },
      { navn: 'Apr', Danmark: { '6-7 år': 20, '8-10 år': 45, '11-12 år': 55, 'Drenge': 65, 'Piger': 55 }, Norge: { '6-7 år': 15, '8-10 år': 40, '11-12 år': 50, 'Drenge': 55, 'Piger': 50 }, Sverige: { '6-7 år': 22, '8-10 år': 50, '11-12 år': 60, 'Drenge': 70, 'Piger': 62 }, Finland: { '6-7 år': 12, '8-10 år': 35, '11-12 år': 45, 'Drenge': 45, 'Piger': 47 } },
      { navn: 'Maj', Danmark: { '6-7 år': 25, '8-10 år': 55, '11-12 år': 65, 'Drenge': 75, 'Piger': 70 }, Norge: { '6-7 år': 20, '8-10 år': 50, '11-12 år': 60, 'Drenge': 65, 'Piger': 65 }, Sverige: { '6-7 år': 28, '8-10 år': 60, '11-12 år': 70, 'Drenge': 80, 'Piger': 78 }, Finland: { '6-7 år': 18, '8-10 år': 45, '11-12 år': 55, 'Drenge': 60, 'Piger': 58 } },
      { navn: 'Jun', Danmark: { '6-7 år': 30, '8-10 år': 65, '11-12 år': 75, 'Drenge': 85, 'Piger': 85 }, Norge: { '6-7 år': 25, '8-10 år': 60, '11-12 år': 70, 'Drenge': 75, 'Piger': 80 }, Sverige: { '6-7 år': 35, '8-10 år': 70, '11-12 år': 80, 'Drenge': 95, 'Piger': 90 }, Finland: { '6-7 år': 22, '8-10 år': 55, '11-12 år': 65, 'Drenge': 70, 'Piger': 72 } },
    ]
  },
  {
    id: 4,
    titel: "Fidget cube",
    beskrivelse: "En ny del af Fidget trenden.",
    kendskabsgrad: 72,
    tags: ["Gaming", "iPad", "10-12 år"],
    billede: fidgetImg,
    billeder: [fidgetImg, fidgetImg, fidgetImg],
    nordiskStatus: [
        "Bruges ofte i skolerne som koncentrationsmiddel.",
        "Særligt populær i Finland.",
        "Ny version med bluetooth vinder frem."
    ],
    grafData: [
      { navn: 'Jan', Danmark: { '6-7 år': 10, '8-10 år': 25, '11-12 år': 20, 'Drenge': 30, 'Piger': 25 }, Norge: { '6-7 år': 8, '8-10 år': 20, '11-12 år': 18, 'Drenge': 25, 'Piger': 21 }, Sverige: { '6-7 år': 12, '8-10 år': 28, '11-12 år': 22, 'Drenge': 32, 'Piger': 30 }, Finland: { '6-7 år': 15, '8-10 år': 35, '11-12 år': 30, 'Drenge': 40, 'Piger': 40 } },
      { navn: 'Feb', Danmark: { '6-7 år': 12, '8-10 år': 28, '11-12 år': 22, 'Drenge': 32, 'Piger': 30 }, Norge: { '6-7 år': 10, '8-10 år': 22, '11-12 år': 20, 'Drenge': 28, 'Piger': 24 }, Sverige: { '6-7 år': 14, '8-10 år': 30, '11-12 år': 25, 'Drenge': 35, 'Piger': 34 }, Finland: { '6-7 år': 18, '8-10 år': 38, '11-12 år': 32, 'Drenge': 45, 'Piger': 43 } },
      { navn: 'Mar', Danmark: { '6-7 år': 15, '8-10 år': 30, '11-12 år': 25, 'Drenge': 35, 'Piger': 35 }, Norge: { '6-7 år': 12, '8-10 år': 25, '11-12 år': 22, 'Drenge': 30, 'Piger': 29 }, Sverige: { '6-7 år': 16, '8-10 år': 32, '11-12 år': 28, 'Drenge': 38, 'Piger': 38 }, Finland: { '6-7 år': 20, '8-10 år': 40, '11-12 år': 35, 'Drenge': 48, 'Piger': 47 } },
      { navn: 'Apr', Danmark: { '6-7 år': 18, '8-10 år': 32, '11-12 år': 28, 'Drenge': 38, 'Piger': 40 }, Norge: { '6-7 år': 14, '8-10 år': 28, '11-12 år': 25, 'Drenge': 32, 'Piger': 35 }, Sverige: { '6-7 år': 20, '8-10 år': 35, '11-12 år': 30, 'Drenge': 42, 'Piger': 43 }, Finland: { '6-7 år': 22, '8-10 år': 42, '11-12 år': 38, 'Drenge': 50, 'Piger': 52 } },
      { navn: 'Maj', Danmark: { '6-7 år': 20, '8-10 år': 35, '11-12 år': 30, 'Drenge': 40, 'Piger': 45 }, Norge: { '6-7 år': 16, '8-10 år': 30, '11-12 år': 28, 'Drenge': 35, 'Piger': 39 }, Sverige: { '6-7 år': 22, '8-10 år': 38, '11-12 år': 32, 'Drenge': 45, 'Piger': 47 }, Finland: { '6-7 år': 25, '8-10 år': 45, '11-12 år': 40, 'Drenge': 55, 'Piger': 55 } },
      { navn: 'Jun', Danmark: { '6-7 år': 22, '8-10 år': 38, '11-12 år': 32, 'Drenge': 42, 'Piger': 50 }, Norge: { '6-7 år': 18, '8-10 år': 32, '11-12 år': 30, 'Drenge': 38, 'Piger': 42 }, Sverige: { '6-7 år': 25, '8-10 år': 40, '11-12 år': 35, 'Drenge': 48, 'Piger': 52 }, Finland: { '6-7 år': 28, '8-10 år': 48, '11-12 år': 42, 'Drenge': 60, 'Piger': 58 } },
    ]
  },
  {
    id: 5,
    titel: "Slime",
    beskrivelse: "En ny del af Fidget trenden.",
    kendskabsgrad: 70,
    tags: ["ASMR", "DIY", "TikTok"],
    billede: slimeImg,
    billeder: [slimeImg, slimeImg, slimeImg],
    nordiskStatus: [
        "Slime er en klassiker der altid vender tilbage.",
        "Nye opskrifter med glimmer trender.",
        "Store DIY-communities i Sverige."
    ],

    grafData: [
      { navn: 'Jan', Danmark: { '6-7 år': 30, '8-10 år': 40, '11-12 år': 20, 'Drenge': 20, 'Piger': 70 }, Norge: { '6-7 år': 25, '8-10 år': 35, '11-12 år': 15, 'Drenge': 15, 'Piger': 60 }, Sverige: { '6-7 år': 35, '8-10 år': 45, '11-12 år': 25, 'Drenge': 25, 'Piger': 80 }, Finland: { '6-7 år': 20, '8-10 år': 30, '11-12 år': 10, 'Drenge': 10, 'Piger': 50 } },
      { navn: 'Feb', Danmark: { '6-7 år': 32, '8-10 år': 42, '11-12 år': 22, 'Drenge': 22, 'Piger': 74 }, Norge: { '6-7 år': 28, '8-10 år': 38, '11-12 år': 18, 'Drenge': 18, 'Piger': 66 }, Sverige: { '6-7 år': 38, '8-10 år': 48, '11-12 år': 28, 'Drenge': 28, 'Piger': 86 }, Finland: { '6-7 år': 22, '8-10 år': 32, '11-12 år': 12, 'Drenge': 12, 'Piger': 54 } },
      { navn: 'Mar', Danmark: { '6-7 år': 35, '8-10 år': 45, '11-12 år': 25, 'Drenge': 25, 'Piger': 80 }, Norge: { '6-7 år': 30, '8-10 år': 40, '11-12 år': 20, 'Drenge': 20, 'Piger': 70 }, Sverige: { '6-7 år': 40, '8-10 år': 50, '11-12 år': 30, 'Drenge': 30, 'Piger': 90 }, Finland: { '6-7 år': 25, '8-10 år': 35, '11-12 år': 15, 'Drenge': 15, 'Piger': 60 } },
      { navn: 'Apr', Danmark: { '6-7 år': 38, '8-10 år': 48, '11-12 år': 28, 'Drenge': 28, 'Piger': 86 }, Norge: { '6-7 år': 32, '8-10 år': 42, '11-12 år': 22, 'Drenge': 22, 'Piger': 74 }, Sverige: { '6-7 år': 42, '8-10 år': 52, '11-12 år': 32, 'Drenge': 32, 'Piger': 94 }, Finland: { '6-7 år': 28, '8-10 år': 38, '11-12 år': 18, 'Drenge': 18, 'Piger': 66 } },
      { navn: 'Maj', Danmark: { '6-7 år': 40, '8-10 år': 50, '11-12 år': 30, 'Drenge': 30, 'Piger': 90 }, Norge: { '6-7 år': 35, '8-10 år': 45, '11-12 år': 25, 'Drenge': 25, 'Piger': 80 }, Sverige: { '6-7 år': 45, '8-10 år': 55, '11-12 år': 35, 'Drenge': 35, 'Piger': 100 }, Finland: { '6-7 år': 30, '8-10 år': 40, '11-12 år': 20, 'Drenge': 20, 'Piger': 70 } },
      { navn: 'Jun', Danmark: { '6-7 år': 42, '8-10 år': 52, '11-12 år': 32, 'Drenge': 32, 'Piger': 94 }, Norge: { '6-7 år': 38, '8-10 år': 48, '11-12 år': 28, 'Drenge': 28, 'Piger': 86 }, Sverige: { '6-7 år': 48, '8-10 år': 58, '11-12 år': 38, 'Drenge': 38, 'Piger': 106 }, Finland: { '6-7 år': 32, '8-10 år': 42, '11-12 år': 22, 'Drenge': 22, 'Piger': 74 } },
    ]
  },

  // ==============================================================================
  // KATEGORI: VÆKST (25-70%)
  // ==============================================================================
  {
    id: 6,
    titel: "67",
    beskrivelse: "Viral fællesskabs råben.",
    kendskabsgrad: 65,
    tags: ["Memes", "Brainrot", "5-12 år"],
    billede: s67Img,
    billeder: [s67Img, s67Img, s67Img],
    nordiskStatus: [
        "En lyd der går viralt på TikTok.",
        "Bruges som en 'inside joke' blandt venner.",
        "Mest udbredt blandt drenge."
    ],

    grafData: [
      { navn: 'Jan', Danmark: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 2, 'Drenge': 2, 'Piger': 1 }, Norge: { '6-7 år': 0, '8-10 år': 0, '11-12 år': 1, 'Drenge': 1, 'Piger': 0 }, Sverige: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 3, 'Drenge': 4, 'Piger': 1 }, Finland: { '6-7 år': 0, '8-10 år': 0, '11-12 år': 0, 'Drenge': 0, 'Piger': 0 } },
      { navn: 'Feb', Danmark: { '6-7 år': 1, '8-10 år': 5, '11-12 år': 8, 'Drenge': 10, 'Piger': 4 }, Norge: { '6-7 år': 0, '8-10 år': 3, '11-12 år': 5, 'Drenge': 6, 'Piger': 2 }, Sverige: { '6-7 år': 2, '8-10 år': 8, '11-12 år': 12, 'Drenge': 15, 'Piger': 7 }, Finland: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 2, 'Drenge': 2, 'Piger': 1 } },
      { navn: 'Mar', Danmark: { '6-7 år': 5, '8-10 år': 15, '11-12 år': 25, 'Drenge': 30, 'Piger': 15 }, Norge: { '6-7 år': 3, '8-10 år': 10, '11-12 år': 18, 'Drenge': 20, 'Piger': 11 }, Sverige: { '6-7 år': 8, '8-10 år': 20, '11-12 år': 30, 'Drenge': 40, 'Piger': 18 }, Finland: { '6-7 år': 2, '8-10 år': 5, '11-12 år': 10, 'Drenge': 12, 'Piger': 5 } },
      { navn: 'Apr', Danmark: { '6-7 år': 10, '8-10 år': 30, '11-12 år': 45, 'Drenge': 55, 'Piger': 30 }, Norge: { '6-7 år': 8, '8-10 år': 25, '11-12 år': 35, 'Drenge': 45, 'Piger': 23 }, Sverige: { '6-7 år': 15, '8-10 år': 40, '11-12 år': 55, 'Drenge': 70, 'Piger': 40 }, Finland: { '6-7 år': 5, '8-10 år': 15, '11-12 år': 25, 'Drenge': 30, 'Piger': 15 } },
      { navn: 'Maj', Danmark: { '6-7 år': 15, '8-10 år': 45, '11-12 år': 65, 'Drenge': 80, 'Piger': 45 }, Norge: { '6-7 år': 12, '8-10 år': 35, '11-12 år': 50, 'Drenge': 65, 'Piger': 32 }, Sverige: { '6-7 år': 20, '8-10 år': 55, '11-12 år': 75, 'Drenge': 95, 'Piger': 55 }, Finland: { '6-7 år': 10, '8-10 år': 25, '11-12 år': 40, 'Drenge': 50, 'Piger': 25 } },
      { navn: 'Jun', Danmark: { '6-7 år': 20, '8-10 år': 55, '11-12 år': 75, 'Drenge': 95, 'Piger': 55 }, Norge: { '6-7 år': 15, '8-10 år': 45, '11-12 år': 60, 'Drenge': 80, 'Piger': 40 }, Sverige: { '6-7 år': 25, '8-10 år': 65, '11-12 år': 85, 'Drenge': 110, 'Piger': 65 }, Finland: { '6-7 år': 12, '8-10 år': 35, '11-12 år': 50, 'Drenge': 65, 'Piger': 32 } },
    ]
  },
  {
    id: 7,
    titel: "Soap cutting",
    beskrivelse: "TikTok og Instagram viral ASMR trend.",
    kendskabsgrad: 56,
    tags: ["ASMR", "DIY", "5-12 år"],
    billede: soapImg,
    billeder: [soapImg, soapImg, soapImg],
    nordiskStatus: [
        "Folk elsker lyden af sæbe der skæres.",
        "Mange laver deres egne videoer.",
        "Afslappende indhold til pauser."
    ],

    grafData: [
      { navn: 'Jan', Danmark: { '6-7 år': 15, '8-10 år': 25, '11-12 år': 15, 'Drenge': 10, 'Piger': 45 }, Norge: { '6-7 år': 12, '8-10 år': 20, '11-12 år': 12, 'Drenge': 8, 'Piger': 36 }, Sverige: { '6-7 år': 18, '8-10 år': 30, '11-12 år': 18, 'Drenge': 12, 'Piger': 54 }, Finland: { '6-7 år': 10, '8-10 år': 15, '11-12 år': 10, 'Drenge': 5, 'Piger': 30 } },
      { navn: 'Feb', Danmark: { '6-7 år': 18, '8-10 år': 28, '11-12 år': 18, 'Drenge': 12, 'Piger': 52 }, Norge: { '6-7 år': 15, '8-10 år': 22, '11-12 år': 15, 'Drenge': 10, 'Piger': 42 }, Sverige: { '6-7 år': 22, '8-10 år': 34, '11-12 år': 22, 'Drenge': 15, 'Piger': 63 }, Finland: { '6-7 år': 12, '8-10 år': 18, '11-12 år': 12, 'Drenge': 8, 'Piger': 34 } },
      { navn: 'Mar', Danmark: { '6-7 år': 20, '8-10 år': 32, '11-12 år': 20, 'Drenge': 15, 'Piger': 57 }, Norge: { '6-7 år': 18, '8-10 år': 25, '11-12 år': 18, 'Drenge': 12, 'Piger': 49 }, Sverige: { '6-7 år': 25, '8-10 år': 38, '11-12 år': 25, 'Drenge': 18, 'Piger': 70 }, Finland: { '6-7 år': 15, '8-10 år': 22, '11-12 år': 15, 'Drenge': 10, 'Piger': 42 } },
      { navn: 'Apr', Danmark: { '6-7 år': 25, '8-10 år': 38, '11-12 år': 25, 'Drenge': 18, 'Piger': 70 }, Norge: { '6-7 år': 20, '8-10 år': 30, '11-12 år': 22, 'Drenge': 15, 'Piger': 57 }, Sverige: { '6-7 år': 30, '8-10 år': 45, '11-12 år': 30, 'Drenge': 22, 'Piger': 83 }, Finland: { '6-7 år': 18, '8-10 år': 28, '11-12 år': 18, 'Drenge': 12, 'Piger': 52 } },
      { navn: 'Maj', Danmark: { '6-7 år': 30, '8-10 år': 42, '11-12 år': 30, 'Drenge': 22, 'Piger': 80 }, Norge: { '6-7 år': 25, '8-10 år': 35, '11-12 år': 25, 'Drenge': 18, 'Piger': 67 }, Sverige: { '6-7 år': 35, '8-10 år': 50, '11-12 år': 35, 'Drenge': 25, 'Piger': 95 }, Finland: { '6-7 år': 22, '8-10 år': 32, '11-12 år': 22, 'Drenge': 15, 'Piger': 61 } },
      { navn: 'Jun', Danmark: { '6-7 år': 35, '8-10 år': 48, '11-12 år': 35, 'Drenge': 25, 'Piger': 93 }, Norge: { '6-7 år': 30, '8-10 år': 40, '11-12 år': 30, 'Drenge': 20, 'Piger': 80 }, Sverige: { '6-7 år': 40, '8-10 år': 55, '11-12 år': 40, 'Drenge': 30, 'Piger': 105 }, Finland: { '6-7 år': 25, '8-10 år': 38, '11-12 år': 25, 'Drenge': 18, 'Piger': 70 } },
    ]
  },
  {
    id: 8,
    titel: "MrBeast",
    beskrivelse: "Verdens største YouTuber laver vilde konkurrencer.",
    kendskabsgrad: 35,
    tags: ["YouTube", "10-12 år"],
    billede: mrbeastImg,
    billeder: [mrbeastImg, mrbeastImg, mrbeastImg],
    nordiskStatus: [
        "Enormt kendt brand blandt drenge.",
        "Hans chokoladebar 'Feastables' sælger godt.",
        "Store forventninger til nye videoer."
    ],

    grafData: [
      { navn: 'Jan', Danmark: { '6-7 år': 20, '8-10 år': 40, '11-12 år': 60, 'Drenge': 90, 'Piger': 30 }, Norge: { '6-7 år': 15, '8-10 år': 35, '11-12 år': 50, 'Drenge': 75, 'Piger': 25 }, Sverige: { '6-7 år': 25, '8-10 år': 45, '11-12 år': 65, 'Drenge': 100, 'Piger': 35 }, Finland: { '6-7 år': 10, '8-10 år': 25, '11-12 år': 40, 'Drenge': 50, 'Piger': 25 } },
      { navn: 'Feb', Danmark: { '6-7 år': 22, '8-10 år': 42, '11-12 år': 62, 'Drenge': 92, 'Piger': 34 }, Norge: { '6-7 år': 18, '8-10 år': 38, '11-12 år': 52, 'Drenge': 78, 'Piger': 30 }, Sverige: { '6-7 år': 28, '8-10 år': 48, '11-12 år': 68, 'Drenge': 105, 'Piger': 39 }, Finland: { '6-7 år': 12, '8-10 år': 28, '11-12 år': 42, 'Drenge': 55, 'Piger': 27 } },
      { navn: 'Mar', Danmark: { '6-7 år': 25, '8-10 år': 45, '11-12 år': 65, 'Drenge': 95, 'Piger': 40 }, Norge: { '6-7 år': 20, '8-10 år': 40, '11-12 år': 55, 'Drenge': 80, 'Piger': 35 }, Sverige: { '6-7 år': 30, '8-10 år': 50, '11-12 år': 70, 'Drenge': 110, 'Piger': 40 }, Finland: { '6-7 år': 15, '8-10 år': 30, '11-12 år': 45, 'Drenge': 60, 'Piger': 30 } },
      { navn: 'Apr', Danmark: { '6-7 år': 28, '8-10 år': 48, '11-12 år': 68, 'Drenge': 98, 'Piger': 46 }, Norge: { '6-7 år': 22, '8-10 år': 42, '11-12 år': 58, 'Drenge': 83, 'Piger': 39 }, Sverige: { '6-7 år': 32, '8-10 år': 52, '11-12 år': 72, 'Drenge': 115, 'Piger': 41 }, Finland: { '6-7 år': 18, '8-10 år': 32, '11-12 år': 48, 'Drenge': 65, 'Piger': 33 } },
      { navn: 'Maj', Danmark: { '6-7 år': 30, '8-10 år': 50, '11-12 år': 70, 'Drenge': 100, 'Piger': 50 }, Norge: { '6-7 år': 25, '8-10 år': 45, '11-12 år': 60, 'Drenge': 85, 'Piger': 45 }, Sverige: { '6-7 år': 35, '8-10 år': 55, '11-12 år': 75, 'Drenge': 120, 'Piger': 45 }, Finland: { '6-7 år': 20, '8-10 år': 35, '11-12 år': 50, 'Drenge': 70, 'Piger': 35 } },
      { navn: 'Jun', Danmark: { '6-7 år': 32, '8-10 år': 52, '11-12 år': 72, 'Drenge': 102, 'Piger': 54 }, Norge: { '6-7 år': 28, '8-10 år': 48, '11-12 år': 62, 'Drenge': 88, 'Piger': 50 }, Sverige: { '6-7 år': 38, '8-10 år': 58, '11-12 år': 78, 'Drenge': 125, 'Piger': 49 }, Finland: { '6-7 år': 22, '8-10 år': 38, '11-12 år': 52, 'Drenge': 75, 'Piger': 37 } },
    ]
  },

  // ==============================================================================
  // KATEGORI: UNDER RADAREN (<25%)
  // ==============================================================================
  {
    id: 9,
    titel: "Chill guy",
    beskrivelse: "Viral tegneseriefigur der tager alt roligt.",
    kendskabsgrad: 23,
    tags: ["DIY", "Brainrot", "12 år"],
    billede: chillguyImg,
    billeder: [chillguyImg, chillguyImg, chillguyImg],
    nordiskStatus: [
        "En ny karakter der vinder frem.",
        "Mest populær blandt de ældre børn.",
        "Bruges ofte som reaktions-billede."
    ],

    grafData: [
      { navn: 'Jan', Danmark: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 3, 'Drenge': 3, 'Piger': 1 }, Norge: { '6-7 år': 0, '8-10 år': 0, '11-12 år': 2, 'Drenge': 2, 'Piger': 0 }, Sverige: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 4, 'Drenge': 4, 'Piger': 1 }, Finland: { '6-7 år': 0, '8-10 år': 0, '11-12 år': 1, 'Drenge': 1, 'Piger': 0 } },
      { navn: 'Feb', Danmark: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 5, 'Drenge': 5, 'Piger': 2 }, Norge: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 3, 'Drenge': 3, 'Piger': 1 }, Sverige: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 6, 'Drenge': 6, 'Piger': 2 }, Finland: { '6-7 år': 0, '8-10 år': 0, '11-12 år': 2, 'Drenge': 2, 'Piger': 0 } },
      { navn: 'Mar', Danmark: { '6-7 år': 1, '8-10 år': 4, '11-12 år': 8, 'Drenge': 9, 'Piger': 4 }, Norge: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 5, 'Drenge': 5, 'Piger': 2 }, Sverige: { '6-7 år': 1, '8-10 år': 5, '11-12 år': 10, 'Drenge': 11, 'Piger': 5 }, Finland: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 3, 'Drenge': 3, 'Piger': 1 } },
      { navn: 'Apr', Danmark: { '6-7 år': 1, '8-10 år': 6, '11-12 år': 12, 'Drenge': 13, 'Piger': 6 }, Norge: { '6-7 år': 1, '8-10 år': 4, '11-12 år': 8, 'Drenge': 9, 'Piger': 4 }, Sverige: { '6-7 år': 2, '8-10 år': 8, '11-12 år': 15, 'Drenge': 18, 'Piger': 7 }, Finland: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 5, 'Drenge': 5, 'Piger': 2 } },
      { navn: 'Maj', Danmark: { '6-7 år': 2, '8-10 år': 10, '11-12 år': 18, 'Drenge': 20, 'Piger': 10 }, Norge: { '6-7 år': 1, '8-10 år': 6, '11-12 år': 12, 'Drenge': 13, 'Piger': 6 }, Sverige: { '6-7 år': 3, '8-10 år': 12, '11-12 år': 22, 'Drenge': 25, 'Piger': 12 }, Finland: { '6-7 år': 1, '8-10 år': 4, '11-12 år': 8, 'Drenge': 9, 'Piger': 4 } },
      { navn: 'Jun', Danmark: { '6-7 år': 3, '8-10 år': 15, '11-12 år': 25, 'Drenge': 30, 'Piger': 13 }, Norge: { '6-7 år': 2, '8-10 år': 10, '11-12 år': 18, 'Drenge': 20, 'Piger': 10 }, Sverige: { '6-7 år': 4, '8-10 år': 18, '11-12 år': 30, 'Drenge': 35, 'Piger': 17 }, Finland: { '6-7 år': 1, '8-10 år': 6, '11-12 år': 12, 'Drenge': 14, 'Piger': 5 } },
    ]
  },
  {
    id: 10,
    titel: "Demon hunters",
    beskrivelse: "TikTok og Instagram viral ASMR trend.",
    kendskabsgrad: 14,
    tags: ["ASMR", "DIY", "5-12 år"],
    billede: demonhuntersImg,
    billeder: [demonhuntersImg, demonhuntersImg, demonhuntersImg],
    nordiskStatus: [
        "En niche-trend for anime fans.",
        "Mange laver deres egne kostumer.",
        "Stor aktivitet på messer."
    ],

    grafData: [
      { navn: 'Jan', Danmark: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 5, 'Drenge': 3, 'Piger': 4 }, Norge: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 3, 'Drenge': 2, 'Piger': 2 }, Sverige: { '6-7 år': 0, '8-10 år': 3, '11-12 år': 8, 'Drenge': 5, 'Piger': 6 }, Finland: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 2, 'Drenge': 1, 'Piger': 2 } },
      { navn: 'Feb', Danmark: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 6, 'Drenge': 4, 'Piger': 4 }, Norge: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 3, 'Drenge': 2, 'Piger': 2 }, Sverige: { '6-7 år': 0, '8-10 år': 3, '11-12 år': 8, 'Drenge': 5, 'Piger': 6 }, Finland: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 2, 'Drenge': 1, 'Piger': 2 } },
      { navn: 'Mar', Danmark: { '6-7 år': 0, '8-10 år': 3, '11-12 år': 7, 'Drenge': 5, 'Piger': 5 }, Norge: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 4, 'Drenge': 3, 'Piger': 3 }, Sverige: { '6-7 år': 1, '8-10 år': 4, '11-12 år': 9, 'Drenge': 7, 'Piger': 7 }, Finland: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 3, 'Drenge': 2, 'Piger': 3 } },
      { navn: 'Apr', Danmark: { '6-7 år': 1, '8-10 år': 3, '11-12 år': 8, 'Drenge': 6, 'Piger': 6 }, Norge: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 5, 'Drenge': 3, 'Piger': 4 }, Sverige: { '6-7 år': 1, '8-10 år': 5, '11-12 år': 10, 'Drenge': 8, 'Piger': 8 }, Finland: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 4, 'Drenge': 3, 'Piger': 3 } },
      { navn: 'Maj', Danmark: { '6-7 år': 1, '8-10 år': 4, '11-12 år': 9, 'Drenge': 7, 'Piger': 7 }, Norge: { '6-7 år': 1, '8-10 år': 3, '11-12 år': 6, 'Drenge': 4, 'Piger': 6 }, Sverige: { '6-7 år': 2, '8-10 år': 6, '11-12 år': 12, 'Drenge': 10, 'Piger': 10 }, Finland: { '6-7 år': 1, '8-10 år': 3, '11-12 år': 5, 'Drenge': 4, 'Piger': 5 } },
      { navn: 'Jun', Danmark: { '6-7 år': 2, '8-10 år': 5, '11-12 år': 10, 'Drenge': 8, 'Piger': 9 }, Norge: { '6-7 år': 1, '8-10 år': 3, '11-12 år': 7, 'Drenge': 5, 'Piger': 6 }, Sverige: { '6-7 år': 3, '8-10 år': 7, '11-12 år': 14, 'Drenge': 12, 'Piger': 12 }, Finland: { '6-7 år': 1, '8-10 år': 4, '11-12 år': 6, 'Drenge': 5, 'Piger': 6 } },
    ]
  },
  {
    id: 11,
    titel: "Squid game",
    beskrivelse: "Ny sæson skaber fornyet interesse.",
    kendskabsgrad: 10,
    tags: ["YouTube", "10-12 år"],
    billede: squidgameImg,
    billeder: [squidgameImg, squidgameImg, squidgameImg],
    nordiskStatus: [
        "Kontroversiel serie men populær som leg.",
        "Børn leger 'Rødt lys, Grønt lys' i skolen.",
        "Ny sæson forventes at skabe hype igen."
    ],

    grafData: [
      { navn: 'Jan', Danmark: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 5, 'Drenge': 5, 'Piger': 2 }, Norge: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 3, 'Drenge': 3, 'Piger': 1 }, Sverige: { '6-7 år': 0, '8-10 år': 3, '11-12 år': 8, 'Drenge': 7, 'Piger': 4 }, Finland: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 2, 'Drenge': 2, 'Piger': 1 } },
      { navn: 'Feb', Danmark: { '6-7 år': 0, '8-10 år': 3, '11-12 år': 6, 'Drenge': 6, 'Piger': 3 }, Norge: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 4, 'Drenge': 4, 'Piger': 2 }, Sverige: { '6-7 år': 0, '8-10 år': 4, '11-12 år': 10, 'Drenge': 9, 'Piger': 5 }, Finland: { '6-7 år': 0, '8-10 år': 1, '11-12 år': 3, 'Drenge': 3, 'Piger': 1 } },
      { navn: 'Mar', Danmark: { '6-7 år': 0, '8-10 år': 4, '11-12 år': 8, 'Drenge': 8, 'Piger': 4 }, Norge: { '6-7 år': 0, '8-10 år': 3, '11-12 år': 6, 'Drenge': 6, 'Piger': 3 }, Sverige: { '6-7 år': 0, '8-10 år': 5, '11-12 år': 12, 'Drenge': 11, 'Piger': 6 }, Finland: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 4, 'Drenge': 4, 'Piger': 2 } },
      { navn: 'Apr', Danmark: { '6-7 år': 1, '8-10 år': 5, '11-12 år': 10, 'Drenge': 10, 'Piger': 6 }, Norge: { '6-7 år': 0, '8-10 år': 4, '11-12 år': 8, 'Drenge': 8, 'Piger': 4 }, Sverige: { '6-7 år': 1, '8-10 år': 7, '11-12 år': 15, 'Drenge': 14, 'Piger': 9 }, Finland: { '6-7 år': 0, '8-10 år': 3, '11-12 år': 5, 'Drenge': 5, 'Piger': 3 } },
      { navn: 'Maj', Danmark: { '6-7 år': 1, '8-10 år': 7, '11-12 år': 12, 'Drenge': 12, 'Piger': 8 }, Norge: { '6-7 år': 1, '8-10 år': 5, '11-12 år': 10, 'Drenge': 10, 'Piger': 6 }, Sverige: { '6-7 år': 2, '8-10 år': 9, '11-12 år': 18, 'Drenge': 18, 'Piger': 11 }, Finland: { '6-7 år': 0, '8-10 år': 4, '11-12 år': 7, 'Drenge': 7, 'Piger': 4 } },
      { navn: 'Jun', Danmark: { '6-7 år': 2, '8-10 år': 10, '11-12 år': 15, 'Drenge': 15, 'Piger': 12 }, Norge: { '6-7 år': 1, '8-10 år': 7, '11-12 år': 12, 'Drenge': 12, 'Piger': 8 }, Sverige: { '6-7 år': 3, '8-10 år': 12, '11-12 år': 22, 'Drenge': 22, 'Piger': 15 }, Finland: { '6-7 år': 1, '8-10 år': 5, '11-12 år': 9, 'Drenge': 9, 'Piger': 6 } },
    ]
  }
];