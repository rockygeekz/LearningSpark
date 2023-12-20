import React from "react";

import {HashLink as Link} from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import "../css/home2.css";

function Header() {
  const [click, setClick] = React.useState(false);
  let [isActive, setActive] = React.useState({
    home: true,
    activites: false,
    academics: false,
    overview: false,
  });
  let navigate = useNavigate();
  return (
   <>
   <div className="gridContainer">
    <div>
          <img src="..\Images\logo.png" alt="logo" className="spark" />
        </div>

        <nav>
          <ul>
            <div className="hamburger">
              <i
                id="bar"
                onClick={() => {
                  setClick(!click)

                }
                }
                className={click ? "fas fa-times fa-2x":"fas fa-bars fa-2x"}
              ></i>
            </div>
            <div className="visibility">
            
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, home: true, activites: false,overview:false,academics:false });
                }}
                className={isActive.home ? "under" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setActive({...isActive, home: false, activites: true,overview:false,academics:false });

                }}
                className={isActive.activites ? "under" : ""}
              >
                Activites
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, home: false, activites: false,overview:true,academics:false });

                }}
                className={isActive.overview ? "under" : ""}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setActive({...isActive, home: false, activites: false,overview:false,academics:true  });

                }}
                className={isActive.academics ? "under" : ""}
              >
                Academics
              </a>
            </li>
            <li>
              <button className="h-logout" onClick={() => navigate("/")}>
                Login
              </button>
            </li>
            </div>
          </ul>
          <div style={{"display": click ? "block": "none"}} className="dropdown-menu">
          <li onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, home: true, activites: false,overview:false,academics:false  });
                  setClick(false);
                }}
                
                >
              <a
                href=""
                className={isActive.home ? "color" : ""}
              >
                Home
              </a>
            </li>
          <li onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, home: false, activites: true,overview:false,academics:false  });
                  setClick(false);
                }}
                
                >
              <a
                href=""
                className={isActive.activites ? "color" : ""}
              >
                Activites
              </a>
            </li>
          <li onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, home: false, activites: false,overview:false,academics:true  });
                  setClick(false);
                }}
                
                >
              <a
                href=""
                className={isActive.academics ? "color" : ""}
              >
                Academics
              </a>
            </li>
          <li onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, home: false, activites: false,overview:true,academics:false  });
                  setClick(false);
                }}
                
                >
              <a
                href=""
                className={isActive.overview ? "color" : ""}
              >
                Overview
              </a>
            </li>
          
            </div>
        </nav>
        </div>
   </>
  )
}

export default Header
