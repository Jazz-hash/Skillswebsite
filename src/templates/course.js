import withRoot from "../utils/withRoot";
import React from "react";
import moment from "moment";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
//Material Ui
import {
  Typography,
  Grid,
  Container,
  Box,
  Button,
  SnackbarContent,
} from "@material-ui/core";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";

//Mui icons
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import InfoIcon from "@material-ui/icons/Info";
import LaptopIcon from "@material-ui/icons/Laptop";
//Data Of Classes
import useClassesData from "../hooks/useClassesData";
//images
import cardImg from "../assets/courses/courcesCard.png";
//aos
import "aos/dist/aos.css";
// css
import "../css/templateCourse.css";
import "../css/utilities.css";

const AOS = typeof window !== `undefined` ? require("aos") : null;

if (AOS) {
  AOS.init();
}

const styles = {};

const useStyles = makeStyles((theme) => ({
  courseClass: {
    position: "sticky",
    top: 0,
  },
}));
const colortheme = createMuiTheme({
  palette: {
    primary: { main: "#3F7BE4", contrastText: "#0f0" },
    secondary: { main: "#555", contrastText: "#f00" },
  },
});

const CourseDetails = (props) => {
  // All programs list
  const course = props.pageContext.course;
  const certification = course.certification;
  const textBooks = course.textBooks;
  const referenceBooks = course.referenceBooks;
  const sections = course.sections;
  const belongsToTrack = props.pageContext.track;
  const prereqCourses = props.pageContext.prereq;
  //class Data
  const classData = useClassesData();
  //foramtting  Date Time
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

  //modifying Data
  const moifieData = classData.filter(
    (classs) => classs.course.courseNumber === course.courseNumber
  );
  console.log(moifieData);

  const classes = useStyles();

  return (
    <MuiThemeProvider theme={colortheme}>
      <Page title="Course Syllabus">
        <SEO title="Course Syllabus" />

        <Container>
          <div className=" py-16 md:px-24 px-4 mb-12 rounded-lg shadow-md header">
            <Typography align="center" variant="h5" className="text-gray-200">
              #AI-101: AI for Everyone and Fundamentals of Programming using
              Python
            </Typography>
          </div>

          <Box mt={8} py={4} data-aos="">
            <Typography gutterBottom variant="h4" className="pb-8">
              <span className="border-solid border-l-4 border-blue-500">
                &nbsp;Description:
              </span>
            </Typography>
            <Grid container spacing={2} style={{ position: "relative" }}>
              <Grid
                item
                lg={moifieData.length ? 8 : 12}
                md={moifieData.length ? 6 : 12}
                container
                spacing={2}
              >
                <Grid
                  item
                  md={moifieData.length ? 12 : 6}
                  container
                  direction="column"
                >
                  <Box
                    p={4}
                    className="border-solid border-2 border-gray-200 rounded-lg relative h-full w-full flex flex-col justify-center overflow-hidden"
                  >
                    <div
                      className="w-full h-full flex items-end justify-end items-center  absolute left-0"
                      style={{ zIndex: -10 }}
                    >
                      <InfoIcon
                        className="text-gray-200 mr-4"
                        fontSize="large"
                        style={{ fontSize: 130 }}
                      />
                    </div>
                    <Typography variant="h6" gutterBottom color="primary">
                      This Course is taught in the following Track <br />
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      {belongsToTrack.title} Course Sequence
                    </Typography>
                    <Typography variant="subtitle2" className="text-blue-600">
                      <Link to={"/programs/tracks/" + belongsToTrack.slug}>
                        Learn More
                        <NavigateNextIcon
                          color="primary"
                          fontSize="small"
                          style={{ marginTop: -2 }}
                        />
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={moifieData.length ? 12 : 6} container>
                  <Box
                    p={4}
                    className="border-solid border-2 border-gray-200 rounded-lg relative h-full w-full flex flex-col justify-center overflow-hidden"
                  >
                    <div
                      className="w-full h-full flex items-end justify-end items-center  absolute left-0"
                      style={{ zIndex: -10 }}
                    >
                      <LaptopIcon
                        className="text-gray-200 mr-4"
                        fontSize="large"
                        style={{ fontSize: 130 }}
                      />
                    </div>
                    <Typography variant="h6" gutterBottom color="primary">
                      Course Prerequisites
                    </Typography>

                    <Typography variant="subtitle2" gutterBottom>
                      {prereqCourses.length > 0
                        ? prereqCourses.map((prereq, key) => {
                            return (
                              <div key={key}>
                                <Typography variant="subtitle2" gutterBottom>
                                  {prereq.courseNumber} {prereq.title}
                                </Typography>
                                <Typography
                                  variant="subtitle2"
                                  className="text-blue-600"
                                >
                                  <Link
                                    to={
                                      "/programs/tracks/courses/" +
                                      prereq.courseNumber
                                    }
                                  >
                                    Learn More
                                    <NavigateNextIcon
                                      color="primary"
                                      fontSize="small"
                                      style={{ marginTop: -2 }}
                                    />
                                  </Link>
                                </Typography>
                              </div>
                            );
                          })
                        : "None"}
                    </Typography>
                  </Box>
                </Grid>
                {certification && (
                  <Grid item md={moifieData.length ? 12 : 6} container>
                    <Box
                      p={4}
                      className="border-solid border-2 border-gray-200 rounded-lg relative h-full w-full flex flex-col justify-center overflow-hidden"
                    >
                      <div
                        className="w-full h-full flex items-end justify-end items-center  absolute left-0"
                        style={{ zIndex: -10 }}
                      >
                        <CardMembershipIcon
                          className="text-gray-200 mr-4"
                          fontSize="large"
                          style={{ fontSize: 130 }}
                        />
                      </div>
                      <Typography variant="h6" gutterBottom color="primary">
                        Also prepares the student for the following
                        Certifications
                      </Typography>

                      <div>
                        {certification.map((cert, key) => {
                          return (
                            <div key={key}>
                              <Typography variant="subtitle2" gutterBottom>
                                {cert.title}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                className="text-blue-600"
                              >
                                <a
                                  href={cert.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Learn More
                                  <NavigateNextIcon
                                    color="primary"
                                    fontSize="small"
                                    style={{ marginTop: -2 }}
                                  />
                                </a>
                              </Typography>
                            </div>
                          );
                        })}
                      </div>
                    </Box>
                  </Grid>
                )}
                {textBooks && (
                  <Grid item md={moifieData.length ? 12 : 6} container>
                    <Box
                      p={4}
                      className="border-solid border-2 border-gray-200 rounded-lg  relative h-full w-full flex flex-col justify-center overflow-hidden"
                    >
                      <div
                        className="w-full h-full flex items-end justify-end items-center  absolute left-0"
                        style={{ zIndex: -10 }}
                      >
                        <MenuBookIcon
                          className="text-gray-200 mr-4"
                          fontSize="large"
                          style={{ fontSize: 130 }}
                        />
                      </div>
                      <Typography variant="h6" gutterBottom color="primary">
                        Text Books
                      </Typography>

                      <div>
                        {textBooks.map((book, key) => {
                          return (
                            <div key={key}>
                              <Typography variant="subtitle2" gutterBottom>
                                {book.title} by {book.authors}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                className="text-blue-600"
                              >
                                <a
                                  href={book.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Learn More
                                  <NavigateNextIcon
                                    color="primary"
                                    fontSize="small"
                                    style={{ marginTop: -2 }}
                                  />
                                </a>
                              </Typography>
                            </div>
                          );
                        })}
                      </div>
                    </Box>
                  </Grid>
                )}
                {referenceBooks && (
                  <Grid item md={12} container>
                    <Box
                      p={4}
                      className="border-solid border-2 border-gray-200 rounded-lg relative h-full w-full flex flex-col justify-center overflow-hidden"
                    >
                      <div
                        className="w-full h-full flex items-end justify-end items-center  absolute left-0"
                        style={{ zIndex: -10 }}
                      >
                        <LibraryBooksIcon
                          className="text-gray-200 mr-4"
                          fontSize="large"
                          style={{ fontSize: 130 }}
                        />
                      </div>
                      <Typography variant="h6" gutterBottom color="primary">
                        Reference Books
                      </Typography>
                      <div>
                        {referenceBooks.map((book, key) => {
                          return (
                            <div key={key}>
                              <Typography variant="subtitle2" gutterBottom>
                                {book.title} by {book.authors}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                className="text-blue-600"
                              >
                                <a
                                  href={book.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Learn More
                                  <NavigateNextIcon
                                    color="primary"
                                    fontSize="small"
                                    style={{ marginTop: -2 }}
                                  />
                                </a>
                              </Typography>
                            </div>
                          );
                        })}
                      </div>
                    </Box>
                  </Grid>
                )}
              </Grid>
              {moifieData.length
                ? moifieData.map((courseClass) => (
                    <Grid item lg={4} md={6} xs={12}>
                      <div className={`flex justify-center w-full `}>
                        <div
                          className={`rounded-lg  shadow-md ${classes.courseClass}`}
                          style={{ maxWidth: "370px" }}
                        >
                          <img
                            src={cardImg}
                            alt="course"
                            width="100%"
                            height="100%"
                            className="object-cover h-48  rounded-lg rounded-b-none"
                          />
                          <Box px={3} pt={4}>
                            <Typography
                              variant="subtitle2"
                              className="text-gray-700 "
                              gutterBottom
                            >
                              #{courseClass.courseNumber}
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ lineHeight: "1.2" }}
                              className="text-blue-500"
                            >
                              {courseClass.course.title}
                            </Typography>
                          </Box>
                          <Box px={3} pt={2} pb={2}>
                            <Typography
                              className="text-md text-gray-700"
                              variant="subtitle2"
                            >
                              <b>Days: &nbsp;</b>
                              {courseClass.childrenContentfulClassDaysJsonNode.map(
                                (d, i) => {
                                  return (
                                    <span>
                                      <span>
                                        {renderDaySwitch(
                                          d.content,
                                          courseClass.startDate
                                        )}
                                      </span>
                                      <span>
                                        {addComma(
                                          i,
                                          courseClass
                                            .childrenContentfulClassDaysJsonNode
                                            .length
                                        )}
                                      </span>
                                    </span>
                                  );
                                }
                              )}
                            </Typography>
                            <Typography
                              className="text-md text-gray-700"
                              variant="subtitle2"
                            >
                              <b>Time: &nbsp;</b>

                              {covertToLocalTime(
                                courseClass.childContentfulClassStartTimeJsonNode,
                                courseClass.startDate
                              )}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              className="text-md text-gray-700"
                            >
                              <b>Start Date: &nbsp;</b>
                              {convertToLocalDatetime(courseClass.startDate)}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="subtitle2"
                              className="text-md text-gray-700 pb-4"
                            >
                              <b>End Date: &nbsp;</b>
                              {convertToLocalDatetime(courseClass.endDate)}
                            </Typography>
                            <hr />
                            <Typography variant="subtitle1" className="pt-4 ">
                              Instructors:&nbsp;
                              {courseClass.instructors.map((instruct) => {
                                return (
                                  <span className="text-blue-600">
                                    <Link to={"/instructors/" + instruct.slug}>
                                      {instruct.name}
                                    </Link>
                                  </span>
                                );
                              })}
                            </Typography>

                            <Typography
                              variant="h6"
                              style={{ marginLeft: "2rem" }}
                            ></Typography>
                          </Box>
                        </div>
                      </div>
                    </Grid>
                  ))
                : null}
            </Grid>
          </Box>

          {/* Course Outline Section */}
          <Box py={4}>
            <Typography gutterBottom variant="h4" className="pb-8">
              <span className="border-solid border-l-4 border-blue-500">
                &nbsp;Course Outline:
              </span>
            </Typography>
            {sections
              ? sections.map((item, key) => (
                  <Box my={2} data-aos="fade-up">
                    <Grid container>
                      <Grid item sm={3} container justify="center">
                        <div className="text-white sm:rounded-lg sm:rounded-r-none bg-blue-700  w-full flex flex-col justify-center text-center py-8">
                          <Typography variant="subtitle1">Section</Typography>
                          <Typography variant="h2">
                            {item.serialNumber}
                          </Typography>
                        </div>
                      </Grid>
                      <Grid item sm={9} container>
                        <div className="w-full h-full border-solid border-2 border-gray-200 sm:rounded-lg sm:rounded-l-none p-4 ">
                          <Typography
                            gutterBottom
                            variant="h6"
                            className="pb-2"
                          >
                            {item.title} (Week {item.weeks})
                          </Typography>
                          <Box ml={2} mb={2}>
                            {item.lineItem
                              ? item.lineItem.map((line, key) => {
                                  return (
                                    <div key={key}>
                                      <Typography variant="subtitle1">
                                        <ArrowForwardIcon color="primary" />{" "}
                                        {line.title}
                                      </Typography>
                                      <div
                                      // dangerouslySetInnerHTML={{
                                      //   __html:
                                      //     line.shortDescription.childMarkdownRemark.html,
                                      // }}
                                      ></div>
                                    </div>
                                  );
                                })
                              : null}
                          </Box>
                          {item.quiz && (
                            <Typography
                              variant="subtitle2"
                              className="text-gray-600"
                            >
                              {item.quiz.title} in Week {item.quiz.week}
                            </Typography>
                          )}
                        </div>
                      </Grid>
                    </Grid>
                  </Box>
                ))
              : null}
          </Box>
        </Container>
      </Page>
    </MuiThemeProvider>
  );
};

export default withRoot(CourseDetails);
