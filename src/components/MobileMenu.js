import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import pluginStyles from "./Plugin.module.css";
import styles from "./Header.module.css";

const MobileMenu = (props) => {
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
      <Link className={pluginStyles.navLink} activeClassName={styles.miniActive} to={link.link}>{link.name}</Link>
    </li>
  ));
};

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTestMobileTitleQuery {
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
    render={(data) => <MobileMenu data={data} />}
  />
);
