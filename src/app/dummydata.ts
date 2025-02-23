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
    lines: 12,
    verses: 3
  }
]