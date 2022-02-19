import "./footer.scss";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container containe">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img src="./images/yellowlogo.png" width="200px" />
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
              <br /> <br />
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia <br /> <br />m nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
              veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
              nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
              dolor in hendrerit in vulputate velit esse molestie consequat, vel
              illum dolore eu feugiat nulla facilisis at vero eros et accumsan
              et iusto odio dignissim qui blandit
            </p>
          </div>
          <div
            className="row col-sm-12 col-md-6"
            style={{ maxHeight: "20rem" }}
          >
            <h3>Subscribe to our newsletter</h3>
            <div className="srch_wrpr">
              <div className="srch_sb_cnt ">
                <input
                  type="text"
                  name="text_bar"
                  id=""
                  className="sech_txt_inpt"
                  placeholder="Enter Your Mail"
                />
                <button className="srch_btn">
                  Subscribe <img src="./images/sahm.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="col-xs-9 col-md-6">
              <ul className="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Track Order</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Sell With Us</a>
                </li>
              </ul>
            </div>
            <div className="col-xs-9 col-md-6">
              <ul className="footer-links">
                <li>
                  <img src="./images/face.svg" alt="f" />{" "}
                  <a href="#">/YESHTERY</a>
                </li>
                <li>
                  <img src="./images/li.svg" alt="li" />{" "}
                  <a href="#">/YESHTERY</a>
                </li>
                <li>
                  <img src="./images/insta.svg" alt="Insta" />{" "}
                  <a href="#">/YESHTERY</a>
                </li>
                <li>
                  <img src="./images/twiter.svg" alt="tw" />{" "}
                  <a href="#">/YESHTERY</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container containe">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <p className="copyright-text">
              © 2021 yeshtery, all rights reserved.
            </p>
          </div>

          <div className="col-md-4 col-sm-3 col-xs-12">
            <ul className="social-icons">
              <li>
                <img width="100px" src="./images/cash.png" alt="cash" />
              </li>
              <li>
                <img width="60px" src="./images/visa.png" alt="visa" />
              </li>
              <li>
                <img width="60px" src="./images/master.png" alt="master" />
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-3 col-xs-12">
            <p className="copyright-text">
              © 2021 yeshtery, all rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
