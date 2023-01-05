import './App.css';
import Home from './pages/Home.js';
import NavBar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
