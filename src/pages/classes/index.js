import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import { makeStyles } from "@material-ui/core/styles";

import ListOfPrograms from "../../components/ListOfPrograms";
import useClassesData from "../../hooks/useClassesData";
import withStyles from "@material-ui/styles/withStyles";
import { Link } from "gatsby";
import "../../css/program.css";
import {
  Teach,
  Timelapse,
  CalendarToday,
  ClockOutline,
  StopCircleOutline,
  PlayCircleOutline,
} from "mdi-material-ui";

import extraStyles from "./Classes.module.css";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Grid,
} from "@material-ui/core";
import "aos/dist/aos.css";
import ai from "./ai1.jpeg";
import cn from "./cn.jpeg";

import moment from "moment";
import nStyle from "./NewStyle.module.css";

const AOS = typeof window !== `undefined` ? require("aos") : null;

if (AOS) {
  AOS.init({ once: true });
}

const styles = {
  card: {
    boxShadow: "none !important",
  },
};
const useStyles = makeStyles({
  imgCard: {
    width: 500 + "px",
    height: 700 + "px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    top: 0,
    left: 0,
    width: 100 + "%",
    height: 100 + "%",
    position: "relative",
    zIndex: "1",
    borderRadius: "10px 10px 0px 0px",
  },
  bottom_spacing: {
    padding: "0.5rem",
  },
});

const Programs = (props) => {
  const classStyle = useStyles();
  const classes = useClassesData();

  function convertToLocalDatetime(dateTime) {
    //add code here to convert Pakistan time to the local date time
    const dateFormat = "YYYY-DD-MM";

    const testDateUtc = moment.utc(dateTime);
    const localDate = testDateUtc.local();
    const parsed_date = localDate.format(dateFormat);

    return parsed_date;
  }

  function covertToLocalTime(time, startDate) {
    //add code here to convert Pakistan time to the local time
    var twoPeriod;
    var twoPeriodHr;
    if (time.h <= 12) {
      twoPeriod = "AM";
      twoPeriodHr = time.h;
    } else {
      twoPeriod = "PM";
      twoPeriodHr = time.h - 12;
    }
    if (time.m < 10) {
      return "" + twoPeriodHr + ":0" + time.m + " " + twoPeriod;
    } else {
      return "" + twoPeriodHr + ":" + time.m + " " + twoPeriod;
    }
  }

  function renderDaySwitch(day, startDate) {
    //add code here if day of week has to be adjusted to previous or next day depending on the GMT adjustment

    switch (day) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Undefined Day of Week";
    }
  }

  function addComma(index, length) {
    if (index < length - 1) {
      return ", ";
    } else {
      return "";
    }
  }
  function imgFunc(course) {
    const courseTitle = course.slice(0, 2);
    switch (courseTitle) {
      case "AI":
        return ai;
        break;
      case "CN":
        return cn;
        break;
    }
  }

  return (
    <Page title="Scheduled Live Synchronous Online Classes on Zoom">
      <SEO title="Scheduled Live Synchronous Online Classes on Zoom" />
      <Container>
        <Grid container style={{ width: 100 + "%" }}>
          {classes.map((c, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                style={{ marginBottom: "2rem" }}
              >
                <Grid
                  container
                  style={{
                    boxShadow: "  0px 0px 5px 0px rgba(0,0,0,0.75)",
                    borderBottom: "10px solid #3D3D3D",
                    borderRadius: "10px",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={5}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1rem 1rem",
                    }}
                    className={nStyle.bgLanding}
                  >
                    <Typography
                      className={extraStyles.heading}
                      variant="h4"
                      style={{
                        fontFamily: "Acme",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      ID -- #{c.classNumber}
                    </Typography>
                    <Typography
                      variant="h5"
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white",
                      }}
                      className={extraStyles.subHeading}
                    >
                      <Link
                        to={"/programs/tracks/courses/" + c.course.courseNumber}
                      >
                        {"#" + c.course.courseNumber + " " + c.course.title}
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid
                    xs={12}
                    sm={12}
                    md={6}
                    lg={7}
                    item
                    style={{ padding: "1rem" }}
                  >
                    <Container>
                      <Typography
                        variant="h5"
                        className={nStyle.head}
                        style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                      >
                        Instructors:&nbsp;
                      </Typography>
                      <hr />
                      <Typography
                        variant="h6"
                        className={nStyle.text}
                        style={{ marginLeft: "2rem" }}
                      >
                        {c.instructors.map((instruct) => {
                          return (
                            <span>
                              <Teach /> &nbsp;&nbsp;
                              <Link to={"/instructors/" + instruct.slug}>
                                {instruct.name}
                              </Link>
                              &nbsp;
                            </span>
                          );
                        })}
                      </Typography>
                      <Typography
                        variant="h5"
                        className={nStyle.head}
                        style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                      >
                        Credits: &nbsp;
                      </Typography>
                      <hr />
                      <Typography
                        variant="h6"
                        className={nStyle.text}
                        style={{ marginLeft: "2rem" }}
                      >
                        <Timelapse /> &nbsp;&nbsp;{c.quarterCredits}
                      </Typography>
                      <Typography
                        variant="h5"
                        className={nStyle.head}
                        style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                      >
                        Timing:
                      </Typography>
                      <hr />
                      <Typography
                        variant="h6"
                        className={nStyle.text}
                        style={{ marginLeft: "2rem" }}
                      >
                        <CalendarToday />
                        &nbsp;&nbsp;Days: &nbsp;
                        {c.childrenContentfulClassDaysJsonNode.map((d, i) => {
                          return (
                            <span>
                              <span>
                                {renderDaySwitch(d.content, c.startDate)}
                              </span>
                              <span>
                                {addComma(
                                  i,
                                  c.childrenContentfulClassDaysJsonNode.length
                                )}
                              </span>
                            </span>
                          );
                        })}
                      </Typography>
                      <Typography
                        variant="h6"
                        className={nStyle.text}
                        style={{ marginLeft: "2rem" }}
                      >
                        <ClockOutline />
                        &nbsp;&nbsp;Time: &nbsp;
                        {covertToLocalTime(
                          c.childContentfulClassStartTimeJsonNode,
                          c.startDate
                        )}
                      </Typography>

                      <Typography
                        variant="h5"
                        className={nStyle.head}
                        style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                      >
                        Period:
                      </Typography>
                      <hr />

                      <Typography
                        variant="h6"
                        className={nStyle.text}
                        style={{ marginLeft: "2rem" }}
                      >
                        <PlayCircleOutline /> &nbsp;&nbsp;Start Date: &nbsp;
                        {convertToLocalDatetime(c.startDate)}
                      </Typography>

                      <Typography
                        variant="h6"
                        className={nStyle.text}
                        style={{ marginLeft: "2rem" }}
                      >
                        <StopCircleOutline /> &nbsp;&nbsp;End Date: &nbsp;
                        {convertToLocalDatetime(c.endDate)}
                      </Typography>
                    </Container>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Page>
  );
};

export default withRoot(withStyles(styles)(Programs));
