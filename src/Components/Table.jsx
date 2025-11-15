import React from "react";

export default function Table({ tableBodyData }) {
  console.log(tableBodyData);

  return (
    <div className="overflow-x-scroll border bg-white w-3/4 h-80">
      <table className="relative table table-zebra">
        {/* head */}
        <thead className="bg-gray-500/10">
          <tr>
            <div className="sticky left-0 top-0 z-20 bg-gray-200">
              <th>Id</th>
              <th>Name</th>
            </div>
            <th>Username</th>
            <th>email</th>
            <th>Username</th>
            <th>email</th>
            <th>Username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {tableBodyData?.map((data, idx) => (
            <tr key={idx} className="">
              <div className="sticky left-0 top-0 z-20 bg-gray-200">
                <td className="">{data?.id}</td>
                <td className="">{data?.name}</td>
              </div>
              <td>{data?.username}</td>
              <td>{data?.email}</td>
              <td>{data?.username}</td>
              <td>{data?.email}</td>
              <td>{data?.username}</td>
              <td>{data?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
