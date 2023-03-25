import React from "react";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import UsersList from "./components/UsersList/UsersList";
// layout
import Layout from "../../layout";
const HomePage = () => {
  const homeText = "Add User"
   
  return (
    <Layout>
      <div className="flex flex-col justify-center w-full my-20">
        <AddUserForm text={homeText}/>
        <UsersList />
      </div>
    </Layout>
  );
};

export default HomePage;
