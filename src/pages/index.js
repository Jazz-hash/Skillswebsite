import withRoot from "../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import ProgramCards from "../components/ProgramCards";
import InstructorsCards from "../components/InstructorsCards";
import withStyles from "@material-ui/styles/withStyles";
import SectionInfo from "../components/SectionInfo";
import homeStyles from "../components/Header.module.css";
import pluginStyles from "../components/Plugin.module.css";
import slideStyles from "../components/slides.module.css";
import Counter from "../components/Counter";
import SEO from "./../components/SEO";
import MainSection from "../components/MainSection";
import Testimonials from "../components/Testimonials";
import { Grid, Box, Typography, Container } from "@material-ui/core";
import "aos/dist/aos.css";
import "../css/home.css";
import Footer from "../components/Footer";
import CreativeTeam from "../components/CreativeTeamComp";
import CountUp from "react-countup";
const AOS = typeof window !== `undefined` ? require("aos") : null;

if (AOS) {
  AOS.init();
}

const styles = () => ({
  root: {
    fontWeight: "bold",
  },
  container: {
    marginTop: -70,
  },
  contentBox: {
    maxWidth: "calc(1136px - 60px)",
    width: "calc(100% - 60px)",
    marginTop: "50px !important",
  },
});

class Home extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <SEO title="Home Page" />

        <MainSection
          title={this.props.data.allContentfulFranchisee.edges[0].node.title}
        />
        <br />
        <br />
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            style={{ position: "relative" }}
          >
            <div class="shape-wrapper">
              <div class="shape-ring absolute right top"></div>
            </div>
            <Grid
              className={this.props.classes.contentBox}
              style={{ zIndex: 2 }}
              item
            >
              <ProgramCards />
            </Grid>
            <Grid className={this.props.classes.contentBox} item></Grid>
            <Grid className={this.props.classes.contentBox} item></Grid>
            <Grid className={this.props.classes.contentBox} item></Grid>
          </Grid>
        </Container>
        <Counter />
        <Box
          style={{
            background: "rgb(244,248,251)",
            background:
              "linear-gradient(175deg, rgba(255,255,255,1) 55%, #e8ecf3 55%)",
          }}
        >
          <Container>
            <Grid container direction="row" justify="center">
              <Grid style={{ width: 100 + "%" }} item>
                <InstructorsCards />
              </Grid>

              <Grid className={this.props.classes.contentBox} item></Grid>
              <Grid className={this.props.classes.contentBox} item></Grid>
            </Grid>
          </Container>
        </Box>
        <div
          className={`${homeStyles.quote} ${homeStyles.bgImg} ${homeStyles.sectionPadding}`}
          data-overlay-dark="8"
        >
          <Box className={homeStyles.dark}>
            <div className={pluginStyles.container}>
              <div className={pluginStyles.textCenter} style={{ zIndex: 99 }}>
                <Typography
                  variant="h1"
                  component="p"
                  style={{ color: "white" }}
                >
                  <span className="icon">
                    <i className="icofont icofont-quote-left"></i>
                  </span>
                  People should pursue what they're passionate about. That will
                  make them happier than pretty much anything else.
                  <span className="icon">
                    <i className="icofont icofont-quote-right"></i>
                  </span>
                </Typography>
                <h5>Elon Musk</h5>
                <h6>CEO, and lead designer of SpaceX</h6>
              </div>
            </div>
          </Box>
        </div>
        <Box
          style={{
            background: "rgb(244,248,251)",
            background:
              "linear-gradient(175deg, #e8ecf3 55%, rgba(255,255,255,1) 55%)",
          }}
          boxShadow={3}
        >
          <Container>
            <br />
            <br />
            <Grid
              container
              style={{
                width: 96 + "%",
                margin: "auto",
                background: "rgba(255,255,255,0.75)",
                boxShadow: "0 1px 9px 1px rgba(0, 0, 0, 0.15)",
              }}
              direction="row"
            >
              <CreativeTeam></CreativeTeam>
            </Grid>
            <br />
            <br />
          </Container>
        </Box>
        <Box
          style={{
            // background: "#111",
            background: "rgb(0,56,105)",
            background:
              "linear-gradient(135deg, rgba(0,56,105,1) 0%, rgba(0,78,146,1) 30%, rgba(0,136,255,1) 50%, rgba(0,78,146,1) 70%, rgba(0,56,105,1) 100%)",
            color: "white",
            width: 100 + "%",
            margin: "auto",
          }}
          boxShadow={3}
        >
          <Container maxWidth="md">
            <Grid
              container
              style={{ paddingTop: 80 + "px", paddingBottom: 80 + "px" }}
            >
              <Grid item xs={12} sm={5} md={4} lg={4}>
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Raleway",
                  }}
                >
                  Admissions are now open
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "Raleway",
                    color: "white",
                  }}
                >
                  Admission is open for all. You can now apply in all
                  departments.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={5} lg={5}></Grid>

              <Grid item xs={12} sm={3} md={3} lg={3}>
                <button
                  className={` ${slideStyles.butn}`}
                  style={{ width: 100 + "%", marginTop: 10 }}
                >
                  <span>Apply Now </span>
                </button>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Testimonials />
        <div style={{ marginTop: -100 }}></div>
        <Footer />
      </React.Fragment>
    );
  }
}

export const query = graphql`
  query {
    allContentfulFranchisee {
      edges {
        node {
          title
        }
      }
    }
  }
`;

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Home));
