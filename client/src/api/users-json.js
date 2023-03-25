import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

// Fetch all users.
export async function getUsersJsonServer() {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
// Add, Register a users.
export async function addUsersJsonServer(data) {
  await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((err) => {
    console.error(err);
  });

}
// Edit a user.
export async function editUsersJsonServer(data, id) {
  try {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
}
// Delete a user by ID.

export async function deleteUsersJsonServer(id) {
  try {
    await axios.delete(`/users/${id}`);
  } catch (error) {
    console.error(error);
  }
}





