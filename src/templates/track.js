import withRoot from "../utils/withRoot";
import React, { useEffect } from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import SEO from "../components/SEO";
import {Container} from '@material-ui/core';
import Page from "../components/Page";
import { makeStyles } from "@material-ui/core/styles";
import extraStyles from "./templates.module.css";

const styles = {
  cardMedia: {
    height: "200px",
  },
  pad: {
    padding: "0px !important",
  },
  cardStyle: {
    height: "400px",
  },
  headings: {
    color: "#706aaf",
    textAlign: "center",
    marginBottom: "10px !important",
  },
  mainCard: {
    boxShadow: "none !important",
    padding: "20px",
  },
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  centerContent: {
    textAlign: "center",
  },
}));
const TrackDetails = (props) => {
  // All programs list
  const track = props.pageContext.track;

  const { classes } = props;
  const classess = useStyles();

  function createObjectiveMarkup() {
    return { __html: track.objective.childMarkdownRemark.html };
  }

  const certifications = track.certifications;

  useEffect(() => {});
  return (
    <Page title={track.title}>
      <SEO title={track.title} />
      <Container>
      <Box
        boxShadow={0}
        style={{ fontFamily: "Raleway", backgroundColor: "white" }}
      >
        <Card data-aos="fade-up" className={classes.mainCard}>
          <Typography
            variant="h3"
            style={{ color: "black" }}
            className={`${props.classes.headings} ${extraStyles.header}`}
          >
            {track.title}
          </Typography>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Objective of the Track
            </Typography>
            <Typography
              variant="body1"
              dangerouslySetInnerHTML={createObjectiveMarkup()}
            ></Typography>
            <br />
            {certifications && (
              <div>
                <Typography variant="h6">
                  Also prepares the student for the following Certifications
                </Typography>
                <ol>
                  {certifications.map((cert, key) => (
                    <li key={key}>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {cert.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            <br />

            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={4}
              data-aos="fade-up"
            >
              {track.courses.map((course) => {
                return (
                  <Grid item xs={12} sm={12} md={6} lg={3} key={course.quarter}>
                    <Box boxShadow={4}>
                      <CardActionArea>
                        <Card
                          key={course.quarter}
                          style={{
                            height: 180 + "px",
                            widht: 100 + "%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                            backgroundColor: "#004e92",
                            color: "white",
                          }}
                        >
                          <Link
                            to={
                              "/programs/tracks/courses/" + course.courseNumber
                            }
                          >
                            <CardContent>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: "bolder",
                                }}
                                gutterBottom
                              >
                                Quarter {course.quarter}
                              </Typography>
                              <Typography
                                variant="body2"
                                style={{ color: "white" }}
                                gutterBottom
                              >
                                {course.title}
                              </Typography>
                            </CardContent>
                          </Link>
                        </Card>
                      </CardActionArea>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
            <br />
            <Typography variant="body1">
              {documentToReactComponents(track.description.json)}
            </Typography>
          </CardContent>
        </Card>
      </Box>
   </Container>
    </Page>
  );
};

export default withRoot(withStyles(styles)(TrackDetails));
