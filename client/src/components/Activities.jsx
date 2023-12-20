import React from "react";
import "../css/index.css";

import WorkIcon from "./EventsLogo.jsx";
import Events from "./Events.svg";
import timelineElements from "./TimelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
const Activities = () => {
  let Green = { background: "#06D6A0" };
  let yellow = { background: "#E74C3C" };
  return (
    <div className="Activities" id="Activities">
      <h1 className="title">Activites</h1>
      <h2 className="title2">Checkout our recent Activites</h2>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          // let isWorkIcon = element.icon === "work";
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              // iconStyle={isWorkIcon ? Green : yellow}
              iconStyle={yellow}
              // icon={<img src={Events} alt=""/>}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Activities;
