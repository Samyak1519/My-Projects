import React, { useState } from "react";
import Project from "./Project";
import { Container } from "reactstrap";

function AllProjects() {
  // This UseState is to store the data in key Value pair and use it in below using map function.
  const [projects, setProjects] = useState([
    { title: "Project 1", description: "This is Light Project." },
    { title: "Project 2", description: "This is Treasure Game." },
  ]);

  return (
    <>
      <h1>All Projects</h1>
      <p>List of Projects are as Follows :-</p>
      <Container>
        {projects.length > 0
          ? projects.map((item) => <Project project={item} />)
          : "No project"}
      </Container>
    </>
  );
}

export default AllProjects;
