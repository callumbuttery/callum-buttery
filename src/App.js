import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import CV from './pages/CV.js';

//NAV stuff
import NavBar from './components/Nav/Navbar.js';
import ScrollToTop from './components/Nav/ScrollToTop.js';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  //init animation package
  useEffect(() => {
    setTimeout(function () { AOS.init(); }, 1000);
  }, [])

  return (
    <div>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/cv" element={<CV />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
