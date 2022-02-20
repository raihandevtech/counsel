import { useState, useCallback, useEffect } from "react";
import { testimonial } from "./data/tsml";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Testimonial() {
  const timeOut = 3000;
  const auto = true;
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === testimonial.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, testimonial]);

  const prevSlide = () => {
    const index =
      activeSlide - 1 < 0 ? testimonial.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, timeOut]);
  return (
    <div className="testimonial">
      <div className="container">
        <div className="testimonial_main container">
          {testimonial.map((item, index) => (
            <div className="testimonial_main_comment">
              <TestimonialComment
                key={index}
                comment={item.comment}
                active={index === activeSlide}
              />
            </div>
          ))}
          <div className="testimonial_main_image">
            {testimonial.map((item, index) => (
              <TestimonialImage
                key={index}
                image={item.img}
                active={index === activeSlide}
              />
            ))}
          </div>
          {testimonial.map((item, index) => (
            <TestimonialName
              key={index}
              item={item}
              active={index === activeSlide}
            />
          ))}
        </div>
        <div className="testimonial_control">
          <div className="testimonial_control_item left" onClick={prevSlide}>
            <ArrowBackIcon className="icon" />
          </div>
          <div className="testimonial_control_item right" onClick={nextSlide}>
            <ArrowForwardIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialComment({ comment, active }) {
  return (
    <div className={`comment ${active ? "active" : ""}`}>
      <p>{comment}</p>
    </div>
  );
}

function TestimonialImage({ image, active }) {
  return (
    <div className="image">
      <div className={`image_single ${active ? "active" : ""}`}>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

function TestimonialName({ item, active }) {
  return (
    <div className={`person ${active ? "active" : ""}`}>
      <div className="person_name">
        <h3>{item.name}</h3>
        <span>{item.occap}</span>
      </div>
    </div>
  );
}

export default Testimonial;
