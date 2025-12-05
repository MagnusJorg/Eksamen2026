// src/data/trendsData.js

// 1. Vi henter billedet her
import labubuImg from '../assets/trendbillede/labubu.png'; 

export const trendsData = [
  {
    id: 1,
    titel: "Labubu", // Ret navnet her
    billede: labubuImg, // 2. Vi sætter variablen ind her (uden anførselstegn!)
    beskrivelse: "Gået viralt på TikTok pga. unboxing-videoer.",
    kendskabsgrad: 80,
    tags: ["plys", "nøgleringe", "8-12 år"]
  },
  // ... dine andre trends
];