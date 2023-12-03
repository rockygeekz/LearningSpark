import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import FrontsCards from "./components/FrontsCards";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Profiles from "./components/profiles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <FrontsCards />
                <Footer />
              </>
            }
          ></Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login/userProfile" element={<Profiles />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
