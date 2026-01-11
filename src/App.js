import React from 'react';
import { HashRouter as Router} from 'react-router-dom';
import './App.css';

import NavBar from './Components/Navbar';
import Home from './Components/Parts/Home';
import About from './Components/Parts/About';
import Portfolio from './Components/Parts/Portfolio';
import Contact from './Components/Parts/Contact';
import Media from './Components/Parts/Media';

import divider from './SourceFiles/divider.svg'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <div id='Home'>
            <Home />
        </div>
         <div id='About'>
            <About />
        </div>
            <div class='divider-container'>
        <img class='divider' src={divider} alt="A cool img"/>
    </div>

        <div id='Media'>
            <Media />
        </div>
        <div id='Portfolio'>
            <Portfolio />
        </div>
        <div id='Contact'>
            <Contact />
        </div>       
      </Router>
    </div>
  );
}

export default App;
