import withRoot from "../utils/withRoot";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import SwipeableViews from "react-swipeable-views";
import { Container, Typography, Box, Grid, Tabs, Tab } from "@material-ui/core";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SEO from "../components/SEO";
import Page from "../components/Page";
import {
  makeStyles,
  useTheme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import "aos/dist/aos.css";
const AOS = typeof window !== `undefined` ? require("aos") : null;

//css
import "../css/program.css";
import "../css/utilities.css";

if (AOS) {
  AOS.init();
}

// const useStyles = makeStyles((theme) => ({}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
  },
}));

const themestyle = createMuiTheme({
  palette: {
    primary: {
      main: "#3F7BE4",
    },
  },
});
const ProgramDetails = (props) => {
  // All programs list
  const program = props.pageContext.program;
  const technicalTrack = program.technicalTrack;
  const innovationTrack = program.innovationTrack;
  const appDevelopmentTrack = program.appDevelopmentTrack;
  //For Tabs
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <Page title="Program of Study">
        <SEO title="Program of Study" />
        <ThemeProvider theme={themestyle}>
          {/* Section 1 */}

          <Container>
            <div className="w-full  rounded-lg  px-5 py-16 bg-landing">
              <Grid container justify="center" spacing={1}>
                <Grid
                  item
                  sm={8}
                  md={6}
                  container
                  justify="flex-start"
                  alignItems="center"
                >
                  <Box py={5} data-aos="fade-right">
                    <Typography
                      variant="h5"
                      gutterBottom
                      className="text-white pb-3 pr-0 xl:pr-32"
                    >
                      Certified {program.title} Professional:
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className="pb-6 pr-4 text-gray-400"
                    >
                      {program.shortDescription.shortDescription}
                    </Typography>

                    <a
                      href="#details"
                      className="bg-blue-700 text-white rounded-md py-3 px-5 hover:text-white hover:bg-blue-800 transition ease-in duration-200"
                    >
                      Learn More
                    </a>
                  </Box>
                </Grid>
                <Grid
                  data-aos="fade-left"
                  item
                  sm={8}
                  md={5}
                  container
                  justify="center"
                  alignItems="center"
                >
                  <img src={program.image.file.url} />
                </Grid>
              </Grid>
            </div>
          </Container>

          {/* Section 2 */}
          <Container>
            <div className="lg:px-4  my-10" id="details" data-aos="fade-in">
              <Grid container>
                <Box py={4}>
                  <Typography>
                    {documentToReactComponents(program.longDescription.json)}
                  </Typography>
                </Box>
              </Grid>
            </div>
          </Container>
          {/* Section 3  */}

          <Box>
            <Container>
              <div>
                <Grid
                  container
                  spacing={2}
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <Grid
                    item
                    md={4}
                    lg={3}
                    container
                    justify="flex-start"
                    alignItems="center"
                  >
                    <div className="shadow-md mb-10 p-10 rounded-lg w-full">
                      <Tabs
                        value={value}
                        orientation="vertical"
                        onChange={handleChange}
                        variant="fullWidth"
                        textColor="primary"
                        aria-label="full width tabs example"
                        TabIndicatorProps={{
                          style: {
                            background: "#3F7BE4",
                            position: "absolute",
                            left: 0,
                          },
                        }}
                        className={classes.tabs}
                      >
                        <Tab label="Track 1" {...a11yProps(0)} />
                        <Tab label="Track 2" {...a11yProps(1)} />
                        <Tab label="Track 3" {...a11yProps(2)} />
                      </Tabs>
                    </div>
                  </Grid>
                  <Grid item md={8} lg={9}>
                    <div className="bg-gray-100 lg:px-4 py-8">
                      <SwipeableViews
                        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                      >
                        <TabPanel value={value} index={0}>
                          <Box mb={6}>
                            <Typography align="left" variant="h4">
                              <span className="border-solid border-l-4 border-blue-700 text-center">
                                &nbsp;
                                {technicalTrack.title}
                              </span>
                            </Typography>
                          </Box>
                          <Grid container justify="center" spacing={2}>
                            {technicalTrack.courses.map((course, i) => (
                              <Grid key={i} item lg={6} md={6} container>
                                <Link
                                  to={`/programs/tracks/courses/${course.courseNumber}`}
                                  className="w-full"
                                >
                                  <div className="bg-white p-5 rounded-md shadow-md  flex justify-center items-center cursor-pointer hover:bg-blue-600 hover:text-white hover:shadow-2xl  transition ease-in duration-200 h-full w-full">
                                    <Grid
                                      item
                                      container
                                      alignItems="center"
                                      justify="center"
                                    >
                                      <Grid
                                        item
                                        xs={4}
                                        container
                                        alignItems="center"
                                        justify="center"
                                      >
                                        <div className="w-16 h-16 rounded-full bg-blue-500 flex justify-center items-center text-2xl pb-1 text-white">
                                          {course.quarter}
                                        </div>
                                      </Grid>
                                      <Grid item container xs={8}>
                                        <Box pl={1}>
                                          <Typography variant="h6">
                                            Quater {course.quarter}
                                          </Typography>
                                          <Typography variant="subtitle2">
                                            {course.title}
                                          </Typography>
                                        </Box>
                                      </Grid>
                                    </Grid>
                                  </div>
                                </Link>
                              </Grid>
                            ))}
                          </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <Box mb={6}>
                            <Typography variant="h4">
                              <span className="border-solid border-l-4 border-blue-700">
                                &nbsp;
                                {innovationTrack.title}
                              </span>
                            </Typography>
                          </Box>
                          <Grid container spacing={2}>
                            {innovationTrack.courses.map((course, i) => (
                              <Grid key={i} item lg={6} sm={6} container>
                                <Link
                                  to={`/programs/tracks/courses/${course.courseNumber}`}
                                  className="w-full"
                                >
                                  <div className="bg-white p-5 rounded-md shadow-md  flex justify-center items-center cursor-pointer hover:bg-blue-600 hover:text-white hover:shadow-2xl  transition ease-in duration-200 w-full h-full">
                                    <Grid
                                      item
                                      container
                                      alignItems="center"
                                      justify="center"
                                    >
                                      <Grid
                                        item
                                        xs={4}
                                        container
                                        alignItems="center"
                                        justify="center"
                                      >
                                        <div className="w-16 h-16 rounded-full bg-blue-500 flex justify-center items-center text-2xl pb-1 text-white">
                                          {course.quarter}
                                        </div>
                                      </Grid>
                                      <Grid item container xs={8}>
                                        <Box pl={1}>
                                          <Typography variant="h6">
                                            Quater {course.quarter}
                                          </Typography>
                                          <Typography variant="subtitle2">
                                            {course.title}
                                          </Typography>
                                        </Box>
                                      </Grid>
                                    </Grid>
                                  </div>
                                </Link>
                              </Grid>
                            ))}
                          </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <Box mb={6}>
                            <Typography variant="h4">
                              <span className="border-solid border-l-4 border-blue-700">
                                &nbsp;
                                {appDevelopmentTrack.title}
                              </span>
                            </Typography>
                          </Box>
                          <Grid container spacing={2}>
                            {appDevelopmentTrack.courses.map((course, i) => (
                              <Grid key={i} item lg={6} sm={6} container>
                                <Link
                                  to={`/programs/tracks/courses/${course.courseNumber}`}
                                  className="w-full"
                                >
                                  <div className="bg-white p-5 rounded-md shadow-md  flex justify-center items-center cursor-pointer hover:bg-blue-600 hover:text-white hover:shadow-2xl  transition ease-in duration-200 w-full h-full">
                                    <Grid
                                      item
                                      container
                                      alignItems="center"
                                      justify="center"
                                    >
                                      <Grid
                                        item
                                        xs={4}
                                        container
                                        alignItems="center"
                                        justify="center"
                                      >
                                        <div className="w-16 h-16 rounded-full bg-blue-500 flex justify-center items-center text-2xl pb-1 text-white">
                                          {course.quarter}
                                        </div>
                                      </Grid>
                                      <Grid item container xs={8}>
                                        <Box pl={1}>
                                          <Typography variant="h6">
                                            Quater {course.quarter}
                                          </Typography>
                                          <Typography variant="subtitle2">
                                            {course.title}
                                          </Typography>
                                        </Box>
                                      </Grid>
                                    </Grid>
                                  </div>
                                </Link>
                              </Grid>
                            ))}
                          </Grid>
                        </TabPanel>
                      </SwipeableViews>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Box>
        </ThemeProvider>
      </Page>
    </div>
  );
};

export default withRoot(ProgramDetails);
