import React from "react";

const SkillBar = (props) => {
    const { color, percentage, category } = props;

    const containerStyles = {
        display: "inline-block",
        height: "28px",
        lineHeight: "28px",
        width: "80%",
        backgroundColor: "#e0e0de",
        margin: "0 0 12px 0px",
    };

    const fillerStyles = {
        height: "100%",
        width: `${percentage}%`,
        backgroundColor: color,
        borderRadius: "inherit",
        textAlign: "right",
    };

    const percentageStyles = {
        color: "white",
        display: "inline-block",
        fontWeight: "bold",
        float: "right",
    };

    const categoryStyles = {
        background: "#ff9300",
        color: "#ffffff",
        display: "inline-block",
        float: "left",
        fontWeight: "bold",
        height: "28px",
        lineHeight: "28px",
        width: "20%",
        textAlign: "center",
        verticalAlign: "middle",
    };

    return (
        <React.Fragment>
            <div style={categoryStyles}>{category}</div>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={percentageStyles}>{`${percentage}%`}</span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SkillBar;
