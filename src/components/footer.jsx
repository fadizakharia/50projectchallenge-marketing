import React from "react";
import classes from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={"navbar"} style={{ backgroundColor: "rgb(37, 31, 40)" }}>
        <p style={{ color: "grey", opacity: "0.2" }}>
          Copyright LorimIpsum &#169; 2020
        </p>
      </div>
    </footer>
  );
}
