import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";
import Hero from './Components/Hero.jsx';
import First from './Components/First.jsx';
import Ready from './Components/Ready.jsx';
import Footer from './Components/Footer.jsx';
import Faq from './Components/Faq.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <First />
      <Ready />
      <Faq />
      <Footer />
    </>
  );
}

export default App;