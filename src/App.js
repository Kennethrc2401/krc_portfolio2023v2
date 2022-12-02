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
import WSPGallery from './components/WSPGallery';

function App() {
  const galleryImages = [
    {
      img: 'https://kennethrc2401.github.io/Kenneth-s_Portfolio/resources/images/Dasmoto.png'
    },
    {
      img: 'https://kennethrc2401.github.io/Kenneth-s_Portfolio/resources/images/Dasmoto.png'
    },
    {
      img: 'https://kennethrc2401.github.io/Kenneth-s_Portfolio/resources/images/Dasmoto.png'
    },
    {
      img: 'https://kennethrc2401.github.io/Kenneth-s_Portfolio/resources/images/Dasmoto.png'
    },
    {
      img: 'https://kennethrc2401.github.io/Kenneth-s_Portfolio/resources/images/Dasmoto.png'
    },
    {
      img: 'https://kennethrc2401.github.io/Kenneth-s_Portfolio/resources/images/Dasmoto.png'
    }
  ]

  return (
    <div className="App">
      <Navbar />
      {/* <ProjectGrid /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <WSPGallery
        galleryImages={galleryImages}
      />
    </div>
  );
}

export default App;
