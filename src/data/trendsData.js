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
  // --- ETABLERET (>70%) ---
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
    dataOverblik: [
      { label: "Popularitet", value: "Høj" },
      { label: "Vækst (YoY)", value: "+120%" },
      { label: "Primær Platform", value: "TikTok" },
      { label: "Målgruppe", value: "Gen Z" }
    ],
    // DATA FOR ALLE MÅNEDER MED NYE ALDRE OG KØN
    grafData: [
      { 
        navn: 'Jan', 
        Danmark: { '6-7 år': 2, '8-10 år': 5, '11-12 år': 3, 'Drenge': 2, 'Piger': 8 },
        Norge:   { '6-7 år': 1, '8-10 år': 3, '11-12 år': 2, 'Drenge': 1, 'Piger': 5 },
        Sverige: { '6-7 år': 3, '8-10 år': 6, '11-12 år': 4, 'Drenge': 3, 'Piger': 10 },
        Finland: { '6-7 år': 0, '8-10 år': 2, '11-12 år': 1, 'Drenge': 0, 'Piger': 3 }
      },
      { 
        navn: 'Feb', 
        Danmark: { '6-7 år': 5, '8-10 år': 12, '11-12 år': 8, 'Drenge': 5, 'Piger': 20 },
        Norge:   { '6-7 år': 3, '8-10 år': 8,  '11-12 år': 5, 'Drenge': 3, 'Piger': 13 },
        Sverige: { '6-7 år': 6, '8-10 år': 15, '11-12 år': 10, 'Drenge': 6, 'Piger': 25 },
        Finland: { '6-7 år': 1, '8-10 år': 5,  '11-12 år': 3, 'Drenge': 2, 'Piger': 7 }
      },
      { 
        navn: 'Mar', 
        Danmark: { '6-7 år': 10, '8-10 år': 25, '11-12 år': 15, 'Drenge': 10, 'Piger': 40 },
        Norge:   { '6-7 år': 8,  '8-10 år': 20, '11-12 år': 12, 'Drenge': 8,  'Piger': 32 },
        Sverige: { '6-7 år': 12, '8-10 år': 30, '11-12 år': 18, 'Drenge': 15, 'Piger': 45 },
        Finland: { '6-7 år': 5,  '8-10 år': 10, '11-12 år': 8,  'Drenge': 5,  'Piger': 18 }
      },
      { 
        navn: 'Apr', 
        Danmark: { '6-7 år': 15, '8-10 år': 40, '11-12 år': 25, 'Drenge': 15, 'Piger': 65 },
        Norge:   { '6-7 år': 12, '8-10 år': 35, '11-12 år': 20, 'Drenge': 12, 'Piger': 55 },
        Sverige: { '6-7 år': 18, '8-10 år': 45, '11-12 år': 30, 'Drenge': 20, 'Piger': 73 },
        Finland: { '6-7 år': 8,  '8-10 år': 20, '11-12 år': 15, 'Drenge': 8,  'Piger': 35 }
      },
      { 
        navn: 'Maj', 
        Danmark: { '6-7 år': 20, '8-10 år': 60, '11-12 år': 40, 'Drenge': 25, 'Piger': 95 },
        Norge:   { '6-7 år': 18, '8-10 år': 50, '11-12 år': 35, 'Drenge': 20, 'Piger': 83 },
        Sverige: { '6-7 år': 22, '8-10 år': 65, '11-12 år': 45, 'Drenge': 30, 'Piger': 102 }, // Over 100 fordi vækst er høj
        Finland: { '6-7 år': 12, '8-10 år': 30, '11-12 år': 20, 'Drenge': 10, 'Piger': 52 }
      },
      { 
        navn: 'Jun', 
        Danmark: { '6-7 år': 25, '8-10 år': 70, '11-12 år': 50, 'Drenge': 30, 'Piger': 115 },
        Norge:   { '6-7 år': 20, '8-10 år': 60, '11-12 år': 40, 'Drenge': 25, 'Piger': 95 },
        Sverige: { '6-7 år': 28, '8-10 år': 75, '11-12 år': 55, 'Drenge': 35, 'Piger': 123 },
        Finland: { '6-7 år': 15, '8-10 år': 40, '11-12 år': 25, 'Drenge': 15, 'Piger': 65 }
      },
    ]
  },
  {
    id: 2,
    titel: "Clash Royale",
    beskrivelse: "Gået viralt på Twitch pga. Influencer.",
    kendskabsgrad: 88,
    tags: ["Gaming", "iPad", "10-12 år"],
    billede: clashImg
  },
  {
    id: 3,
    titel: "Brainrot",
    beskrivelse: "Startede på TikTok, nu på Roblox.",
    kendskabsgrad: 74,
    tags: ["Roblox", "YouTube", "Meme"],
    billede: brainrotImg
  },
  {
    id: 4,
    titel: "Fidget cube",
    beskrivelse: "En ny del af Fidget trenden.",
    kendskabsgrad: 72,
    tags: ["Gaming", "iPad", "10-12 år"],
    billede: fidgetImg
  },
  {
    id: 5,
    titel: "Slime",
    beskrivelse: "En ny del af Fidget trenden.",
    kendskabsgrad: 70,
    tags: ["ASMR", "DIY", "TikTok"],
    billede: slimeImg
  },

  // --- VÆKST (25-70%) ---
  {
    id: 6,
    titel: "67",
    beskrivelse: "Viral fællesskabs råben.",
    kendskabsgrad: 65,
    tags: ["Memes", "Brainrot", "5-12 år"],
    billede: s67Img
  },
  {
    id: 7,
    titel: "Soap cutting",
    beskrivelse: "TikTok og Instagram viral ASMR trend.",
    kendskabsgrad: 56,
    tags: ["ASMR", "DIY", "5-12 år"],
    billede: soapImg
  },
  {
    id: 8,
    titel: "MrBeast",
    beskrivelse: "Verdens største YouTuber laver vilde konkurrencer.",
    kendskabsgrad: 35,
    tags: ["YouTube", "10-12 år"],
    billede: mrbeastImg
  },

  // --- UNDER RADAREN (<25%) ---
  {
    id: 9,
    titel: "Chill guy",
    beskrivelse: "Viral tegneseriefigur der tager alt roligt.",
    kendskabsgrad: 23,
    tags: ["DIY", "Brainrot", "12 år"],
    billede: chillguyImg
  },
  {
    id: 10,
    titel: "Demon hunters",
    beskrivelse: "TikTok og Instagram viral ASMR trend.",
    kendskabsgrad: 14,
    tags: ["ASMR", "DIY", "5-12 år"],
    billede: demonhuntersImg
  },
  {
    id: 11,
    titel: "Squid game",
    beskrivelse: "Ny sæson skaber fornyet interesse.",
    kendskabsgrad: 10,
    tags: ["YouTube", "10-12 år"],
    billede: squidgameImg
  }
];