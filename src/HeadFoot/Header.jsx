import React from "react";
import { Button, Navbar, NavbarBrand } from "reactstrap";

function Header({ name }) {
  // (Object Destructuring = {})Passing Name in this Function same like codes. [Props]
  return (
    <>
      {/* <header style={{ backgroundColor: "lavender", paddingTop: "10px" }}>
        <center>
          <h2>Hello {name}</h2> {/* //Using the prameters in this tag. */}
      {/* <p>This is Header Component. </p>
          <hr />
        </center>
      </header> */}

      <Navbar className="mb-1" color="dark" dark style={{ padding: "13px" }}>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src=".\Images\belogo2.jpg"
            style={{ height: "40", width: "40", marginRight: "10px" }}
          />
          beyondEternity
        </NavbarBrand>
        <Button color="success">LogIn</Button>
      </Navbar>
    </>
  );
}

export default Header;
