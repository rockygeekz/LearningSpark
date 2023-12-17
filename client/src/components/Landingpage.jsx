import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimateHero from "./AnimateHero";
import Header from "./Header";
import Home from "./Home";
import '../css/index.css'

const Landingpage = () => {
  const herotextani = "Ignite Your Learning Spark".split("");
  const navigate = useNavigate();
  return (
    <>
    <div className="land">
      <div className="overlay-vid"></div>
      <video autoPlay muted loop  src="../images/bgvid2.mp4" type="video/mp4"></video>
        <div className="nav-land">
        <Header/>
            </div>
        <Home/>
    </div>
    </>
  );
};

export default Landingpage;
