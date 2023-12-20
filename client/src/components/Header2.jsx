import  { useState } from "react";
import {HashLink as Link} from "react-router-hash-link";
import "../css/Header2.css";
const Header2 = () => {
  const [click, setClick] = useState(true);
  return (
    <div className="Header">
      <nav>
      <li className="logo"><img src="..\Images\logo.png" alt="logo" style={{width:"180px"}}/></li>
        <div>
          <ul className="links" id={click ? "" : "active"} >
            <li>
              <Link to="/#Home" smooth><a href="" className="active">Home</a></Link>
            </li>
            <li>
              <Link to="/#Activities" smooth><a href="">Activities</a></Link>
            </li>
            <li>
              <Link to="/#Overview" smooth><a href="" className="">Overview</a></Link>
            </li>
            <li>
              <Link to="/#Academics" smooth><a href="" className="">Academics</a></Link>
            </li>
            <div className="subNav">
                <ul>
                  <li onClick={()=>navigate("/academics/2018scheme")}>2018 Scheme</li>
                  <li onClick={()=>navigate("/academics/2021scheme")}>2021 Scheme</li>
                  <li onClick={()=>navigate("/academics/2022scheme")}>2022 Scheme</li>
                </ul>
              </div>
          </ul>
        </div>
        <div id="device">
          {/* <i className='fas fa-bars'></i>
                <i className='fas fa-times'></i> */}
          <i
            id="bar"
            className={click ? "fas fa-bars" : "fas fa-times"}
            onClick={() => setClick(!click)}
          ></i>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
