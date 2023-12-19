import React from "react";
import Slider from "react-slick";
import "../css/slider.css"


function SliderPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    <Slider {...settings}/>
    <div className="Slider-academics">
              <h1>Academics</h1>
              <table className="studentAcademics">
                <tr>
                  <td>CURRENT SEM</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>TOTAL MARKS</td>
                  <td>715/800</td>
                </tr>
                <tr>
                  <td>SGPA</td>
                  <td>9.6</td>
                </tr>
              </table>
            </div>
            <div className="slider-results">
              <h1>PREV. SEM SGPAs</h1>
              <table className="studentResults">
                <tr>
                  <td>1st SEM</td>
                  <td>9.7</td>
                </tr>
                <tr>
                  <td>2nd SEM</td>
                  <td>9.3</td>
                </tr>
                <tr>
                  <td>3rd SEM</td>
                  <td>9.6</td>
                </tr>
                <tr>
                  <td>CGPA</td>
                  <td>9.5</td>
                </tr>
              </table>
            </div>
            <div className="slider-classRanks slider-rankings">
              <h1>CLASS RANKS</h1>
              <table className="studentRanks">
                <tr>
                  <td style={{ fontSize: "30px" }}>🥇</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "30px" }}>🥈</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "30px" }}>🥉</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
              </table>
            </div>
            <div className="slider-vtuRanks slider-rankings">
              <h1>UNIVERSITY RANKS</h1>
              <table className="studentRanks">
                <tr>
                  <td style={{ fontSize: "30px" }}>🥇</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "30px" }}>🥈</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "30px" }}>🥉</td>
                  <td>
                    <div className="nameAndUsn">
                      <h4>Nikhil</h4>
                      <span>1BI22IS071</span>
                    </div>
                  </td>
                  <td>715</td>
                </tr>
              </table>
            </div>
      
    </>
  )
}

export default SliderPage
