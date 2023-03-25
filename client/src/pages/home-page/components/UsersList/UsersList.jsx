import React, { useState, useEffect } from "react";
import User from "../User/User";
import { Grid } from "gridjs-react";
import { Link } from "react-router-dom";
import "gridjs/dist/theme/mermaid.css";
// components
import CustumDisplayButton from "./components/CustumDisplayButton";
// API
import { onGetUsers } from "../../../../api/users";

const UsersList = () => {
  // Get fetch all users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const { data } = await onGetUsers();
      
      setUsers(data.users);
    }

    fetchUsers();
  }, []);

  // -------------------- GRID --------------------
  const columns = ["Username", "Email", "Password", "Location", "Actions"];

  const data = users.map((user) => {
    const { user_name, email, password, location, id } = user;
    return [user_name, email, password, location];
  });

  return (
    <>
      <div className="flex flex-col-reverse justify-center items-center	gap-2 py-6 mx-32 w-100">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
      {/* // -------------------- GRID -------------------- */}
      <div className="flex flex-col-reverse justify-center items-center	gap-2 py-6 mx-32 w-100">
        <Grid
          data={data}
          columns={columns}
          search={true}
          pagination={{
            enabled: true,
            limit: 6,
            summary: true,
          }}
          sort={true}
          style={{
            wrapper: {
              borderRadius: "4px",
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
            },
            table: {
              borderCollapse: "collapse",
              width: "100%",
            },
            th: {
              backgroundColor: "#111827",
              fontWeight: "bold",
              padding: "0.5rem",
              textAlign: "left",
            },
            td: {
              padding: "0.5rem",
              borderBottom: "1px solid gray",
              backgroundColor: "#111827",
              textAlign: "left",
              color: "white",
            },
            input: {
              backgroundColor: "#f2f2f2",
              borderRadius: "14px",
              padding: "0.5rem",
              margin: "0.5rem",
              width: "100%",
            },
            pagination: {
              marginTop: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        />
      </div>
    </>
  );
};

export default UsersList;
