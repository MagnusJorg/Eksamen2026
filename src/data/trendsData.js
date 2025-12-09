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
    billeder: [
        labubuImg, // Billede 1
        labubuImg, // Billede 2 (Du kan skifte disse ud senere)
        labubuImg  // Billede 3
      ],
    nordiskStatus: [
        "Er totalt udsolgt i de fleste danske hobbybutikker.",
        "Særligt populær blandt piger i alderen 10-14 år på TikTok.",
        "Der ses en stigning i bytte-grupper på Facebook."
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