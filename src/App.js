import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Navigation/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './Navigation/Navbar.js';
// https://mui.com/material-ui/material-icons/
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// Navbar Instructions: https://retool.com/blog/building-a-react-navbar/
import ProjectGrid from './components/projectGrid/projectGrid.js';
import { About } from './components/about/about.js';
import { Footer } from './components/footer/footer.js';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <ProjectGrid />
      <br></br>
      <About />
      <br></br>
      <Footer />
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
