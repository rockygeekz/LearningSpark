import Home from "./components/Home";
import Header from "./components/Header";
import FrontsCards from "./components/FrontsCards";
import Footer from "./components/Footer";
import Aboutus from "./components/About";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <FrontsCards/>
      <Aboutus/>
      <Footer/>
    </div>
  );
}

export default App; 
