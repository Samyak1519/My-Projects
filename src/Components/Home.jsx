import { Button, Container } from "reactstrap";
// import LogIn from "./LogIn";

function Home() {
  return (
    <>
      <Container>
        <div
          style={{
            backgroundColor: "whitesmoke",
            border: "20px",
            padding: "70px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h1 style={{ paddingBottom: "20px" }}>Welcome to beyondEternity.</h1>

          <hr />
          <p
            style={{
              fontWeight: "2",
              fontSize: "30px",
              paddingTop: "20px",
              paddingBottom: "40px",
            }}
          >
            This is my Website in which I have done few projects to learn by
            myself and created a portfolio. To view them go to "All Projects" or
            click "Next" button below
          </p>
          <Button color="warning" onClick={{}}>
            Next
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Home;
