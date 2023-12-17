
import { Link } from "react-router-dom";
import Marks from "./Mark.svg";
import Resources from "./Resources.svg";
import Join from "./Join.svg";
import Promise from "./Promise.svg";

const Aboutus = () => {
  return (
    <div className="about">
      <div className="text-head">About Learning Spark</div>
      <div className="about-boxes">
        <div className="left-about">
          <div className="box-head">
            Who We Are: A Community of Learners, Driven by Passion and Purpose
          </div>
          <div className="box-content">
            At [Your Institution Name], we are more than just an institution of
            higher learning; we are a community of passionate learners, driven
            by a shared pursuit of knowledge, innovation, and a positive impact
            on the world. We are a vibrant tapestry of individuals from diverse
            backgrounds, united by a common desire to explore the world,
            challenge convention, and make a meaningful difference.
          </div>
        </div>
        <div className="right-about">
          <img src={Marks} alt="" className="right-image" />
          {/* <Mark/> */}
        </div>
      </div>
      <div className="about-boxes-2">
        <div className="left-about">
          <div className="box-head">
            Our Resources: Extensive Notes and Study Materials
          </div>
          <div className="box-content-2">
            We understand that engineering students often need access to
            comprehensive notes and study materials to succeed in their courses.
            We have developed an extensive library of notes and study materials
            that are available to all of our students.Whether you're a
            first-year engineering student seeking foundational concepts or a
            senior preparing for complex exams, our comprehensive notes and
            study materials will provide you with the support you need to excel
            in your studies
          </div>
        </div>
        <div className="right-about">
          <img src={Resources} alt="" />
        </div>
      </div>
      <div className="about-boxes">
        <div className="left-about">
          <div className="box-head">
            Our Promise: Empowering Learners, Shaping the Future
          </div>
          <div className="box-content">
            We are committed to providing our students with the tools,
            resources, and unwavering support they need to succeed in their
            academic endeavors and beyond. We believe in nurturing their
            intellectual growth, cultivating their leadership potential, and
            preparing them to make a positive impact on the world.
          </div>
        </div>
        <div className="right-about">
          <img src={Promise} alt="" className="right-image" />
        </div>
      </div>
      <div className="about-boxes-2">
        <div className="left-about">
          <div className="box-head">
            Join Us: Unleash Your Engineering Potential
          </div>
          <div className="box-content">
            We invite you to join our community of engineering learners and
            embark on a journey of intellectual growth, practical experience,
            and a shared commitment to making a difference. Together, we can
            shape the future of engineering and create a more sustainable,
            equitable, and prosperous world.
          </div>
        </div>
        <div className="right-about">
          <img src={Join} alt="" className="right-image" />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
