import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";
import Card from "@material-ui/core/Card";

import Truncate from "react-truncate";
import { Link } from "gatsby";

import { Typography, Box, Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
//icons
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
//css
// import styles from "./slides.module.css";
import "../css/utilities.css";

const useStyles = makeStyles((theme) => ({
  root: {},
  cardImage: {
    height: "250px",
    [theme.breakpoints.down("md")]: {
      clipPath: "polygon(0 0, 100% 1%, 100% 93%, 0% 100%)",
    },
    [theme.breakpoints.up("md")]: {
      clipPath: "polygon(0 0, 100% 1%, 89% 100%, 0% 100%)",
    },
  },
}));

function Cards() {
  //use style
  const classess = useStyles();

  const data = useStaticQuery(graphql`
    {
      allContentfulFranchisee {
        nodes {
          courseCatalog {
            programsAvailable {
              title
              slug
              id
              shortDescription {
                shortDescription
              }
              image {
                title
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
  const filteredData = [];
  const defaultData =
    data.allContentfulFranchisee.nodes[0].courseCatalog.programsAvailable;
  defaultData.forEach((dataItem, dataIndex) => {
    const filteredItem = Object.assign(
      {},
      {
        node: {
          id: dataItem.id,
          excerpt: dataItem.shortDescription.shortDescription,
          frontmatter: {
            title: dataItem.title,
            date: "Unknown",
            path: "/programs/" + dataItem.slug,
            image: {
              publicURL: dataItem.image.file.url,
            },
          },
        },
      }
    );
    filteredData.push(filteredItem);
  });
  const items = filteredData;

  return (
    <div>
      <Typography variant="h3" className="heading pb-20">
        Programs offered by us
      </Typography>
      <Grid container justify="center" className={classess.root} spacing={3}>
        {items.length > 0
          ? items.map((item, index) => {
              const {
                node: {
                  excerpt,
                  frontmatter: {
                    path,
                    title,
                    image: { publicURL },
                  },
                },
              } = item;

              return (
                <Grid item sm={6} container>
                  <Grid
                    item
                    md={12}
                    container
                    className={`bg-white rounde-lg shadow-md rounded-lg`}
                  >
                    <Grid item md={6}>
                      <div className={`rounded-lg ${classess.cardImage}`}>
                        <img
                          className="object-cover h-full rounded-lg md:rounded-r-none rounded-b-none"
                          src={publicURL}
                          alt="Programs"
                        />
                      </div>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      container
                      direction="column"
                      justify="center"
                    >
                      <Box p={3}>
                        <Typography variant="h6" className="text-blue-500">
                          {title}
                        </Typography>
                        <Box py={2}>
                          <Typography
                            variant="subtitle2"
                            className="text-gray-500"
                          >
                            <Truncate lines={3} ellipsis={<span>... </span>}>
                              {excerpt}
                            </Truncate>
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className="text-blue-500"
                          >
                            <Link to={path}>
                              learn More{" "}
                              <ArrowForwardIosIcon
                                style={{ fontSize: "14px", marginTop: -2 }}
                              />{" "}
                            </Link>
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })
          : null}
      </Grid>
    </div>
  );
}

export default Cards;
