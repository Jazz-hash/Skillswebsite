import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";
import homeStyles from "./Header.module.css";
import pluginStyles from "./Plugin.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Facebook, Twitter, Whatsapp } from "mdi-material-ui";

const styles = (theme) => ({
  footer: {
    marginTop: "200px",
    color: "white",
  },
});

const CopyRight = () => {
  return (
    <>
      <div
        className={pluginStyles.textCenter}
        style={{ backgroundColor: "#222423", padding: 8 }}
      >
        <Typography component="body2" variant="caption">
          ©{new Date().getFullYear()} {"Copyright: Skills Online "}
        </Typography>
      </div>
    </>
  );
};

const Footer = withStyles(styles)((props) => {
  const {
    data: {
      site: {
        siteMetadata: { menuLinks, title, contact },
      },
    },
  } = props;

  return (
    <div className={props.classes.footer}>
      <div className={homeStyles.footerCreativeSvg}>
        <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
          <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon>
        </svg>
      </div>

      <footer
        className={`${homeStyles.footerCreative} ${homeStyles.valign}  ${homeStyles.bgImg}`}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <div
              className={`${pluginStyles.dNone} ${pluginStyles.dSmNone}  ${pluginStyles.dLgBlock}`}
            >
              <br />
              <br />
            </div>
            <Container maxWidth="lg">
              <Grid container alignItems="center" justify="center" spacing={3}>
                <Grid justify="left" alignItems="left" item>
                  <div
                    className={`${pluginStyles.dBlock} ${pluginStyles.textCenter} ${pluginStyles.dLgNone}`}
                  >
                    <br />
                    <br />
                  </div>
                  <Link className={styles.logo} to="/">
                    <img
                      src="https://images.ctfassets.net/6y7x6a0he6ux/3KHz62otb9GvG0quUFy7Dv/9ee403ef1f030bda89bdd6f1f7036e7a/4iru_white"
                      alt="logo"
                    />
                  </Link>
                </Grid>
                <Grid item>
                  {title ? (
                    <Typography align="left" variant="h5">
                      {title}
                    </Typography>
                  ) : null}
                  {contact ? (
                    <Typography variant="body1" align="left">
                      Email: {contact.email} <br /> Phone: {contact.phone}
                    </Typography>
                  ) : null}
                  <Typography variant="h5" align="left">
                    <div className={pluginStyles.socialIcons}>
                      <Facebook />
                      <Twitter />
                      <Whatsapp />
                    </div>
                  </Typography>
                </Grid>
              </Grid>
            </Container>{" "}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <div
              className={`${pluginStyles.dNone} ${pluginStyles.dMdBlock} ${pluginStyles.textCenter} ${pluginStyles.dLgNone}`}
            >
              <br />
              <br />
            </div>
            <Container maxWidth="sm">
              <Typography align="left" variant="h5">
                Quick Links
              </Typography>
              <Grid container>
                <Grid item xs={6}>
                  <List dense={true}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Link to={menuLinks[0].link}>
                            {menuLinks[0].name}
                          </Link>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Link to={menuLinks[1].link}>
                            {menuLinks[1].name}
                          </Link>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Link to={menuLinks[2].link}>
                            {menuLinks[2].name}
                          </Link>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Link to={menuLinks[3].link}>
                            {menuLinks[3].name}
                          </Link>
                        }
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <List dense={true}>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Link to={menuLinks[4].link}>
                            {menuLinks[4].name}
                          </Link>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={
                          <Link to={menuLinks[5].link}>
                            {menuLinks[5].name}
                          </Link>
                        }
                      />
                    </ListItem>
                    {/* <ListItem>
                      <ListItemText
                        primary={
                          <Link to={menuLinks[6].link}>
                            {menuLinks[6].name}
                          </Link>
                        }
                      />
                    </ListItem>
                     <ListItem>
                      <ListItemText
                        primary={
                          <Link to={menuLinks[7].link}>
                            {menuLinks[7].name}
                          </Link>
                        }
                      />
                    </ListItem> */}
                  </List>
                </Grid>
              </Grid>
              <br />
            </Container>
          </Grid>
        </Grid>
      </footer>

      <CopyRight />
    </div>
  );
});

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={(data) => <Footer data={data} />}
  />
);
