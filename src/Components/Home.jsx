import Footer from "../HeadFoot/Footer";
import Header from "../HeadFoot/Header";
import Project from "./Project";
// import LogIn from "./LogIn";

function Home() {
  return (
    <>
      <Header name="Samyak" />

      <h1 className="container">Home page</h1>
      <hr />
      {/* //Passing the Name to the function to header  */}
      <Project
        project={{
          title: "Project 1.",
          description: "This is light project in J.S.",
        }}
      />
      <Project
        project={{
          title: "Project 2.",
          description: "This is Find Treasure in J.S.",
        }}
      />
      <Footer />
    </>
  );
}

export default Home;
