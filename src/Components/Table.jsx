import React from "react";
import Highlight from "./Highlight";


export default function Table({
  tableHeadData = [],
  tableBodyData = [],
  inputValue = "",
}) {
  return (
    <div className="overflow-x-auto border">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            {tableHeadData?.length > 0 &&
              tableHeadData?.map((data, idx) => <th key={idx}>{data}</th>)}
          </tr>
        </thead>
        <tbody>
          {tableBodyData?.map((data, idx) => (
            <tr key={idx}>
              <td>
                {" "}
                <Highlight text={data?.name} highlight={inputValue} />
              </td>
              <td>
                <Highlight text={data?.email} highlight={inputValue} />
              </td>
              <td>{data?.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
