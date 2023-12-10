import { ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import AllProjects from './Components/AllProjects';
import Header from './HeadFoot/Header';
import Footer from './HeadFoot/Footer';
import AddProject from './Components/AddProject';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NaviBar from './Components/NaviBar';
import { Container } from 'reactstrap';
import AboutMe from './Components/AboutMe';



function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <NaviBar />

        <Container style={{ backgroundColor: "whitesmoke", borderRadius: "20px", padding: "35px" }}>
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="/add-project" Component={AddProject} exact />
            <Route path="/all-projects" Component={AllProjects} exact />
            <Route />
            <Route path="/about-me" Component={AboutMe} exact />
          </Routes>
        </Container>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
