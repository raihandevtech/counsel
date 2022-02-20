import React from "react";
import Button from "./Button";

function FindLawyer() {
  return (
    <div className="find_lawyer">
      <div className="find_lawyer_wrapper container grid grid-col-md-2">
        <div className="find_lawyer_wrapper_left">
          <h2>
            Find The Best and <br />
            Expert Lawyer For <br />
            Your Case
          </h2>
        </div>
        <div className="find_lawyer_wrapper_right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            illum eaque veniam optio magnam minima corporis, dolorum sapiente
            voluptatem! Eaque?
          </p>
          <Button text="Find a Lawyer" color="orange" size="medium" />
        </div>
      </div>
    </div>
  );
}

export default FindLawyer;
