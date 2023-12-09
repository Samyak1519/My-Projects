import { useState } from "react";
import {
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Table,
} from "reactstrap";

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
          borderRadius: "30px",
          margin: "10px",
          marginBottom: "20px",
        }}
      >
        <Container>
          <Table dark>
            <tr>
              <td>
                <NavbarBrand href="/">Home</NavbarBrand>
              </td>
              <td>
                <NavbarBrand href="/add-project">Add Project</NavbarBrand>
              </td>
              <td>
                <NavbarBrand href="/">All Projects</NavbarBrand>
              </td>
              <td>
                <NavbarBrand href="/">About Me</NavbarBrand>
              </td>
            </tr>
          </Table>
        </Container>
      </Navbar>
    </>
  );
}

export default NaviBar;
