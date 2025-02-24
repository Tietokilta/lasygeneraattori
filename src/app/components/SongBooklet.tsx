"use client";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts"

pdfMake.vfs = pdfFonts.vfs;
import { SongData } from "../types";
import { useState } from "react";
import { Content, TDocumentDefinitions } from "pdfmake/interfaces";


type SongBookletProps = {
  selectedSongs: SongData[];
};

const SongBooklet = ({ selectedSongs }: SongBookletProps) => {
  const docContent: Content = [];
  selectedSongs.forEach((song, index) => {
    docContent.push({ text: `${index + 1}. ${song.title}`});
    docContent.push({ text: song.lyrics});
    docContent.push({ text: " "});
  })
  const docDefinition: TDocumentDefinitions = {
    content: docContent,
    styles: {
      header: {
        fontSize: 22,
        bold: true,
      },
      anotherStyle: {
        italics: true,
        alignment: 'right',
      },
    },
  };

  const [iframeSrc, setIframeSrc] = useState<string>("kusi");

  const createPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getDataUrl((dataUrl) => {
      setIframeSrc(dataUrl);
    })
  }
  return (
    <div>
      <button onClick={createPdf}>Generate PDF</button>
      <div className="border border-black m-2 w-[700px] h-[850px]">
        <iframe src={iframeSrc} className="w-full h-full"></iframe>
      </div>
    </div>
  );

};

export default SongBooklet;

  /*
  return (
    <div className="border border-black m-2 flex items-center justify-center bg-white shadow-lg 
                    w-[700px] h-[900px] p-4 overflow-y-auto">
      <div className="text-center">
        {selectedSongs.length > 0 ? (
          selectedSongs.map((song, index) => (
            <div key={index} className="mb-4">
              <h2 className="font-bold text-lg">{song.title}</h2>
              <p className="whitespace-pre-wrap text-sm">{song.lyrics}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No songs selected</p>
        )}
      </div>
    </div>
  );*/