import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Header.module.css";
import pluginStyles from "./Plugin.module.css";
import headImage from "./about.jpg";
import Navigation from "./Navigation";
import video from "./../assets/vid1.mp4";

class Header extends React.Component {
  render() {
    return (
      <>
        <Navigation
        //   style={`${pluginStyles.bgLight} ${pluginStyles.textDark}`}
        />
        <header
          className={`${styles.header} ${styles.valign} ${styles.bgImg} ${styles.miniCreative}`}
          data-scroll-index="0"
          data-overlay-dark="5"
          data-background={headImage}
          data-stellar-background-ratio="0.5"
          style={{ height: 350 }}
        >
          
          {/* This will add zigzag style to header */}
          {/* <div className={styles.svg}>
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
              <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
            </svg>
          </div> */}

          <div className={pluginStyles.container}>
            <div className={pluginStyles.row}>
              <div
                className={`${styles.fullWidth} ${pluginStyles.textCenter} ${styles.caption}`}
              >
                <br />
                <br />
                <br />
                <br />
                <h3 className={`${pluginStyles.textWhite} ${styles.blc}`}>
                  {this.props.siteTitle}
                </h3>
                <h1
                  style={{ fontSize: 2.5 + "rem" }}
                  className={`${styles.clip}  ${styles.adjust} ${pluginStyles.textWhite}`}
                >
                  {this.props.title}
                </h1>
              </div>
            </div>
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
