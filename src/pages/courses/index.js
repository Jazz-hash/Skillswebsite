import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import ProgramCatalog from "../../components/program-catalog/ProgramCatalog";
import useCoursesData from "../../hooks/useCoursesData";
import { Link } from "gatsby";
import { Card, CardContent, Typography } from "@material-ui/core";
import {
  programImages,
  programColors,
} from "../../components/program-catalog-item/utils.js";
import "../../css/coursePage.css";
import "aos/dist/aos.css";
import courseStyles from "../../css/course.module.scss";
import {Container} from '@material-ui/core';

const AOS = typeof window !== `undefined` ? require("aos") : null;

if (AOS) {
  AOS.init({ once: true });
}

const addImagesToCourses = (courses, programSlug) => {
  let coursesWithImages = [];
  courses.map((course) => {
    coursesWithImages = [
      ...coursesWithImages,
      {
        ...course,
        imgUrl: programImages[course.courseNumber],
        courseColor: programColors[programSlug],
      },
    ];
  });
  return coursesWithImages;
};

const Programs = (props) => {
  const programsAvailable = useCoursesData();
  let innovationTrackCourses = [];
  let appDevTrackCourses = [];

  // programsAvailable.map((p, index) => {
  //   courses = courses.concat(p.technicalTrack.courses);
  //   if (index == programsAvailable.length - 1) {
  //     courses = courses.concat(p.appDevelopmentTrack.courses);
  //     courses = courses.concat(p.innovationTrack.courses);
  //   }
  // });

  programsAvailable.map((p, index) => {
    if (index == programsAvailable.length - 1) {
      appDevTrackCourses = appDevTrackCourses.concat(
        p.appDevelopmentTrack.courses
      );
      innovationTrackCourses = innovationTrackCourses.concat(
        p.innovationTrack.courses
      );
    }
  });

  return (
    <Page title="Course Catalog">
      <SEO title="Course Catalog" />
      <Container>
      <div className={courseStyles.pageContent}>
        {programsAvailable.map((program, index) => (
          <ProgramCatalog
            key={index}
            title={program.title}
            courses={addImagesToCourses(
              program.technicalTrack.courses,
              program.slug
            )}
          />
        ))}
        <ProgramCatalog
          title="Application Development Track"
          courses={addImagesToCourses(appDevTrackCourses, "dev")}
        />
        <ProgramCatalog
          title="Innovation Track"
          courses={addImagesToCourses(innovationTrackCourses, "inv")}
        />
      </div>
      </Container>
    </Page>
  );
};

export default withRoot(Programs);
