import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import pluginStyles from "./Plugin.module.css";
import styles from "./Header.module.css";

const Menu = (props) => {
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const {
    data: {
      site: {
        siteMetadata: { menuLinks },
      },
    },
  } = props;
  return menuLinks.map((link) => (
    <li key={link.name} className={`${pluginStyles.navItem} ${styles.navItem}`}>
      <Link className={pluginStyles.navLink} activeClassName={styles.active} to={link.link}>{link.name}</Link>
    </li>
  ));
};

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTestTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => <Menu data={data} />}
  />
);
