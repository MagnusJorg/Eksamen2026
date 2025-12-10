// src/data/panelData.js

// 1. We import all the images
import frederik from '../assets/panel/frederik.webp'; 
import laura from '../assets/panel/laura.webp';
import luna from '../assets/panel/luna.webp';
import theo from '../assets/panel/theo.webp';
import nina from '../assets/panel/nina.webp';
import mads from '../assets/panel/mads.webp';

export const panelData = [
  {
    id: 1,
    navn: "Frederik",
    alder: "12 år",
    flag: "/icons/dk.svg",
    by: "Billund",
    klasse: "6. Klasse",
    interesser: "Gamer, Biler, Udendørs",
    billede: frederik, 
  },
  {
    id: 2,
    navn: "Laura",
    alder: "10 år",
    flag: "/icons/dk.svg", // Corrected to Danish flag according to image
    by: "Hellerup",
    klasse: "4. Klasse",
    interesser: "Heste, Krea, Dyr",
    billede: laura
  },
  {
    id: 3,
    navn: "Luna",
    alder: "7 år",
    flag: "/icons/se.svg", // Swedish flag
    by: "Stockholm",
    klasse: "2. Klasse",
    interesser: "Bamser, Dukker, Dyr",
    billede: luna
  },
  {
    id: 4,
    navn: "Theo",
    alder: "10 år",
    flag: "/icons/no.svg", // Norwegian flag
    by: "Oslo",
    klasse: "5. Klasse",
    interesser: "Superhelte, Minecraft, Disney film",
    billede: theo
  },
  {
    id: 5,
    navn: "Nina",
    alder: "8 år",
    flag: "/icons/se.svg", // Swedish flag
    by: "Jarvsø",
    klasse: "3. Klasse",
    interesser: "Barbie, Krea, Demon hunters",
    billede: nina
  },
  {
    id: 6,
    navn: "Mads",
    alder: "8 år",
    flag: "/icons/fi.svg", // Finnish flag
    by: "Helsinki",
    klasse: "3. Klasse",
    interesser: "Starwars, Batman, Lego",
    billede: mads
  }
];