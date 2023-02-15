import React from "react";
import "../App.css";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className=" mx-3 fs-1">
          <h1 class="navbar-brand">IIDE</h1>
        </div>
        
        
        <div className="Nav ">
          {/* <p className="fa fa-search mx-3"></p>
          <p className="fa fa-bell-o"></p> */}
        </div>
       
      </nav>
    </>
  );
};

export default Navbar;