import React from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";

function Project({ project }) {
  const deleted = () => toast.error("Project Deleted.");
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
            <Button color="danger m-1" onClick={deleted}>
              Delete
            </Button>
          </Container>
        </CardBody>
      </Card>
    </>
  );
}

export default Project;
