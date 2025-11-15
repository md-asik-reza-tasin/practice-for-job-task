import React, { useEffect, useState } from "react";
import Table from "../Components/Table";

export default function TaskTwo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");

  const base_url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      const url = searchText?.trim()
        ? `${base_url}?email=${searchText}`
        : base_url;

      try {
        const res = await fetch(url);
        const data = await res?.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchText]);

  console.log(users);

  return (
    <div>
      <input
        className="border outline-none focus:border-red-700 p-5"
        value={searchText}
        type="text"
        name=""
        id=""
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Table tableBodyData={users} />
    </div>
  );
}
