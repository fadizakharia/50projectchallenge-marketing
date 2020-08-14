import React, { Component, Fragment } from "react";

import {
  faCheckCircle,
  faShippingFast,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import lorcoffee from "./assets/img/lorcoffee.png";
import coffee from "./assets/img/coffee.jpg";
import classes from "./index.module.css";

import Testimonial from "../components/testimonial";
import FeatureCard from "../components/featureCard";
import Footer from "../components/footer";
class Index extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid p-0" style={{ color: "white" }}>
          <div
            className="jumbotron jumbotron-fluid p-2"
            style={{ backgroundColor: "#352D39" }}
          >
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <img
                  width="350px"
                  height="350px"
                  src={lorcoffee}
                  alt="coffee"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.cardBox + " container d-block"}>
          <div className="row text-center mb-5">
            <div className="col-12 col-sm-4">
              <FeatureCard
                icon={faCheckCircle}
                text={
                  "quality to us is considered of the highest priority and so we pride ourselves with our quality assurance"
                }
                title={"Quality Guaranteed"}
              />
            </div>

            <div className="col-12 col-sm-4">
              <FeatureCard
                icon={faShippingFast}
                text={
                  "our products are shipped within 3 days to be delivered as soon as possible with no delay"
                }
                title={"super fast"}
              />
            </div>
            <div className="col-12 col-sm-4">
              <FeatureCard
                icon={faGlobe}
                title={"worldwide shipping"}
                text={
                  "delivery is available to all countries around the world with the only exception of the ones that forbid us to do so"
                }
              />
            </div>
          </div>
        </div>

        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(53, 45, 57)", color: "white" }}
        >
          <h1 className={classes.Testimonial__Title}>Testimonials</h1>
          <div className="row">
            <Testimonial
              image={coffee}
              entry="definetly will order again very proffessional!"
              author="john doe"
            />
            <Testimonial
              image={coffee}
              entry="I haven't felt so energetic in a long time!"
              author="john doe"
              reverse
            />
            <Testimonial
              image={coffee}
              entry="THE best coffee i've ever tasted!"
              author="john doe"
            />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Index;
