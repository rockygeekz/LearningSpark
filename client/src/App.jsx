import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import FrontsCards from "./components/FrontsCards";
import Footer from "./components/Footer";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Home />
      <FrontsCards />
      <Footer />
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
