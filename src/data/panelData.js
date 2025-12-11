// src/data/panelData.js

// --- 1. OPRINDELIGE BILLEDER ---
import frederik from '../assets/panel/frederik.webp'; 
import laura from '../assets/panel/laura.webp';
import luna from '../assets/panel/luna.webp';
import theo from '../assets/panel/theo.webp';
import nina from '../assets/panel/nina.webp';
import mads from '../assets/panel/mads.webp';

// --- 2. NYE BILLEDER ---
import alma from '../assets/panel/alma.webp';
import elias from '../assets/panel/elias.webp';
import elsa from '../assets/panel/elsa.webp';
import emma from '../assets/panel/emma.webp';
import ida from '../assets/panel/ida.webp';
import karla from '../assets/panel/karla.webp';
import liam from '../assets/panel/liam.webp';
import magnus from '../assets/panel/magnus.webp';
import noah from '../assets/panel/noah.webp';
import oliver from '../assets/panel/oliver.webp';
import oscar from '../assets/panel/oscar.webp';
import signe from '../assets/panel/signe.webp';
import sofia from '../assets/panel/sofia.webp';
import valdemar from '../assets/panel/valdemar.webp';
// Bemærk: Rettet stavefejl i filnavnet herunder (willam.webp)
import william from '../assets/panel/william.webp'; 

export const panelData = [
  // --- DE OPRINDELIGE 6 ---
  {
    id: 1,
    navn: "Frederik",
    alder: "12 år",
    flag: "/icons/dk.svg",
    by: "Billund",
    klasse: "6. Klasse",
    koen: "Drenge",
    interesser: "Gamer, Biler, Udendørs",
    billede: frederik, 
    beskrivelse: "Frederik er en kritisk tester, der ikke er bange for at sige sin mening. Han elsker komplekse systemsæt.",
    legetoej: ["Brainrot kort", "Hot Wheels", "Krea gynge"],
    oensker: ["Schleich løve", "Lego City", "F1 Bil"],
    serier: ["YouTube", "MrBeast", "Gaming TV"]
  },
  {
    id: 2,
    navn: "Laura",
    alder: "10 år",
    flag: "/icons/dk.svg",
    by: "Hellerup",
    klasse: "4. Klasse",
    koen: "Piger",
    interesser: "Heste, Krea, Dyr",
    billede: laura
  },
  {
    id: 3,
    navn: "Luna",
    alder: "7 år",
    flag: "/icons/se.svg",
    by: "Stockholm",
    klasse: "2. Klasse",
    koen: "Piger",
    interesser: "Bamser, Dukker, Dyr",
    billede: luna
  },
  {
    id: 4,
    navn: "Theo",
    alder: "10 år",
    flag: "/icons/no.svg",
    by: "Oslo",
    klasse: "5. Klasse",
    koen: "Drenge",
    interesser: "Superhelte, Minecraft, Disney film",
    billede: theo
  },
  {
    id: 5,
    navn: "Nina",
    alder: "8 år",
    flag: "/icons/se.svg",
    by: "Jarvsø",
    klasse: "3. Klasse",
    koen: "Piger",
    interesser: "Barbie, Krea, Demon hunters",
    billede: nina
  },
  {
    id: 6,
    navn: "Mads",
    alder: "8 år",
    flag: "/icons/fi.svg",
    by: "Helsinki",
    klasse: "3. Klasse",
    koen: "Drenge",
    interesser: "Starwars, Batman, Lego",
    billede: mads
  },

  // --- DE 10 NYE (Børn 7-16) ---
  {
    id: 7,
    navn: "Sofia",
    alder: "9 år",
    flag: "/icons/dk.svg",
    by: "Odense",
    klasse: "3. Klasse",
    koen: "Piger",
    interesser: "Kreativ, Dukker, Dans",
    billede: sofia // Bruger nyt billede
  },
  {
    id: 8,
    navn: "Liam",
    alder: "11 år",
    flag: "/icons/no.svg",
    by: "Bergen",
    klasse: "5. Klasse",
    koen: "Drenge",
    interesser: "Action, Biler, Fodbold",
    billede: liam // Bruger nyt billede
  },
  {
    id: 9,
    navn: "Emma",
    alder: "8 år",
    flag: "/icons/se.svg",
    by: "Göteborg",
    klasse: "2. Klasse",
    koen: "Piger",
    interesser: "Dyr, Rolleleg, Svømning",
    billede: emma // Bruger nyt billede
  },
  {
    id: 10,
    navn: "Noah",
    alder: "12 år",
    flag: "/icons/fi.svg",
    by: "Tampere",
    klasse: "6. Klasse",
    koen: "Drenge",
    interesser: "Bygger, Action, Ishockey",
    billede: noah // Bruger nyt billede
  },
  {
    id: 11,
    navn: "Ida",
    alder: "7 år",
    flag: "/icons/dk.svg",
    by: "Aalborg",
    klasse: "1. Klasse",
    koen: "Piger",
    interesser: "Dukker, Rolleleg, Tegne",
    billede: ida // Bruger nyt billede
  },
  {
    id: 12,
    navn: "Oliver",
    alder: "10 år",
    flag: "/icons/no.svg",
    by: "Trondheim",
    klasse: "4. Klasse",
    koen: "Drenge",
    interesser: "Biler, Bygger, Gaming",
    billede: oliver // Bruger nyt billede
  },
  {
    id: 13,
    navn: "Elsa",
    alder: "11 år",
    flag: "/icons/se.svg",
    by: "Malmö",
    klasse: "5. Klasse",
    koen: "Piger",
    interesser: "Kreativ, Dyr, Ridning",
    billede: elsa // Bruger nyt billede
  },
  {
    id: 14,
    navn: "William",
    alder: "8 år",
    flag: "/icons/dk.svg",
    by: "Roskilde",
    klasse: "2. Klasse",
    koen: "Drenge",
    interesser: "Action, Rolleleg, Superhelte",
    billede: william // Bruger nyt billede
  },
  {
    id: 15,
    navn: "Astrid",
    alder: "9 år",
    flag: "/icons/fi.svg",
    by: "Turku",
    klasse: "3. Klasse",
    koen: "Piger",
    interesser: "Dyr, Kreativ, Musik",
    billede: laura // Genbrugt billede (ingen astrid.webp)
  },
  {
    id: 16,
    navn: "Elias",
    alder: "12 år",
    flag: "/icons/se.svg",
    by: "Uppsala",
    klasse: "6. Klasse",
    koen: "Drenge",
    interesser: "Biler, Bygger, Kodning",
    billede: elias // Bruger nyt billede
  },

  // --- EKSTRA BØRN (17-26) ---
  {
    id: 17,
    navn: "Magnus",
    alder: "8 år",
    flag: "/icons/dk.svg",
    by: "Vejle",
    klasse: "2. Klasse",
    koen: "Drenge",
    interesser: "Biler, Bygger, Dinosaurer",
    billede: magnus // Bruger nyt billede
  },
  {
    id: 18,
    navn: "Karla",
    alder: "10 år",
    flag: "/icons/se.svg",
    by: "Lund",
    klasse: "4. Klasse",
    koen: "Piger",
    interesser: "Kreativ, Dyr, Bagning",
    billede: karla // Bruger nyt billede
  },
  {
    id: 19,
    navn: "Valdemar",
    alder: "12 år",
    flag: "/icons/no.svg",
    by: "Stavanger",
    klasse: "6. Klasse",
    koen: "Drenge",
    interesser: "Action, Gaming, Parkour",
    billede: valdemar // Bruger nyt billede
  },
  {
    id: 20,
    navn: "Signe",
    alder: "7 år",
    flag: "/icons/fi.svg",
    by: "Espoo",
    klasse: "1. Klasse",
    koen: "Piger",
    interesser: "Dukker, Rolleleg, Gymnastik",
    billede: signe // Bruger nyt billede
  },
  {
    id: 21,
    navn: "Oscar",
    alder: "9 år",
    flag: "/icons/dk.svg",
    by: "Esbjerg",
    klasse: "3. Klasse",
    koen: "Drenge",
    interesser: "Bygger, Action, Spejder",
    billede: oscar // Bruger nyt billede
  },
  {
    id: 22,
    navn: "Alma",
    alder: "11 år",
    flag: "/icons/se.svg",
    by: "Visby",
    klasse: "5. Klasse",
    koen: "Piger",
    interesser: "Kreativ, Rolleleg, Teater",
    billede: alma // Bruger nyt billede
  },
  {
    id: 23,
    navn: "Arthur",
    alder: "8 år",
    flag: "/icons/no.svg",
    by: "Tromsø",
    klasse: "2. Klasse",
    koen: "Drenge",
    interesser: "Biler, Dyr, Fiskeri",
    billede: frederik // Genbrugt billede
  },
  {
    id: 24,
    navn: "Ella",
    alder: "10 år",
    flag: "/icons/dk.svg",
    by: "Viborg",
    klasse: "4. Klasse",
    koen: "Piger",
    interesser: "Kreativ, Dyr, Fotografering",
    billede: luna // Genbrugt billede
  },
  {
    id: 25,
    navn: "Malthe",
    alder: "12 år",
    flag: "/icons/fi.svg",
    by: "Oulu",
    klasse: "6. Klasse",
    koen: "Drenge",
    interesser: "Action, Bygger, Droneflyvning",
    billede: theo // Genbrugt billede
  },
  {
    id: 26,
    navn: "Liv",
    alder: "7 år",
    flag: "/icons/se.svg",
    by: "Karlstad",
    klasse: "1. Klasse",
    koen: "Piger",
    interesser: "Dukker, Rolleleg, Sjippe",
    billede: nina // Genbrugt billede
  }
];