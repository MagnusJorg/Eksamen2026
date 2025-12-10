import frederik from '../assets/panel/frederik.webp'; 
import laura from '../assets/panel/laura.webp';
import luna from '../assets/panel/luna.webp';


// 1. Vi definerer stierne (Husk '/' foran, så den leder i public mappen)
const flag = {
  dk: "/dk.svg",
  se: "/se.svg",
  no: "/no.svg",
  fi: "/fi.svg"
};

export const panelData = [
  {
    id: 1,
    navn: "Lucas",
    alder: "10 år",
    // HER VAR FEJLEN: Vi bruger 'flagStier.dk' og kalder feltet 'flag'
    flag: dk, 
    by: "Aarhus",
    klasse: "4. Klasse",
    interesser: "Gaming, YouTube",
    billede: frederik, 
  },
  {
    id: 2,
    navn: "Laura",
    alder: "8 år",
    // Husk at kalde feltet 'flag' her også (du kaldte det 'land' før)
    flag: flagStier.no, 
    by: "Oslo",
    klasse: "2. Klasse",
    interesser: "Kreativ, Dans",
    billede: laura
  },
  {
    id: 3,
    navn: "Luna",
    alder: "12 år",
    flag: flagStier.dk, // Og her
    by: "Hellerup",
    klasse: "6. Klasse",
    interesser: "Fodbold, TikTok",
    billede: luna
  },
];