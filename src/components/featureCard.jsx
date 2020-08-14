import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./featureCard.module.css";
export default function FeatureCard(props) {
  return (
    <div
      className="card border-0 mb-5"
      style={{ width: "100%", height: "100%" }}
    >
      <FontAwesomeIcon
        style={{ width: "100%" }}
        icon={props.icon}
        size="5x"
        className={classes.Features__Icon}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text d-block">{props.text}</p>
      </div>
    </div>
  );
}
