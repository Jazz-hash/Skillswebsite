import React from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import MenuMobile from "../MenuMobile";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Slide, useScrollTrigger } from "@material-ui/core";
import useCompanyData from "../../hooks/useCompanyData";

const useStyles = makeStyles((theme) => ({
  appBarHome: {
    background: "transparent",
    position: "absolute !important",
    boxShadow: "none !important",
  },
  appBarOthers: {
    background: "white",
    boxShadow: "none !important",
  },
  logo: {
    background: "#706aaf",
    padding: "1px",
    borderRadius: "3px",
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  const classes = useStyles();
  const company = useCompanyData();

  return (
    <div>
      <AppBar
        position="static"
        id="appBar"
        className={url === "/" ? classes.appBarHome : classes.appBarOthers}
      >
        <Toolbar>
          <Grid
            alignItems="center"
            container
            justify="space-between"
            spacing={8}
          >
            <Grid item>
              <Link to="/">
                <img
                  className={url === "/" ? "" : classes.logo}
                  src={company.logoSmall.file.url}
                  alt="Smiley face"
                  style={{height:43.2,width:72}}
                />
              </Link>
            </Grid>
            <Grid item>
              <Hidden smDown>
                <Typography component="span" variant="caption">
                  <Menu />
                </Typography>
              </Hidden>
              <Hidden mdUp>
                <MenuMobile />
              </Hidden>
            </Grid>
          </Grid>
          <Grid item />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
