import React from "react";
// layout
import Layout from "../../layout";
import AddUserForm from "../home-page/components/AddUserForm/AddUserForm";

const RegisterPage = () => {
  const registerText = "Register"
  return (
    <Layout>
      <div className="flex w-full justify-center items-center py-20 ">
        <AddUserForm text={registerText}/>
      </div>
    </Layout>
  );
};

export default RegisterPage;
