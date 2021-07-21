import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import programCatalogItemStyles from "./programCatalogItem.module.scss";
import { DifficultyIcon } from "../difficulty-icon/DifficultyIcon";
import { programDifficulty } from "./utils";

export default function ProgramCatalogItem({ course, courseColor }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: `${hovered ? courseColor : "white"}`,
        transition: `0.2s ease`,
        borderBottom: `4px solid ${courseColor}`,
      }}
      className={programCatalogItemStyles.card}
    >
      <CardActionArea className={programCatalogItemStyles.actionArea}>
        <CardMedia
          component="img"
          alt="Course Image"
          image={course.imgUrl}
          title="Course Image"
          className={programCatalogItemStyles.media}
        />
        <CardContent className={programCatalogItemStyles.content}>
          <div style={{ height: "80%", overflow: "hidden" }}>
            <div className={programCatalogItemStyles.courseNumber}>
              <Typography
                style={{
                  backgroundColor: `${hovered ? "white" : ""}`,
                  borderRadius: `${hovered ? "0.5rem" : ""}`,
                  color: "light-grey",
                  borderLeft: `5px solid ${hovered ? "white" : courseColor}`,
                }}
                className={programCatalogItemStyles.value}
              >
                {course.courseNumber}
              </Typography>
            </div>
            <Typography
              gutterBottom
              variant="h6"
              style={{ color: `${hovered ? "white" : "black"}` }}
              className={programCatalogItemStyles.courseTitle}
            >
              {course.title}
            </Typography>
          </div>
          <div className={programCatalogItemStyles.difficultyIndicator}>
            <span>
              <DifficultyIcon
                DifficultyLevel={programDifficulty[course.courseNumber]}
              />
            </span>
            <Typography
              style={{ color: `${hovered ? "white" : ""}` }}
              variant="body2"
            >
              {programDifficulty[course.courseNumber]}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
