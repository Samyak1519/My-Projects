import { ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import AllProjects from './Components/AllProjects';
import Header from './HeadFoot/Header';
import Footer from './HeadFoot/Footer';
import AddProject from './Components/AddProject';
import { Col, Container, Row } from 'reactstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NaviBar from './Components/NaviBar';


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <NaviBar />
        <Routes>
          <Route path="/" component={Home} exact />
          <Route path="/add-project" component={AddProject} exact />
          <Route path="/all-projects" component={AllProjects} exact />
          <Route />
        </Routes>
        <Home/>
        {/* <AllProjects /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
