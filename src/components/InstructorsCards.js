import React from "react";

import { Link, graphql, StaticQuery } from "gatsby";
import Grid from "@material-ui/core/Grid";

import Truncate from "react-truncate";
import styled from "styled-components";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import withStyles from "@material-ui/styles/withStyles";
import carouselData from "../services/carousel-service.json";
import styles from "./slides.module.css";
import "../css/home.css";

const autoPlayDelay = 2000;
const chevronWidth = 40;
const noOfItems = 2;
const noOfCards = 1;

const Wrapper = styled.div`
  width: 90%;
  padding: 50 ${chevronWidth}px;
  margin: 0 auto;
`;

class Carousel extends React.Component {
  items = carouselData;

  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () =>
    this.setState((prevState) => ({
      activeItemIndex:
        (prevState.activeItemIndex + 1) % (noOfItems - noOfCards + 1),
    }));

  onChange = (value) => this.setState({ activeItemIndex: value });

  render() {
    const { classes } = this.props;
    const filteredData = [];
    return (
      <Paper
        elevation={0}
        style={{
          background: "transparent",
        }}
      >
        <StaticQuery
          query={graphql`
            {
              allContentfulFranchisee {
                edges {
                  node {
                    instructors {
                      name
                      slug
                      description {
                        json
                      }
                      picture {
                        file {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          `}
          render={(data) => {
            const defaultData =
              data.allContentfulFranchisee.edges[0].node.instructors;
            defaultData.forEach((dataItem, dataIndex) => {
              const filteredItem = Object.assign(
                {},
                {
                  node: {
                    id: dataItem.id,
                    description: dataItem.description.json,
                    frontmatter: {
                      name: dataItem.name,
                      date: "Unknown",
                      path: "/instructors/" + dataItem.slug,
                      image: {
                        publicURL: dataItem.picture.file.url,
                      },
                    },
                  },
                }
              );
              filteredData.push(filteredItem);
            });
            this.items = filteredData;
          }}
        ></StaticQuery>
        <Wrapper>
          <br />
          <br />
          <Typography variant="h3" className="heading">
            Our Qualified Instructors
          </Typography>
          <Grid container spacing={4}>
            {this.items.length > 0
              ? this.items.map((item, index) => {
                  const {
                    node: {
                      description,
                      frontmatter: {
                        path,
                        name,
                        image: { publicURL },
                      },
                    },
                  } = item;
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      lg={4}
                      key={index}
                      style={{
                        padding: 10,
                        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14)",
                      }}
                    >
                      <div key={index} className={styles.mainCont}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <CardActionArea>
                            <CardMedia
                              className={styles.image2}
                              component="img"
                              image={publicURL}
                              title={name}
                            />
                          </CardActionArea>
                        </Grid>
                        <Grid container>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            className={styles.content}
                          >
                            <CardContent className={styles.details}>
                              <Typography
                                gutterBottom
                                variant="h4"
                                component="h1"
                              >
                                {name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                <Truncate
                                  lines={4}
                                  ellipsis={<span>... </span>}
                                >
                                  {documentToReactComponents(description)}
                                </Truncate>
                              </Typography>
                            </CardContent>
                            <CardActions align="center">
                              <Link to={path}>
                                <button
                                  className={` ${styles.butn} ${styles.butnBg}`}
                                >
                                  <span>Learn More {">>"} </span>
                                </button>
                              </Link>
                            </CardActions>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  );
                })
              : null}
          </Grid>
        </Wrapper>
      </Paper>
    );
  }
}

export default withStyles(styles)(Carousel);
