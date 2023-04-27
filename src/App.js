import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import CV from './pages/CV.js';
import NavBar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <NavBar/>
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
