import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

// Add, Register a users.
export async function onAddUser(registrationData) {
  return await axios.post(
    "http://localhost:4000/api/register",
    registrationData
  );
}
// Fetch all users.
export async function onGetUsers() {
  return await axios.get("http://localhost:4000/api/get-users");
}
// Update a user by ID.
export async function onUpdateUser(id, updatedUserData) {
  return await axios.put(
    `http://localhost:4000/api/edit-user/${id}`,
    updatedUserData
  );
}
// Delete a users.
export async function onDeleteUser(deleteData) {
  return await axios.delete(
    `http://localhost:4000/api/delete-user/${deleteData}`
  );
}
// Login user.
export async function onLoginUser(loginData) {
  return await axios.post("http://localhost:4000/api/login", loginData);
}
// Login Logout.
export async function onLogout() {
  return await axios.get("http://localhost:4000/api/logout");
}
