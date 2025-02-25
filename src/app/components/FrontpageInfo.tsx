import { useState } from "react";

const FrontpageInfo = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="border border-black w-80 h-80 m-2 p-4 flex flex-col gap-4">
      <h2 className="text-lg font-bold">Songbooklet Info</h2>
      <label className="flex flex-col">
        <span className="font-medium">Title:</span>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          className="border p-2 rounded"
        />
      </label>
      <label className="flex flex-col">
        <span className="font-medium">Date:</span>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded"
        />
      </label>
    </div>
  );
};

export default FrontpageInfo;
