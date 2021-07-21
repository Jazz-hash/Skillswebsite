import React, { Component } from "react"
import pluginStyles from "./Plugin.module.css"
import styles from "./Header.module.css"
import Menu from "../Menu2";
import {Link} from 'gatsby';

export default class Navigation extends Component {
  render() {
    return (
      <nav
        style={{
          backgroundColor: "transparent",
          color: "white",
          position: "absolute",
          top: 0,
          width: "100%",
          zIndex:999,
        }}
        className={`${pluginStyles.dNone} ${pluginStyles.dLgBlock} ${pluginStyles.navbar} ${pluginStyles.navbarExpandLg}`}
      >
        <div className={`${pluginStyles.navbarContainer}`} style={{paddingLeft:20,paddingRight:20}}>
          <Link className={styles.logo} to="/">
            <img src="https://images.ctfassets.net/6y7x6a0he6ux/3KHz62otb9GvG0quUFy7Dv/9ee403ef1f030bda89bdd6f1f7036e7a/4iru_white" alt="logo" />
          </Link>
          <div
            className={`${pluginStyles.collapse} ${pluginStyles.navbarCollapse}`}
            id="navbarSupportedContent"
          >
            <ul className={`${pluginStyles.navbarNav} ${pluginStyles.mlAuto}`}>
            <li className={pluginStyles.navItem}>
                <Link
                  className={`${pluginStyles.navLink} ${pluginStyles.active}`}
                  to="/"
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
    )
  }
}
