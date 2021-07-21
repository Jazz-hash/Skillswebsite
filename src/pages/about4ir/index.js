import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import useCompanyData from "../../hooks/useCompanyData";
import { Link } from "gatsby";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import "aos/dist/aos.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
const AOS = typeof window !== `undefined` ? require("aos") : null;

if (AOS) {
  AOS.init({ once: true });
}

const About4ir = (props) => {
  const companyData = useCompanyData();

  console.log("Let's see what we have in companyData: " + JSON.stringify(companyData));

  const about4ir = companyData.about4ir.json;

  console.log("Now let's see what's in about4ir: " + JSON.stringify(about4ir));

  return (
    <Page title="What is the 4th Industrial Revolution?">
      <SEO title="About 4IR" />
      <Typography variant="body1">
        {documentToReactComponents(about4ir)}
      </Typography>
    </Page>
  );
};

export default withRoot(About4ir);