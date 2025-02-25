import { useRef } from "react";

type FrontpageInfoProps = {
  title: string;
  date: string;
  image: string | null;
  onChange: (title: string, date: string, image: string | null) => void;
};

const FrontpageInfo = ({
  title,
  date,
  image,
  onChange,
}: FrontpageInfoProps) => {
  const inputRef = useRef<HTMLInputElement>(null); // Ref for file input

  // Handle image file selection
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(title, date, reader.result as string); // Save as Data URL
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
            onChange(title, date, reader.result as string); // Save as Data URL
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
          onChange={(e) => onChange(e.target.value, date, image)}
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
          onChange={(e) => onChange(title, e.target.value, image)}
          className="border p-2 rounded"
        />
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
        <img
          src={image}
          alt="Uploaded"
          className="mt-2 max-h-40 object-cover border"
        />
      )}
    </div>
  );
};

export default FrontpageInfo;
