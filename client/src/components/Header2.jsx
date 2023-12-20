import  { useState } from "react";
import {HashLink as Link} from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import "../css/Header2.css";
const Header2 = () => {
  const [click, setClick] = useState(true);
  let navigate = useNavigate();
  return (
    <div className="Header">
      <nav className="nav">
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
              <Link to="/academics/2022scheme" smooth><a href="" className="">Academics</a></Link>
            </li>
            <li className="liNavBtn"> <div className="divBox"> <svg width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg></div></li><li><button className="navBtn" onClick={()=>navigate("/login")} >Login</button></li>
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
