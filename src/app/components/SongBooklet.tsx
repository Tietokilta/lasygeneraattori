"use client";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { useState } from "react";
import { Content, TDocumentDefinitions } from "pdfmake/interfaces";
import { SongData } from "../types";

pdfMake.vfs = pdfFonts.vfs;

type SongBookletProps = {
  selectedSongs: SongData[];
  title: string;
  date: string;
  image: string | null;
};

const SongBooklet = ({
  selectedSongs,
  title,
  date,
  image,
}: SongBookletProps) => {
  const [iframeSrc, setIframeSrc] = useState<string>(" ");
  const docContent: Content = [];

  // ✅ **Add the front page content**
  // Add title
  docContent.push({
    text: title,
    style: "header",
    alignment: "center",
    margin: [0, 50, 0, 10],
  });

  docContent.push({
    text: `${date}`,
    style: "subheader",
    alignment: "center",
    margin: [0, 0, 0, 20],
  });

  if (image) {
    docContent.push({
      image: image,
      width: 300,
      alignment: "center",
      margin: [0, 10, 0, 10],
    });
  }

  docContent.push(
    { text: " ", margin: [0, 20] },
    { text: " ", pageBreak: "after" } // ✅ **Page Break after Front Page**
  );

  // ✅ **Add Songs Starting from Page 2**
  selectedSongs.forEach((song, index) => {
    docContent.push(
      { text: `${index + 1}. ${song.title}`, style: "songTitle" },
      { text: song.lyrics, margin: [0, 5] },
      { text: " ", margin: [0, 10] },
      { text: `${song.title} again`, style: "songTitle" },
      { text: `${song.lyrics}`, margin: [0, 5] },
      { text: " ", margin: [0, 10] },
      { text: `${song.title} yet again`, style: "songTitle" },
      { text: `${song.lyrics}`, margin: [0, 5] },
      { text: " ", margin: [0, 10] },
      { text: `${song.title} to get 12 pages`, style: "songTitle" },
      { text: `${song.lyrics}`, margin: [0, 5] },
      { text: " ", margin: [0, 10] },
      { text: `${song.title} to get 12 PAGES`, style: "songTitle" },
      { text: `${song.lyrics}`, margin: [0, 5] },
      { text: " ", margin: [0, 10] }
    );
  });

  const docDefinition: TDocumentDefinitions = {
    content: docContent,
    styles: {
      header: { fontSize: 30, bold: true },
      subheader: { fontSize: 16, italics: true },
      songTitle: { fontSize: 18, bold: true, margin: [0, 10] },
    },
  };

  const createPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getDataUrl((dataUrl) => {
      setIframeSrc(dataUrl);
    });
  };

  return (
    <div>
      <button
        onClick={createPdf}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Generate PDF
      </button>
      <div className="border border-black m-2 w-[700px] h-[850px]">
        <iframe src={iframeSrc} className="w-full h-full"></iframe>
      </div>
    </div>
  );
};

export default SongBooklet;
