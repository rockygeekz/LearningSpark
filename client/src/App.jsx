import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import FrontsCards from "./components/FrontsCards";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Aboutus from "./components/About";
import Activities from "./components/Activities"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Notes from "./components/Notes";
import Cards from "./components/Cards.jsx"
import Overview from "./components/Overview.jsx";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Home />
      <FrontsCards />
      <Overview/>
      <Cards/>
      <Activities/>
      <Aboutus/>
      <Footer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
