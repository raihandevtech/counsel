import { useState } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Data } from "./data/faq";

function Services() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="services">
      <div className="services_wrapper container grid grid-col-md-2">
        <div className="services_wrapper_left">
          <h2>Practice Areas and Services</h2>
          <p>
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
            Aenean vulputate eleifend Integer tincidunt. Cras dapibus. Vivamus
          </p>
          <a className="read-more">Learn More</a>
        </div>
        <div className="services_wrapper_right">
          <ul className="services_wrapper_right_law">
            {Data.map((item, index) => {
              return (
                <li className="services_wrapper_right_law_list">
                  <h4
                    onClick={() => toggle(index)}
                    className={`${clicked === index && "active"}`}
                  >
                    <span className="count">
                      {index === 0 ? 1 : index + 1}.
                    </span>
                    {item.question}
                    <span className="arrow">
                      <ArrowForwardIcon className="icon" />
                    </span>
                  </h4>
                  {clicked === index ? (
                    <p className="desc">{item.answer}</p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
