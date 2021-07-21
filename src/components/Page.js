import React from "react";
import Header from "./SubHeader";
import Footer from "./Footer";
import { Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import "../css/home.css";
import Navigation from "./Navigation";
import pluginStyles from "./Plugin.module.css";
import styles from "./Header.module.css";
import $ from "jquery";

class Component extends React.Component {
  componentDidMount() {
    var big_image;
    var window_width;
    var oVal;
    function debounce(a, r, i) {
      var n;
      return function () {
        var e = this,
          t = arguments;
        clearTimeout(n),
          (n = setTimeout(function () {
            (n = null), i || a.apply(e, t);
          }, r)),
          i && !n && a.apply(e, t);
      };
    }
    var materialKit = {
      misc: {
        navbar_menu_visible: 0,
        window_width: 0,
        transparent: !0,
        colored_shadows: !0,
        fixedTop: !1,
        navbar_initialized: !1,
        isWindow: document.documentMode || /Edge/.test(navigator.userAgent),
      },
      checkScrollForParallax: function () {
        (oVal = $(window).scrollTop() / 3),
          big_image.css({
            transform: "translate3d(0," + oVal + "px,0)",
            "-webkit-transform": "translate3d(0," + oVal + "px,0)",
            "-ms-transform": "translate3d(0," + oVal + "px,0)",
            "-o-transform": "translate3d(0," + oVal + "px,0)",
          });
      },
    };
    $(document).ready(function () {
      (window_width = $(window).width()),
        768 <= window_width &&
          0 != (big_image = $('.page-header[data-parallax="true"]')).length &&
          $(window).on("scroll", materialKit.checkScrollForParallax);
    });

    {
      const url = typeof window !== "undefined" ? window.location.pathname : "";
    }
  }
  render() {
    return (
      <React.Fragment>
        <Navigation />

        {this.url !== "/" ? (
          this.props.title ? (
            <div className="page-header header-filter header-small" data-parallax="true">
              <div className={styles.overlay}></div>

              <div className={pluginStyles.container} style={{ zIndex: 99 }}>
                <div className={pluginStyles.row}>
                  <div
                    className={`${styles.fullWidth} ${pluginStyles.textCenter} ${styles.caption}`}
                  >
                    <h3
                      className={`${pluginStyles.textWhite} ${styles.blc}`}
                      style={{
                        fontWeight: "bold",
                        fontSize: "13px !important",
                      }}
                    >
                      We are 4IRU
                    </h3>
                    <h1
                      className={`${styles.cdHeadline} ${styles.clip} ${pluginStyles.textWhite}`}
                    >
                      {this.props.title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Header title={null} />
          )
        ) : (
          ""
        )}
        <div class="main main-raised">
         
            {this.props.children}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Component);
