import React from "react";
// components
import Header from "./components/header-component/Header";
import Footer from "./components/footer-component/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="min-h-screen bg-gray-300">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
