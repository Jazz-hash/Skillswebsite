import React from "react";
import Header from "./SubHeader";
import Footer from "./Footer";
import { Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import "../css/style.styl";
import "../css/home.css";

const styles = {
  container: {
    marginTop: "50px",
  },
  contentBox: {
    maxWidth: "calc(1136px - 60px)",
    width: "calc(100% - 60px)",
  },
  title: {
    textAlign: "center",
  },
};

const Component = ({ children, classes, title }) => {
  const url = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <React.Fragment>
      {url !== "/" ? (
        title ? (
          <Header title={title} />
        ) : (
          <Header title={null} />
        )
      ) : (
        ""
      )}
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="center"
      >
        <Grid className={classes.contentBox} item>
          {children}
        </Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default withStyles(styles)(Component);
