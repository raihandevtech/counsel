import logo from "../assets/images/counsel-footer.png";
import map from "../assets/images/map.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_title">Back to top</div>
      <div className="container">
        <div className="footer_wrapper grid grid-col-md-2">
          <div className="footer_wrapper_left">
            <div className="footer_logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer_wrapper_left_link">
              <ul>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Services</a>
                </li>
                <li>
                  <a>Consultation</a>
                </li>
                <li>
                  <a>Appointment</a>
                </li>
                <li>
                  <a>Suppport</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>News</a>
                </li>
                <li>
                  <a>Laywer</a>
                </li>
                <li>
                  <a>Department</a>
                </li>
                <li>
                  <a>Support</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a>Terms</a>
                </li>
                <li>
                  <a>Privacy</a>
                </li>
                <li>
                  <a>Security</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_wrapper_right">
            <div className="footer_wrapper_right_map">
              <img src={map} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom container">
        <div className="footer_bottom_copy_right">
          © 2021 ALL Right Reserved
        </div>
        <div className="footer_bottom_social_link">
          <ul>
            <li>
              <FacebookIcon className="icon" />
            </li>
            <li>
              <LinkedInIcon className="icon" />
            </li>
            <li>
              <TwitterIcon className="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
