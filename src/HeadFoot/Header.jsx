import React from "react";

function Header({ name }) {
  // (Object Destructuring = {})Passing Name in this Function same like codes. [Props]
  return (
    <>
      <header style={{ backgroundColor: "lavender", paddingTop: "10px" }}>
        <center>
          <h2>Hello {name}</h2> {/* //Using the prameters in this tag. */}
          <p>This is Header Component. </p>
          <hr />
        </center>
      </header>
    </>
  );
}

export default Header;
