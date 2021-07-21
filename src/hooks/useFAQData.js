import React from "react";
import { useStaticQuery, graphql } from "gatsby";

//https://www.gatsbyjs.org/docs/use-static-query/

const UseFAQData = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulFranchisee {
        edges {
          node {
            faqs {
              id
              heading {
                heading
                childMarkdownRemark {
                  html
                }
              }
              description {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    }
  `);
  //return <pre>{JSON.stringify(data, null, 4)}</pre>
  return data.allContentfulFranchisee.edges[0].node.faqs;
};

export default UseFAQData;
