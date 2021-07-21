import React from "react";
import homeStyles from "../components/Header.module.css";
import pluginStyles from "../components/Plugin.module.css";
import { Grid, Box, Typography, Container } from "@material-ui/core";
import "../css/home.css";
import CountUp, { startAnimation } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const style = {
  countup: {},
};

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      didViewCountUp: false,
    };
  }
  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div
          className={`${homeStyles.numbers} ${homeStyles.sectionPadding} ${homeStyles.bgImg}`}
          data-overlay-dark="6"
          style={{
            color: "white",
            boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.175)",
          }}
        >
          <Box className={homeStyles.darkCount}>
            <div className={pluginStyles.container}>
              <div className={pluginStyles.row}>
                <Grid container>
                  <Grid
                    item
                    style={{ marginTop: 10, marginBottom: 10 }}
                    xs={6}
                    sm={6}
                    md={6}
                    lg={3}
                  >
                    <div className={pluginStyles.textCenter}>
                      <span className="icon">
                        <i className="icofont icofont-users-alt-3"></i>
                      </span>
                      <h1 className="count">
                        <VisibilitySensor
                          onChange={this.onVisibilityChange}
                          offset={{
                            top: 10,
                          }}
                          delayedCall
                        >
                          <CountUp
                            style={{ fontSize: "40px", fontWeight: "900" }}
                            start={0}
                            end={this.state.didViewCountUp ? 100000 : 0}
                            duration={3}
                          />
                        </VisibilitySensor>
                      </h1>
                      <Typography variant="h5">Happy Students</Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    style={{ marginTop: 10, marginBottom: 10 }}
                    xs={6}
                    sm={6}
                    md={6}
                    lg={3}
                  >
                    <div className={pluginStyles.textCenter}>
                      <span className="icon">
                        <i className="icofont icofont-users-alt-3"></i>
                      </span>
                      <h1 className="count">
                        <VisibilitySensor
                          onChange={this.onVisibilityChange}
                          offset={{
                            top: 10,
                          }}
                          delayedCall
                        >
                          <CountUp
                            style={{ fontSize: "40px", fontWeight: "900" }}
                            start={0}
                            end={this.state.didViewCountUp ? 15 : 0}
                            duration={3}
                          />
                        </VisibilitySensor>
                      </h1>
                      <Typography variant="h5">Courses Offered</Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    style={{ marginTop: 10, marginBottom: 10 }}
                    xs={6}
                    sm={6}
                    md={6}
                    lg={3}
                  >
                    <div className={pluginStyles.textCenter}>
                      <span className="icon">
                        <i className="icofont icofont-users-alt-3"></i>
                      </span>
                      <h1 className="count">
                        <VisibilitySensor
                          onChange={this.onVisibilityChange}
                          offset={{
                            top: 10,
                          }}
                          delayedCall
                        >
                          <CountUp
                            style={{ fontSize: "40px", fontWeight: "900" }}
                            start={0}
                            end={this.state.didViewCountUp ? 10 : 0}
                            duration={3}
                          />
                        </VisibilitySensor>
                      </h1>
                      <Typography variant="h5">Talented Teachers</Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    style={{ marginTop: 10, marginBottom: 10 }}
                    xs={6}
                    sm={6}
                    md={6}
                    lg={3}
                  >
                    <div className={pluginStyles.textCenter}>
                      <span className="icon">
                        <i className="icofont icofont-users-alt-3"></i>
                      </span>
                      <h1 className="count">
                        <VisibilitySensor
                          onChange={this.onVisibilityChange}
                          offset={{
                            top: 10,
                          }}
                          delayedCall
                        >
                          <CountUp
                            style={{ fontSize: "40px", fontWeight: "900" }}
                            start={0}
                            end={this.state.didViewCountUp ? 20000 : 0}
                            duration={3}
                          />
                        </VisibilitySensor>
                      </h1>
                      <Typography variant="h5">Certifications Given</Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Box>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
