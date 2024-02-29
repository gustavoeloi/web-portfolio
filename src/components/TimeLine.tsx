import timelineElements from "@/components/TimelineElements";

import { Briefcase, GraduationCap } from "lucide-react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "@/components/timeline.css";

const TimeLine = () => {
  const workIconStyles = { background: "#06D6A0", color: "#ffff" };
  const schoolIconStyles = { background: "#f9c74f", color: "#ffff" };

  return (
    <div className="bg-gradient-to-t from-black via-black to-gray-800 py-16">
      <h1
        id="timeline"
        className="text-center text-4xl font-light  text-white font-base mb-16 uppercase tracking-widest"
      >
        TimeLine
      </h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const elementIcon = element.icon === "work";
          const showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={elementIcon ? workIconStyles : schoolIconStyles}
              icon={elementIcon ? <Briefcase /> : <GraduationCap />}
              className={element.className}
            >
              <h3 className="font-base text-xl">{element.title}</h3>
              <h4 className="font-base text-gray-500">{element.location}</h4>
              <p id="description" className="font-base">
                {element.description}
              </p>
              {showButton && (
                <a
                  href={element.buttonHref}
                  target="_blank"
                  className={`bg-teal-400 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-1/2 block float-none ${
                    elementIcon ? "workButton" : ""
                  }`}
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
