import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Home';
import AllProjects from './Components/AllProjects';
import Header from './HeadFoot/Header';
import Footer from './HeadFoot/Footer';
import AddProject from './Components/AddProject';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <AllProjects />
      <AddProject />
      <Footer />
    </div>
  );
}

export default App;
