// Correct the import to get NamesContext from Context file
import React, { useContext } from "react";
import Tbody from "./Tbody";
import { NamesContext } from "./Context"; // Change this to import from Context.js

const Tables = () => {
  const users = useContext(NamesContext); // names is the context data

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <Tbody users={users} />
    </table>
  );
};

export default Tables;
