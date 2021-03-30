import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function NavBar() {
  const [{ basket }, dispatch] = useStateValue();



  return (
    <div className="navbar">
      <Link to="/">
        <h1>Noodles Store </h1>
      </Link>
     
    </div>
  );
}

export default NavBar;
