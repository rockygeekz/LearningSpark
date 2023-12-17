import React, { useState } from "react";
import "../css/Header2.css";
const Header2 = () => {
  const [click, setClick] = useState(true);
  return (
    <div className="Header">
      <nav>
        <div className="logo">LOGO</div>
        <div>
          <ul className="links" id={click ? "" : "active"} >
            <li>
              <a href="" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
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
