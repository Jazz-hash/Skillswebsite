import withRoot from "../../utils/withRoot";
import React from "react";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import useInstructorsData from "../../hooks/useInstructorsData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../../css/instructorsPage.css";
import "../../css/utilities.css";
import "aos/dist/aos.css";
import Avatar from "@material-ui/core/Avatar";
import { Container, Grid, Typography, Box, Hidden } from "@material-ui/core";

import InstructorBg from "../../assets/img/instructorBg.png";

const AOS = typeof window !== `undefined` ? require("aos") : null;

if (AOS) {
  AOS.init({ once: true });
}

const Instructors = (props) => {
  const instructors = useInstructorsData();

  return (
    <Page title="Instructors">
      <SEO title="Instructors" />
      <Container>
        {instructors.map((ins, index) => {
          return (
            <React.Fragment key={index}>
              <Container>
                <Box py={3}>
                  <div className="shadow-md">
                    <div className="container p-2 py-10 my-0 relative md:flex justify-center items-center bg-gray-100">
                      <Hidden>
                        <Hidden mdDown>
                          <div className="absolute backgroundIns left-0 top-0 h-full w-full"></div>
                        </Hidden>
                      </Hidden>
                      <Grid container>
                        <Grid
                          item
                          container
                          lg={3}
                          alignItems="center"
                          className="z-10 "
                          justify="center"
                        >
                          <div className=" xs:h-64 xs:w-64 py-2 ">
                            <img
                              className="rounded-full sm:w-64 sm:h-64 w-32 h-32 object-cover"
                              src={ins.picture.file.url}
                            />
                          </div>
                        </Grid>
                        <Grid item container lg={9} className="z-10">
                          <div className="flex-initial p-4">
                            <h1 className="text-3xl  font-semibold pb-4 ">
                              <span className="border-solid border-l-4 mr-2 border-blue-500">
                                &nbsp;{ins.name}
                              </span>
                            </h1>
                            <p style={{ color: "red" }}>
                              {documentToReactComponents(ins.description.json)}
                            </p>
                            <br />
                          </div>
                        </Grid>
                      </Grid>
                    </div>

                    <iframe
                      width="100%"
                      height="500px"
                      src={ins.youTubeVideo}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </Box>
              </Container>
            </React.Fragment>
          );
        })}
      </Container>
    </Page>
  );
};

export default withRoot(Instructors);
