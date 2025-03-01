import Image from "next/image";
import { useRef } from "react";

type FrontpageInfoProps = {
  title: string;
  date: string;
  image: string | null;
  includeTOC: boolean;
  onChange: (title: string, date: string, image: string | null, includeTOC: boolean) => void;
};

const FrontpageInfo = ({
  title,
  date,
  image,
  includeTOC,
  onChange,
}: FrontpageInfoProps) => {
  const inputRef = useRef<HTMLInputElement>(null); // Ref for file input

  // Handle image file selection
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(title, date, reader.result as string, includeTOC); // Save as Data URL
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle pasting images
  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const items = event.clipboardData.items;
    for (const item of items) {
      if (item.type.startsWith("image")) {
        const file = item.getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            onChange(title, date, reader.result as string, includeTOC); // Save as Data URL
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };

  return (
    <div
      className="border border-black w-80 h-auto m-2 p-4 flex flex-col gap-4"
      onPaste={handlePaste} // Capture paste events
    >
      <h2 className="text-lg font-bold">Songbooklet Info</h2>

      {/* Title Input */}
      <label className="flex flex-col">
        <span className="font-medium">Title:</span>
        <input
          type="text"
          value={title}
          onChange={(e) => onChange(e.target.value, date, image, includeTOC)}
          placeholder="Enter title"
          className="border p-2 rounded"
        />
      </label>

      {/* Date Input */}
      <label className="flex flex-col">
        <span className="font-medium">Date:</span>
        <input
          type="date"
          value={date}
          onChange={(e) => onChange(title, e.target.value, image, includeTOC)}
          className="border p-2 rounded"
        />
      </label>

      {/* Table of Contents Checkbox */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={includeTOC}
          onChange={(e) => onChange(title, date, image, e.target.checked)}
          className="w-5 h-5"
        />
        <span className="font-medium">Include Table of Contents</span>
      </label>

      {/* Image Upload & Paste */}
      <label className="flex flex-col">
        <span className="font-medium">Upload or Paste Image:</span>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border p-2 rounded"
        />
      </label>

      {/* Show Image Preview */}
      {image && (
        <div className="relative mt-2 w-full h-40 border">
          <Image
            src={image}
            alt="Uploaded"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      )}
    </div>
  );
};

export default FrontpageInfo;
