import React from "react";
import classes from "./testimonial.module.css";
export default function Testimonial(props) {
  return (
    <div className="col-12 my-2">
      <div
        className={
          "d-flex align-items-center justify-content-center " +
          (props.reverse ? "flex-row-reverse" : "")
        }
      >
        <img
          width="200px"
          height="200px"
          src={props.image}
          alt="coffee"
          className={classes.Testimonial__Avatar}
        />
        <div className={props.reverse ? "mr-5" : "ml-5"}>
          <h5 className={classes.Testimonial__Entry}>{props.entry}</h5>
          <h6 className={classes.Testimonial__Author}>~{props.author}</h6>
        </div>
      </div>
      <hr />
    </div>
  );
}
