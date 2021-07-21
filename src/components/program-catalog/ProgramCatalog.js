import React from "react";
import ProgramCatalogItem from "../program-catalog-item/ProgramCatalogItem";
import { Grid } from "@material-ui/core";
import { Link } from "gatsby";

import programCatalogStyles from "./programCatalog.module.scss";

const ProgramCatalog = ({ title, courses }) => {
  return (
    <div className={programCatalogStyles.programCatalog}>
      <h1 className={programCatalogStyles.programCatalogHeader}>{title}</h1>
      <div className={programCatalogStyles.programs}>
        <Grid
          container
          spacing={3}
          className={programCatalogStyles.programsInner}
          // direction="row"
          // justify="center"
          // alignItems="stretch"
        >
          {courses.map((course, index) => (
            <Grid
              item
              className={programCatalogStyles.programsInner}
              key={index}
              xs={9}
              sm={5}
              md={3}
              lg={3}
            >
              <Link
                style={{ height: "100%", width: "100%" }}
                to={"/programs/tracks/courses/" + course.courseNumber}
              >
                <ProgramCatalogItem
                  course={course}
                  courseColor={course.courseColor}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ProgramCatalog;
