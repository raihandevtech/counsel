import thumb from "../assets/images/success.png";
import shape2 from "../assets/images/shape2.png";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function Success() {
  return (
    <div className="success">
      <div className="container">
        <div className="success_wrapper">
          <div className="success_wrapper_left">
            <div className="success_wrapper_left_video">
              <div className="success_wrapper_left_video_thumb">
                <div className="play_button">
                  <a>
                    <PlayArrowIcon className="icon" />
                  </a>
                </div>
                <img src={thumb} alt="" />
                <div className="success_wrapper_left_video_thumb_lawyer">
                  <div className="success_wrapper_left_video_thumb_lawyer_main">
                    <h4>10+</h4>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="success_wrapper_right">
            <div className="success_wrapper_right_content">
              <div className="success_wrapper_right_content_rate">
                <span className="shape">
                  <img src={shape2} alt="" />
                </span>
                <h1>82%</h1>
              </div>
              <div className="success_wrapper_right_content_text">
                <h4>Our Success Rate</h4>
                <span className="i_mark">i</span>
                <p>
                  Integer tincidunt. Cras dapibus. Vivamus elementum semper
                  nisi. Aenean vulputate eleifend tellus. Aenean leo ligula
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
