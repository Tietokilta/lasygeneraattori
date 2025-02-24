import { Song } from "./types";



export const songs: Song[] = [
  {
    id: 1,
    title: "Hyvät ystävät",
    lyrics: `
      Hyvät ystävät juhla voi alkaa
      sankarille me nostamme maljaa
      :,: Tääl' ei juodakaan kolmosen kaljaa
      Meille viihdyn suo sampanja vaan :,:.
      
      Hauska juomia kurkkuun on suistaa
      siten teekkariaikoja muistaa
      :,: Yhteinen juomalaulumme luistaa
      juhlamieli on parhaimmilaan! :,:
      
      Näin kun ystävät toisiaan juottaa
      sepä uusia muistoja tuottaa.
      :,: Hyvään ystävään aina voi luottaa
      Juhlajuoma ei loppua saa :,:`,
    categories: ["shamppanja", "kalja"],
    language: "FI",
    lines: 12,
    verses: 3
  },
  {
    id: 2,
    title: "Helan går",
    lyrics: `
      En liten fågel satt en gång
      Och sjöng i furuskog.
      Han hade sjungit dagen lång
      Men dock ej sjungit nog.

      Och strupen torkat vid hans gom
      förtröstan stämman bar.
      Vad sjöng den lilla fågeln då?

      JO!

      :,: Helan går,
      sjung hopp-falderallan-lallan-lei! :,:
      Och den som inte helan tar,
      Hand ej heller halvan får.
      Helan går!
      sjung hopp-falderallan-lei!
      `,
    categories: ["Viina"],
    language: "SE",
    lines: 14,
    verses: 3,
  },
  {
    id: 3,
    title: "Elomme päivät",
    lyrics: `
      Elomme päivät epäselvät
      kohtalo kova suonut on.
      :,: Kun eilen tulin tänään kotia
      ja tänään tulen huomenna. Huomenta! :,:
      
      Jumalauta täällä sammutaan!
      Siskot, veljet, tulkaa auttamaan!
      :,: Me baarikaapin näämme ja sen valtaamme
      ja kossupullon huiviin heitämme. Perkele! :,:`,
    categories: ["viina"],
    language: "FI",
    lines: 8,
    verses: 2,
  },
  {
    id: 4,
    title: "Takki pois",
    lyrics: `
    Hei takki poies kiskaiskaamme,
    on Polin oiva tapa tää.
    :,: Ja sitten laulu laulakaamme
    niin että katto tärähtää. :,:
    
    Me emme laulamasta lakkaa,
    ennen kuin aamu sarastaa.
    :,: Ei täältä kesken poistutakkaan.
    tääll' juodaan kautta Pohjanmaan. :,:`,
    categories: ["takki"],
    language: "FI",
    lines: 8,
    verses: 2,
  },
  {
    id: 5,
    title: "Ken ompi fuksi",
    lyrics: `
      Ken ompi fuksi NN
      ylös nouskohon :,:
      Hän lasin käteen ottakoon,
      sen huulillensa nostakoon.
      
      :,: Juo pois, juo pois, juo pois, juo pois,
      juo herran tähden pois! :,:`,
      categories: ["fuksi"],
      language: "FI",
      lines: 6,
      verses: 2,
  },
  {
    id: 6,
    title: "Ikuisen teekkarin laulu",
    lyrics: `
    Talvi-iltain tummentuessa
    Polin suojiin me saavumme taas.
    :,: Meidät tekniikka jälkeen on jättänyt,
    sen me tahdomme unhoittaa. :,:
    
    Unelma vain on diplomityömme,
    joka tenttimme vanhennut.
    :,: Jo ruostunut harpikko käyttämätön,
    tushi pulloihin jähmennyt. :,:
    
    Aina teekkaripolvien uutten
    ohi pöytämme käyvän nään
    :,. Mutta meillä ei voimaa enää kylliksi
    heidän joukkoonsa liitymään :,:
    
    Viini laseissa ilkkuen päilyy,
    meitä kutsuen kuohuillaan.
    :,: Pois murheemme tahdomme karkoittaa
    äly pois mitä maksoikaan! :,:
    
    Ja kun Integer vitae meille
    kerran viimeisen lauletaan.
    :,: Silloin ikuisen teekkarin haudalle
    oluttynnöri nostetaan. :,:`,
    categories: [],
    language: "FI",
    lines: 20,
    verses: 5,
  }
]