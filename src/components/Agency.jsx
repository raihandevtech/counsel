import React from "react";

function Agency() {
  return (
    <div className="agency">
      <div className="agency_wrapper container grid grid-col-md-2">
        <div className="agency_wrapper_left">
          <div className="agency_wrapper_left_item">
            <h1>500+</h1>
            <p>We have won the cases</p>
          </div>
          <div className="agency_wrapper_left_item">
            <h1>100+</h1>
            <p>We have received award</p>
          </div>
        </div>
        <div className="agency_wrapper_right">
          <div className="agency_wrapper_right_content">
            <h2>
              We are The Best Law <br /> Firm Agency.
            </h2>
            <p>
              Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
              Aenean vulputate eleifend tellus. Aenean leo ligula
            </p>
            <a className="read-more">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agency;
