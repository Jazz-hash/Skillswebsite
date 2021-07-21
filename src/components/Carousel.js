import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Truncate from "react-truncate";
import { Link } from "gatsby";
import Container from "@material-ui/core/Container";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/styles/withStyles";
import carouselData from "../services/carousel-service.json";
import styles from "./slides.module.css";

function Cards() {
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
    <Grid container direction="row" justify="center" alignItems="center">
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
              <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                <div key={index} className={styles.root}>
                  <Card>
                    <CardActionArea>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <CardMedia
                            className={styles.image}
                            component="img"
                            image={publicURL}
                            title="Contemplative Reptile"
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <CardContent className={styles.infoBox}>
                            <h2 className="infoBox">{title}</h2>

                            <p className="excerpt">
                              <Truncate lines={3} ellipsis={<span>... </span>}>
                                {excerpt}
                              </Truncate>
                            </p>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </CardActionArea>
                    <CardActions
                      style={{
                        paddingBottom: "2rem",
                        paddingLeft: "2.5rem",
                      }}
                    >
                      <Link to={path}>
                        <button className={` ${styles.butn} ${styles.butnBg}`}>
                          <span>Learn More {">>"} </span>
                        </button>
                      </Link>
                    </CardActions>
                  </Card>
                </div>
              </Grid>
            );
          })
        : null}
    </Grid>
  );
}

export default Cards;
