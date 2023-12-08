import { Button, Label } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

function LogIn() {
  const success = () =>
    toast.success("LogIn Succesful...", { position: "top-right" }); //Message in Toast success
  const failed = () => toast.error("Failed, Try Again"); //For Failed

  return (
    <>
      <ToastContainer /> {/* //Using this for Toast Box */}
      <div
        className="container"
        style={{
          backgroundColor: "whitesmoke",
          width: "28%",
          padding: "25px",
          marginTop: "80px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h2>LogIn...</h2>
        <hr />

        <Label>
          Email
          <input type="email" placeholder="Email"></input>
        </Label>
        <Label>
          Password
          <input type="text" placeholder="Password"></input>
        </Label>
        <hr />

        <Button color="success" onClick={success} style={{ margin: "2px" }}>
          Log In
        </Button>
        <Button color="danger" onClick={failed} style={{ margin: "2px" }}>
          Log Out
        </Button>
        <p>New User? Register Now</p>
      </div>
    </>
  );
}

export default LogIn;
