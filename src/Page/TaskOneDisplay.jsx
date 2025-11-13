import React, { useCallback, useEffect, useRef, useState } from "react";
import Table from "../Components/Table";
import Pagination from "../Components/Pagination";

export default function TaskOneDisplay() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);
  const pointInputFieldRef = useRef();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();
        if (value) {
          const filterUsersData = data?.filter((user) =>
            value
              ? user?.name?.toLowerCase().startsWith(value?.toLowerCase()) ||
                user?.email?.toLowerCase().startsWith(value?.toLowerCase())
              : true
          );
          setUsers(filterUsersData);
        } else {
          setUsers(data);
        }
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [value]);

  const number = new Array(Math.ceil(users?.length / 4))?.fill(0);

  console.log(number);

  if (loading)
    return <span className="loading loading-spinner loading-xl"></span>;
  else
    return (
      <div className="border-gray-50 space-y-5">
        <input
          ref={pointInputFieldRef}
          className="border w-1/3 h-10 focus:outline-red-500 p-2"
          onChange={() => setValue(pointInputFieldRef.current.value)}
        />
        <Table
          tableHeadData={["Name", "Email", "Phone"]}
          tableBodyData={users}
          inputValue={value}
        />
        <div className="flex gap-x-2 justify-center">
          {number?.map((_, idx) => (
            <Pagination number={idx + 1} />
          ))}
        </div>
      </div>
    );
}
