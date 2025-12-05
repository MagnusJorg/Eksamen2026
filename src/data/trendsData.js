// src/data/trendsData.js

// 1. Vi importerer billederne (husk at lægge billederne i mappen først!)
import labubuImg from '../assets/trendbillede/labubu.png'; 
import clashImg from '../assets/trendbillede/labubu.png'; // Ret til clash.png når du har det
import brainrotImg from '../assets/trendbillede/labubu.png'; // Ret til brainrot.png
import fidgetImg from '../assets/trendbillede/labubu.png'; // Ret til fidget.png
import slimeImg from '../assets/trendbillede/labubu.png'; // Ret til slime.png

export const trendsData = [
  {
    id: 1,
    titel: "Labubu",
    beskrivelse: "Gået viralt på TikTok. De små monstre er overalt lige nu, og børnene elsker at samle på dem.",
    kendskabsgrad: 85,
    tags: ["Plys", "Samleobjekt", "8-12 år"],
    billede: labubuImg
  },
  {
    id: 2,
    titel: "Clash Royale",
    beskrivelse: "Mobilspillet der har fået et kæmpe comeback. Alle drengene spiller det i frikvarteret igen.",
    kendskabsgrad: 92,
    tags: ["Gaming", "Mobil", "Strategi"],
    billede: clashImg
  },
  {
    id: 3,
    titel: "Brainrot",
    beskrivelse: "Nye slangord fra internettet som 'Skibidi' og 'Rizz', som de voksne intet forstår af.",
    kendskabsgrad: 45,
    tags: ["Sprog", "TikTok", "Humor"],
    billede: brainrotImg
  },
  {
    id: 4,
    titel: "Fidget cube",
    beskrivelse: "Den lille terning med knapper er tilbage. God til at holde fingrene i gang i timerne.",
    kendskabsgrad: 60,
    tags: ["Fokus", "Dille", "Skole"],
    billede: fidgetImg
  },
  {
    id: 5,
    titel: "Slime",
    beskrivelse: "Det klistrede stads er stadig et hit. Nu skal det helst være 'fluffy' eller sige lyde.",
    kendskabsgrad: 75,
    tags: ["Kreativt", "Sanse", "Leg"],
    billede: slimeImg
  }
];