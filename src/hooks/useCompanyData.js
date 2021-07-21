import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//https://www.gatsbyjs.org/docs/use-static-query/

const UseCompanyData = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulFranchisee {
      edges {
        node {
          companyName
          about4ir {
            json
          }
          logoSmall {
            file {
              url
            }
          }
        }
      }
  }
}

`)
  //return <pre>{JSON.stringify(data, null, 4)}</pre>
  return data.allContentfulFranchisee.edges[0].node;
}

export default UseCompanyData;