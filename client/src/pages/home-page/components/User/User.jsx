import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// api
import { onUpdateUser } from "../../../../api/users";
import { onDeleteUser } from "../../../../api/users";

const User = ({ user }) => {
  // -------------------- EDIT --------------------
  // Destructure user data and add the date to the state;
  const { id, user_name, email, password, location } = user;
  const idAsString = id.toString();

  const [editedUserData, setEditedUserData] = useState({
    user_name: user_name,
    email: email,
    password: password,
    location: location,
  });

  // Flag that make editing permited
  const [isEdit, setIsEdit] = useState(false);

  // Change the inputs state with the new state;
  const onChange = (e) => {
    setEditedUserData({ ...editedUserData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    onUpdateUser(idAsString, editedUserData);

    toast.success("Succes! Wait a few seconds for update"); // toast message
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  // -------------------- DELETE --------------------
  // Sweet Alert
  const MySwal = withReactContent(Swal);
  const alertHandler = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDeleteUser(idAsString);
        MySwal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then(() => {
          window.location.reload();
        });
      }
    });
  };

  return (
    <div className="w-full">
      {isEdit ? (
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-5 gap-4 w-full bg-gray-900 text-black justify-between	p-2 h-12 rounded-md"
        >
          <input
            type="text"
            value={editedUserData.user_name}
            name="user_name"
            onChange={onChange}
          />
          <input
            type="text"
            value={editedUserData.email}
            name="email"
            onChange={onChange}
          />
          <input
            type="text"
            value={editedUserData.password}
            name="password"
            onChange={onChange}
          />
          <select
            className="bg-gray-300 rounded-md p-1"
            name="location"
            value={editedUserData.location}
            onChange={onChange}
          >
            <option value="">--Select a location--</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
            <option value="Moscow">Moscow</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Istanbul">Istanbul</option>
          </select>
          {/* Actions */}

          <div className="flex flex-row gap-4">
            <div className="border-2 px-2  rounded-md text-white hover:text-green-500 hover:border-green-500">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-5 gap-2 w-full bg-gray-900 text-white justify-between 	p-2 px-4 h-12 rounded-md">
          <div>{user.user_name}</div>
          <div>{user.email}</div>
          <div>{user.password}</div>
          <div>{user.location}</div>
          {/* Actions */}

          <div className="flex flex-row gap-1">
            <div className="border-2 px-2 rounded-md hover:text-yellow-500 hover:border-yellow-500">
              <Link to={`/user/${user.id}`}>Details</Link>
            </div>
            <div className="border-2 px-2  rounded-md hover:text-green-500 hover:border-green-500">
              <button onClick={(e) => setIsEdit(!isEdit)}> Edit</button>
            </div>
            <div className="border-2 px-2  rounded-md hover:text-red-500 hover:border-red-500">
              <button onClick={(e) => alertHandler()}> Delete</button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default User;
