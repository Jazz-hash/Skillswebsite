import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Header.module.css";
import pluginStyles from "./Plugin.module.css";
import headImage from "./about.jpg";
import Navigation from "./Navigation";
import video from "../../assets/video.mp4";

class Header extends React.Component {
  componentDidMount() {
    var TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = this.txt;

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };
    function name() {
      const elements = document.getElementsByClassName("is-visible");
      var toRotate = elements[0].getAttribute("data-rotate");
      var period = elements[0].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[0], JSON.parse(toRotate), period);
      }
    }
    name();
  }
  render() {
    return (
      <>
        <Navigation />
        <header
          className={`${styles.header} ${styles.valign} ${styles.bgImg} ${styles.creative}`}
          data-scroll-index="0"
          data-overlay-dark="5"
          data-background={headImage}
          data-stellar-background-ratio="0.5"
        >
         
          {/* !! Remove this to set picture as background */}
          {/*  */}
          <div className={styles.overlay}>
          </div>
          <video autoPlay muted loop>
            <source
              src={video}
              type="video/mp4"
            />
          </video>
         

          <div className={styles.svg}>
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
              <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
            </svg>
          </div>

          <div className={pluginStyles.container}>
            <div className={pluginStyles.row}>
              <div
                className={`${styles.fullWidth} ${pluginStyles.textCenter} ${styles.caption}`}
              >
                <h3 className={`${pluginStyles.textWhite} ${styles.blc}`}>
                  {this.props.siteTitle}
                </h3>
                <h1
                  className={`${styles.cdHeadline} ${styles.clip} ${pluginStyles.textWhite}`}
                >
                  <span className={styles.blc}>The Way Of&nbsp;</span>
                  <span className={styles.cdWordsWrapper}>
                    <b
                      className={`${styles.isVisible} is-visible`}
                      data-period="1000"
                      data-rotate='[ "learning.", "dream.", "success."]'
                    ></b>
                  </span>
                </h1>
                <p className={styles.blc}>
                  A single place to share, curate and discover visual that tells
                  a story.
                </p>
                {/* <a
                  href="#0"
                  className={`${pluginStyles.textWhite} ${styles.butn}`}
                >
                  <span>Learn More</span>
                </a> */}
                <a
                  href="#0"
                  className={`${pluginStyles.textWhite} ${styles.butn} ${styles.butnBg}`}
                >
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.arrow}>
            <a href="#" data-scroll-nav="1">
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </header>
      </>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `We are 4IRU`,
};

export default Header;
