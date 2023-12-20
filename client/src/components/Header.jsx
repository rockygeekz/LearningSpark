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
            <Link to="/#Home" onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, home: true, activites: false,overview:false,academics:false });
                }}
                className={isActive.home ? "under" : ""} smooth>Home</Link> 
            </li>
            <li>
            <Link to="/#Activities" onClick={(e) => {
                  e.preventDefault();
                  setActive({...isActive, home: false, activites: true,overview:false,academics:false });

                }}
                className={isActive.activites ? "under" : ""} smooth>Activities</Link>
            </li>
            <li>
            <Link to="/#Overview" onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, home: false, activites: false,overview:true,academics:false });

                }}
                className={isActive.overview ? "under" : ""} smooth>Overview</Link>
            </li>
            <li>
            <Link to="/academics/2022scheme" smooth><a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setActive({...isActive, home: false, activites: false,overview:false,academics:true  });

                }}
                className={isActive.academics ? "under" : ""}
              >
                Academics
              </a></Link>
            </li>
            <li>
              <button className="h-logout" onClick={()=>navigate("/login")}>
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
              <Link to="/#Home" smooth><a
                href=""
                className={isActive.home ? "color" : ""}
              >
                Home
              </a></Link>
            </li>
          <li onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, home: false, activites: true,overview:false,academics:false  });
                  setClick(false);
                }}
                
                >
             <Link to="/#Activities" smooth> <a
                href=""
                className={isActive.activites ? "color" : ""}
              >
                Activites
              </a></Link>
            </li>
          <li onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, home: false, activites: false,overview:false,academics:true  });
                  setClick(false);
                }}
                
                >
              <Link to="/academics/2022scheme" smooth><a
                href=""
                className={isActive.academics ? "color" : ""}
              >
                Academics
              </a></Link>
            </li>
          <li onClick={(e) => {
                  e.preventDefault();
                  setActive({ ...isActive, home: false, activites: false,overview:true,academics:false  });
                  setClick(false);
                }}
                
                >
             <Link to="/#Overview" smooth> <a
                href=""
                className={isActive.overview ? "color" : ""}
              >
                Overview
              </a></Link>
            </li>
          
            </div>
        </nav>
        </div>
   </>
  )
}

export default Header
