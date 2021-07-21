import React from "react";
import { Typography } from "@material-ui/core";

import Header from "./Header";
import Navigation from "./Navigation";
import "../css/home.css";
import { HexagonSlice1 } from "mdi-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { shadows } from "@material-ui/system";
import { Box, Grid, Container } from "@material-ui/core";
import useCompanyData from "../hooks/useCompanyData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DiamondStone, Tools, LightbulbOutline } from "mdi-material-ui";
import map from "../assets/srilanka_map2.png";
// import map from "./sirilanka_map.png";

const MainSection = ({ title }) => {
  const companyData = useCompanyData();
  const about4ir = companyData.about4ir.json;
  const scroll = () => {
    if (typeof window !== "undefined") {
      window.scrollBy(0, window.innerHeight);
    }
  };
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <Container>
        <Grid container spacing={4} className="missionHead">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={5}
            style={{ position: "relative" }}
          >
            <div className="center-xy op-1">
              <div className="shape shape-background rounded-circle shadow-lg bg-4"></div>
            </div>
            <div class="device-twin">
              <img src={map} alt="map" className="mapImage" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={7} className="missionSubHead">
            <CardContent>
              <div className="missionTitle">
                <span className="missionHeadingFirstPart">Our</span> <br />
                <span className="missionHeading">Mission</span>
              </div>
              <p className="missionDescription">{title}</p>
            </CardContent>
            <CardActions>
              <Button size="small">
                <PlayCircleFilledIcon className="videoIcon" />
                Watch Our Story
              </Button>
            </CardActions>
          </Grid>
        </Grid>

        <div className="aboutInfo">
          <h1 className="aboutTitle">
            What is{" "}
            <span className="txtPrimary">4th Industrial Revolution</span> ?
          </h1>
          <p className="aboutDescription">
            {documentToReactComponents(about4ir)}
          </p>
          <Grid container spacing={4} className="iconsHead">
            <Grid item md={4}>
              <DiamondStone className="icons" />
              <div className="marginFix">
                <h5 class="bold">Powerful Design</h5>
                <p class="iconDes">
                  Ab ad aliquam assumenda beatae commodi distinctio dolore
                  dolorum earum error et, exercitationem
                </p>
              </div>
            </Grid>
            <Grid item md={4}>
              <Tools className="icons" />
              <div className="marginFix">
                <h5 class="bold">Professionalism</h5>
                <p class="iconDes">
                  Ab ad aliquam assumenda beatae commodi distinctio dolore
                  dolorum earum error et, exercitationem
                </p>
              </div>
            </Grid>
            <Grid item md={4}>
              <LightbulbOutline className="icons" />
              <div className="marginFix">
                <h5 class="bold">Creativity</h5>
                <p class="iconDes">
                  Blanditiis cumque, eius error est et exercitationem, explicabo
                  hic natus nobis odit porro quia
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default MainSection;
