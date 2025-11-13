import React from "react";

export default function Pagination({ number }) {
  console.log(number);

  return <div className="border p-3 w-20 cursor-pointer">{number}</div>;
}
