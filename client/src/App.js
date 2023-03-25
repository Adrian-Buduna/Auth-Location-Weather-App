import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, UserPage, RegisterPage, LoginPage } from "./pages";
// permisions
import { PriveteRoute, RestrictedRoute } from "./permisions";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PriveteRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Route>

        <Route element={<RestrictedRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
