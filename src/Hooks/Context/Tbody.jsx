import React from "react";

const Tbody = ({ users }) => {
  console.log(users);

  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
