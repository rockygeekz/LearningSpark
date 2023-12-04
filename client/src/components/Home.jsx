<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
    return (
      <>
        <div className="hero-section">
          <div className="hero-text">
            <h1>Ignite Your Learning Spark !!!</h1>
            <h3 className='second' >
            Discover a world of knowledge and growth, fueled by the collective wisdom of your peers.
            </h3>
          <button onClick={()=> navigate("/academics/2022scheme")}>Get started</button>
          </div>
          <div className="hero-images" >
            <img  className="hero-image" src="../images/frontImage.png" alt="frontImage"/>
          </div>
          {/* <div className="flag banner-1"></div>
=======
import { motion } from "framer-motion";
import AnimateHero from "./AnimateHero";
const Home = () => {
  const herotextani = "Ignite Your Learning Spark".split("");
  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          {/* <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Ignite Your Learning Spark
          </motion.h1> */}
          {herotextani.map((letter, index) => {
            return <AnimateHero key={index}>{letter == " "? "\u00A0" : letter}</AnimateHero>;
          })}
          <h3 className="second">
            Discover a world of knowledge and growth, fueled by the collective
            wisdom of your peers.
          </h3>
          <button className="btn">Get started</button>
        </div>
        <div className="hero-images">
          <motion.img
            initial={{ scale: 0, opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.2, rotate: 20, borderRadius: "0%" }}
            whileTap={{
              scale: 0.8,
              rotate: -20,
              borderRadius: "0%",
            }}
            className="hero-image"
            src="../images/frontImage.png"
            alt="book"
          />
        </div>
        {/* <div className="flag banner-1"></div>
>>>>>>> 6a58216247a8f59c512212302abc4136b420462f
          <div className="flag banner-2"></div>
          <div className="flag banner-3"></div> */}
      </div>
    </>
  );
};

export default Home;
