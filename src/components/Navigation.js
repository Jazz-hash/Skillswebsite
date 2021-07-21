import React from "react";
import pluginStyles from "./Plugin.module.css";
import styles from "./Header.module.css";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { Link } from "gatsby";
import IconButton from "@material-ui/core/IconButton";
import { Menu as MenuIcon, ChevronUp } from "mdi-material-ui";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import "../css/home.css";
import logoDark from '../assets/logo_dark.png';
import $ from "jquery";


const CopyRight = () => {
  return (
    <>
      <div className={pluginStyles.textCenter} style={{ padding: 8 }}>
        <Typography component="p" variant="caption">
          ©{new Date().getFullYear()} {"Copyright: Skills Online "}
        </Typography>
      </div>
    </>
  );
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false,
    };
  }

  list = (anchor) => (
    <div
      role="presentation"
      onClick={() => this.setState({ ...this.state, anchor: false })}
      onKeyDown={() => this.setState({ ...this.state, anchor: false })}
    >
      <div
        className={pluginStyles.textCenter}
        style={{ backgroundColor: "black", color: "white", width: 100 + "%" }}
      >
        <Link className={styles.logo} style={{ padding: "15px 0" }} to="/">
          <img
            src="https://images.ctfassets.net/6y7x6a0he6ux/3KHz62otb9GvG0quUFy7Dv/9ee403ef1f030bda89bdd6f1f7036e7a/4iru_white"
            alt="logo"
          />
        </Link>
        <IconButton
          style={{
            position: "absolute",
            top: 25,
            left: 10,
            zIndex: 999,
          }}
          onClick={() => this.setState({ ...this.state, "top": false })}
        >
          <ChevronUp
            style={{ color: "white" }}
            // className={this.url === "/" ? "dotHome" : "dotsVerticalIcon"}
          />
        </IconButton>
        <Divider />
        <List>
          <li className={`${pluginStyles.navItem} ${styles.navItem}`}>
            <Link
              className={pluginStyles.navLink}
              activeClassName={styles.miniActive}
              to="/"
            >
              Home
            </Link>
          </li>
          <MobileMenu />
        </List>
        <br />
        <CopyRight />
      </div>
    </div>
  );

  componentDidMount() {
    var navbar;
    var scroll_distance;

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

      checkScrollForTransparentNavbar: debounce(function () {
        $(document).scrollTop() > scroll_distance
          ? materialKit.misc.transparent &&
            ((materialKit.misc.transparent = !1),
            $(".navbar-color-on-scroll").removeClass(`navbar-transparent`),
            $(".navbar-color-on-scroll").addClass("navbar-color"),
            $(".menuButton").css({color:"black"}),
                  $(".logoMain").attr("src",`${logoDark}`))

          : materialKit.misc.transparent ||
            ((materialKit.misc.transparent = !0),
            $(".navbar-color-on-scroll").removeClass("navbar-color"),
            $(".navbar-color-on-scroll").addClass(`navbar-transparent`),
            $(".menuButton").css({color:"white"}),
            $(".logoMain").attr("src","https://images.ctfassets.net/6y7x6a0he6ux/3KHz62otb9GvG0quUFy7Dv/9ee403ef1f030bda89bdd6f1f7036e7a/4iru_white"))

            ;
      }, 17),
    };
    $(document).ready(function () {
      (navbar = $(".navbar[color-on-scroll]")),
        (scroll_distance = navbar.attr("color-on-scroll") || 100),
        0 != $(".navbar-color-on-scroll").length &&
          $(window).on("scroll", materialKit.checkScrollForTransparentNavbar),
        materialKit.checkScrollForTransparentNavbar();
    });

    {
      const url = typeof window !== "undefined" ? window.location.pathname : "";
    }
  }

  render() {
    return (
      <>
        <nav
          style={{
            color: "white",
            position: "absolute",
            top: 0,
            width: "100%",
            zIndex: 999,
            borderBottom: "0.7px solid rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
          color-on-scroll="100"
          className={`${pluginStyles.navbar} navbar-color-on-scroll ${pluginStyles.fixedTop} ${pluginStyles.navbarExpandLg}`}
        >
          <div
            className={`${pluginStyles.navbarContainer}`}
            style={{ paddingLeft: 20, paddingRight: 20, width: 100 + "%" }}
          >
            <div className={`${pluginStyles.dNone} ${pluginStyles.dLgBlock}`}>
              <Link className={styles.logo} to="/">
                <img
                  src="https://images.ctfassets.net/6y7x6a0he6ux/3KHz62otb9GvG0quUFy7Dv/9ee403ef1f030bda89bdd6f1f7036e7a/4iru_white"
                  alt="logo"
                  className="logoMain"
                />
              </Link>
            </div>
            <div
              className={`${pluginStyles.dBlock} ${pluginStyles.textCenter} ${pluginStyles.dLgNone}`}
              style={{ width: 100 + "%" }}
            >
              <Link className={styles.logo} to="/">
                <img
                  src="https://images.ctfassets.net/6y7x6a0he6ux/3KHz62otb9GvG0quUFy7Dv/9ee403ef1f030bda89bdd6f1f7036e7a/4iru_white"
                  alt="logo"
                  className="logoMain"

                />
              </Link>
              <IconButton
                style={{
                  position: "absolute",
                  top: 15,
                  left: 10,
                  zIndex: 999,
                }}
                onClick={() => this.setState({ ...this.state, "top": true })}
              >
                <MenuIcon
                  className="menuButton"
                  style={{color:"white"}}
                />
              </IconButton>
              <Drawer
                anchor={"top"}
                open={this.state["top"]}
                onClose={() => this.setState({ ...this.state, "top": false })}
              >
                {this.list("top")}
              </Drawer>
            </div>
            <div
              className={`${pluginStyles.dNone} ${pluginStyles.dLgBlock} ${pluginStyles.extraCollapse} ${pluginStyles.navbarCollapse}`}
            >
              <ul
                className={`${pluginStyles.navbarNav} ${pluginStyles.mlAuto}`}
                style={{ zIndex: 99 }}
              >
                <li className={`${pluginStyles.navItem} ${styles.navItem}`}>
                  <Link
                    className={pluginStyles.navLink}
                    to="/"
                    activeClassName={styles.active}
                    data-scroll-nav="0"
                  >
                    Home
                  </Link>
                </li>
                <Menu />
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Navigation;
