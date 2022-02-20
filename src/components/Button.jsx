import { useState } from "react";

function Button(props) {
  const size = props.size ? "btn_" + props.size : "btn_large";
  const color = props.size ? "btn_" + props.color : "btn_trans";

  return (
    <div className="btn">
      <button className={`btn_main ${size} ${color} `}>{props.text}</button>
    </div>
  );
}

export default Button;
