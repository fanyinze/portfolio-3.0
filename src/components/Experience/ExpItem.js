import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

const contentStyle = {
    background: "#f5f5f5",
    color: "#555",
    border: "2px solid #898b8d",
};

const contentArrowStyle = {
    borderRight: "7px solid #898b8d",
};

const getIconStyle = (type) => {
    return {
        background: getThemeColor(type),
        color: "#fff",
    };
};

const getThemeColor = (type) => (type === "work" ? "#FF9300" : "#00204E");
const getThemeIcon = (type) =>
    type === "work" ? <WorkIcon /> : <SchoolIcon />;

const ExpItem = (props) => {
    const { type, company, position, date, description, skills } = props;

    return (
        <VerticalTimelineElement
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date={date}
            iconStyle={getIconStyle(type)}
            icon={getThemeIcon(type)}
        >
            <h3
                className='vertical-timeline-element-title'
                style={{ color: getThemeColor(type) }}
            >
                {company}
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>{position}</h4>
            <p>{description}</p>

            <div>
                {skills.map((element) => {
                    return (
                        <span
                            className='vertical-timeline-element-skills'
                            style={getIconStyle(type)}
                        >
                            {element}
                        </span>
                    );
                })}
            </div>
        </VerticalTimelineElement>
    );
};

export default ExpItem;
