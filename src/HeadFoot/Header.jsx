import React from "react";
import { Link } from "react-router-dom";
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
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none", fontSize: "22px" }}
        >
          <img
            alt="logo"
            src="../../BElogo_Round.jpg"
            style={{
              height: "40px",
              width: "40px",
              marginRight: "10px",
            }}
          />
          BeyondEternity
        </Link>
        BeyondEternity
        <Button color="success">LogIn</Button>
      </Navbar>
    </>
  );
}

export default Header;
