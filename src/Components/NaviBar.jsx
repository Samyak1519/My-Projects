import { useState } from "react";
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
          paddingTop: "15px",
          textAlign: "center",
          borderRadius: "40px",
          margin: "10px",
          marginBottom: "20px",
        }}
      >
        <Container>
          <Table dark responsive>
            <tr>
              <td>
                <NavbarBrand href="/">Home</NavbarBrand>
              </td>
              <td>
                <NavbarBrand href="/add-project">Add Project</NavbarBrand>
              </td>
              <td>
                <NavbarBrand href="/all-projects">All Projects</NavbarBrand>
              </td>
              <td>
                <NavbarBrand href="/about-me">About Me</NavbarBrand>
              </td>
            </tr>
          </Table>
        </Container>
      </Navbar>
    </>
  );
}

export default NaviBar;
