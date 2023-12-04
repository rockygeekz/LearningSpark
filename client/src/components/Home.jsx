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
          <div className="flag banner-2"></div>
          <div className="flag banner-3"></div> */}
        </div>
      </>
    );
  };
  
  export default Home;
  