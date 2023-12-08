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
        <CardBody className="text-center">
          <CardTitle>{project.title}</CardTitle>
          <CardText>{project.description}</CardText>

          <Container>
            <Button color="primary m-1">View</Button>
            <Button color="danger m-1">Delete</Button>
          </Container>
        </CardBody>
      </Card>
    </>
  );
}

export default Project;
