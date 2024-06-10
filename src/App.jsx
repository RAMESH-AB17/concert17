import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import Blog from './components/Blog';
import Event from './components/Event';
import Gallery from './components/Gallery';
import Myfooter from './components/Myfooter';
function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Aboutus />
      <Blog/>
      <Event/>
      <Gallery/>
      <Contact />
      <Myfooter/>
    </>
  )
}

export default App;
