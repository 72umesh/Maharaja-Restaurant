import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";

import SpecialMenu from "./components/Menu/SpecialMenu";
import Awards from "./components/Awards/Awards";
import Gallery from "./components/Gallery/Gallery";
import FindUs from "./components/FindUs/FindUs";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {

  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>

      <SpecialMenu/>
      <Awards/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </div>
  )
}
export default App;
