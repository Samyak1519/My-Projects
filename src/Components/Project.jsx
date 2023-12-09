import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";

function Project({ project }) {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>
            <h2>{project.title}</h2>
          </CardTitle>
          <CardText>{project.description}</CardText>

          <Container>
            <Button color="primary m-1">View</Button>
            <Button color="warning">Update</Button>
            <Button color="danger m-1">Delete</Button>
          </Container>
        </CardBody>
      </Card>
    </>
  );
}

export default Project;
