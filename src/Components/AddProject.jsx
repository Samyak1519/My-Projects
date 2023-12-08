import React from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

function AddProject() {
  return (
    <>
      <h1>
        <u>Fill the Details</u>
      </h1>
      <Form className="container" style={{ padding: "10px" }}>
        <FormGroup>
          <Label>Project Title</Label>
          <Input
            type="text"
            placeholder="Project Name"
            id="Title"
            name="Title"
          />
        </FormGroup>

        <FormGroup>
          <Label>Project Description</Label>
          <Input
            type="textarea-200px"
            placeholder="Description"
            id="description"
            name="description"
          />
        </FormGroup>

        <FormGroup>
          <Label>User Name</Label>
          <Input
            type="text"
            placeholder="UserName"
            id="usernme"
            name="username"
          />
        </FormGroup>

        <Container className="text-center">
          <Button color="warning m-1">Clear</Button>
          <Button color="primary m-1">Add Project</Button>
        </Container>
      </Form>
    </>
  );
}

export default AddProject;
