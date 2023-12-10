import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavbarBrand, Table } from "reactstrap";

function NaviBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar
        color="dark"
        dark
        style={{
          paddingTop: "20px",
          textAlign: "center",
          borderRadius: "40px",
          margin: "10px",
          marginBottom: "20px",
          fontSize:"16px"
        }}
      >
        <Container>
          <Table dark responsive>
            <tr>
              <td>
                <Link style={{ textDecoration: "none" }} tag="a" to="/">
                  Home
                </Link>
              </td>
              <td>
                <Link
                  style={{ textDecoration: "none" }}
                  tag="a"
                  to="/add-project"
                >
                  Add Project
                </Link>
              </td>
              <td>
                <Link
                  style={{ textDecoration: "none" }}
                  tag="a"
                  to="/all-projects"
                >
                  All Project
                </Link>
              </td>
              <td>
                <Link style={{ textDecoration: "none" }} tag="a" to="/about-me">
                  About Me
                </Link>
              </td>
            </tr>
          </Table>
        </Container>
      </Navbar>
    </>
  );
}

export default NaviBar;
