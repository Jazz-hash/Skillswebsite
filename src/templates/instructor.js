import withRoot from "../utils/withRoot";
import React, { useEffect } from "react";
import { Link } from "gatsby";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import SEO from "../components/SEO";

import Page from "../components/Page";
import "aos/dist/aos.css";
const AOS = typeof window !== `undefined` ? require("aos") : null;
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

if (AOS) {
  AOS.init({ once: true });
}

const styles = {
  card: {
    boxShadow: "none",
  },
  cardImage: {
    height: "300px",
    backgroundSize: "contain !important",
    marginTop: "15px",
  },
  instructorName: {
    display: "flex",
    justifyContent: "space-between",
    color: "#706aaf",
    fontWeight: "600 !important",
  },
  socialIcon: {
    width: "40px",
  },
  iframeDiv: {
    textAlign: "center",
  },
};

const InstructorDetails = (props) => {
  // All programs list
  const instructor = props.pageContext.instructor;

  console.log("Instructor " + JSON.stringify(instructor));

  const { classes } = props;

  useEffect(() => {});
  //I am unable to show video from
  return (
    <Page>
      <SEO title="Instructor" />
      <Card className={classes.card} data-aos="fade-up">
        <CardMedia
          className={classes.cardImage}
          image={instructor.picture.file.url}
        />
        <CardContent>
          <Typography variant="h4" className={classes.instructorName}>
            {instructor.name}
            <a href={instructor.url}>
              <img
                className={classes.socialIcon}
                src={require("../assets/linkedin.jpeg")}
              />
            </a>
          </Typography>
          <Typography variant="body1">
            {documentToReactComponents(instructor.description.json)}
          </Typography>
          <div className={classes.iframeDiv} data-aos="fade-up">
            <iframe
              width="560"
              height="315"
              src={instructor.youTubeVideo}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <Typography variant="body1" data-aos="fade-up">
            {documentToReactComponents(instructor.description.json)}
          </Typography>
        </CardContent>
      </Card>
    </Page>
  );
};

export default withRoot(withStyles(styles)(InstructorDetails));
