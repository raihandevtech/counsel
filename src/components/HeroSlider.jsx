import React from "react";
import Button from "./Button";
import StarIcon from "@material-ui/icons/Star";
import ceo from "../assets/images/ceo.png";
import shape1 from "../assets/images/shape1.png";
import teacher1 from "../assets/images/teacher2.jpg";
import teacher2 from "../assets/images/teacher3.jpg";
import teacher3 from "../assets/images/teacher3.jpg";
import shape2 from "../assets/images/shape2.png";

function HeroSlider() {
  return (
    <div className="hero_slider">
      <img className="shape1 shape" src={shape2} alt="" />
      <img className="shape2 shape" src={shape2} alt="" />
      <img className="shape3 shape" src={shape2} alt="" />
      <div className="hero_slider_wrapper">
        <div className="hero_slider_wrapper_left">
          <span className="law">Law</span>
          <h1 className="title">
            No Case too <br /> Big, No Case <br /> too Small
          </h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nihil quos dolor saepe soluta cum praesentium ducimus a harum enim.
          </p>
          <div className="hero_slider_wrapper_left_btn">
            <div className="button">
              <Button size="large" color="orange" text="Our Services" />
            </div>
            <div className="button">
              <Button text="Request A Call" />
            </div>
          </div>
        </div>
        <div className="hero_slider_wrapper_right">
          <span className="shape4">
            <img src={shape1} alt="" />
          </span>
          <div className="review">
            <div className="review_single">
              <img src={teacher1} alt="" />
              <img src={teacher2} alt="" />
              <img src={teacher3} alt="" />
            </div>
            <div className="review_counts">
              <p>10K+ Clients</p>
              <div className="review_counts_rating">
                <StarIcon className="star" />
                <span>4.7</span>
              </div>
            </div>
          </div>

          <div className="ceo">
            <div className="ceo_bg"></div>
            <div className="ceo_img">
              <img src={ceo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
