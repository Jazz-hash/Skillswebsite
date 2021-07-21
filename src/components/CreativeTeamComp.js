import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import mark from "../assets/img/mark.jpg";
import zia from "../assets/img/ziakhan.jpg";
import hira from "../assets/img/hirakhan.jpg";
import adil from "../assets/img/adilaltaf.jpg";
import zeeshan from "../assets/img/zeeshanhanif.jpg";
import daniyal from "../assets/img/daniyalnagori.jpg";

import { Typography, Grid, colors } from "@material-ui/core";
import LinkedinIcon from "../assets/img/linkedin.svg";
import TwitterIcon from "../assets/img/twitter.svg";
import FacebookIcon from "../assets/img/facebook.svg";
// import Carousel from "react-elastic-carousel";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    "& > *": {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
  oheading: {
    color: "black",
    borderLeft: "1px solid lightgrey",
    fontSize: 40 + "px",
    fontWeight: "200",
    paddingLeft: "0.5rem",
  },
  cheading: {
    color: "black",
    borderLeft: "1px solid blue",
    paddingLeft: "0.5rem",
    fontSize: "46px",
    fontWeight: "bold",
    marginTop: "-13px",
  },
  container: {
    padding: "40px 55px",
  },
}));

export default function CreativeTeamComp() {
  const classes = useStyles();
  const members = [
    { name: "Zia Ullah Khan", job: "Program Chief", avatar: zia },
    { name: "Adil Altaf", job: "Back-End Engineer", avatar: adil },
    { name: "Ms. Hira Khan", job: "DevOps Engineer", avatar: hira },
    { name: "Zeeshan Hanif", job: "Security Engineer", avatar: zeeshan },
    { name: "Daniyal Nagori", job: "Back-End Engineer", avatar: daniyal },
  ];
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 3 },
  //   { width: 750, itemsToShow: 4 },
  //   { width: 920, itemsToShow: 5 },
  // ];

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <span className={classes.oheading}>Our</span>
      </Grid>
      <Grid item>
        <Typography variant="h6" className={classes.cheading}>
          Technical Team
        </Typography>
      </Grid>
      <br></br>
      <Grid item container direction="row" justify="space-around">
        {/* <Carousel breakPoints={breakPoints} showArrows={false}> */}
        {members.map((member) => (
          <Grid item key={member.name}>
            {" "}
            <Avatar
              alt="Profile Photo"
              src={member.avatar}
              className={classes.large}
            />{" "}
            <Typography variant="h6" align="center">
              {" "}
              {member.name}{" "}
            </Typography>{" "}
            <Typography align="center">{member.job}</Typography>{" "}
            <div style={{marginLeft:"40px"}}>
              <img
                style={{ height: 40, width: 20, float: "left",margin:5 }}
                src={TwitterIcon}
              ></img>{" "}
              <img
                style={{ height: 40, width: 20, float: "left",margin:5  }}
                src={FacebookIcon}
              ></img>{" "}
              <img
                style={{ height: 40, width: 20, float: "left",margin:5  }}
                src={LinkedinIcon}
              ></img>{" "}
            </div>
          </Grid>
        ))}
        {/* </Carousel> */}
      </Grid>
    </Grid>
  );
}
