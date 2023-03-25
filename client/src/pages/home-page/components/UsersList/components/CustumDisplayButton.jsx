import React from "react";
import { Link } from "react-router-dom";

const CustumDisplayButton = ({ id }) => {
  return <Link to={`/user/${id}`}>Details</Link>;
};

export default CustumDisplayButton;
