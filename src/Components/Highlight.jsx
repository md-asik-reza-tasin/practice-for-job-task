import React from "react";

export default function Highlight({ text = "", highlight = "" }) {
  if (!highlight) return text;

  const toLowerCaseText = text?.replace(/\s+/g, "").toLocaleLowerCase();
  const toLowerCaseHighlight = highlight
    ?.replace(/\s+/g, "")
    .toLocaleLowerCase();

  console.log(toLowerCaseText);
  console.log(toLowerCaseHighlight);

  const index = toLowerCaseText?.indexOf(toLowerCaseHighlight);

  if (index === -1) return text;

  const before = text?.slice(0, index);
  const match = text?.slice(index, index + highlight?.length);
  const after = text?.slice(index + highlight?.length);

  return (
    <>
      {before}
      <span className="bg-yellow-400">{match}</span>
      {after}
    </>
  );
}
