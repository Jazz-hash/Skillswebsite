import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import {Container} from '@material-ui/core';
import SEO from "../../components/SEO";
import Page from "../../components/Page";
//import List from "../../components/List";
import ListOfPrograms from "../../components/ListOfPrograms";

const Programs = (props) => {
  //const programs = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Certification Programs of Study">
      <SEO title="Certification Programs of Study" />
      {/*<List items={programs} />*/}
      <Container>
      <ListOfPrograms />
      </Container>
    </Page>
  );
};



export default withRoot(Programs);
