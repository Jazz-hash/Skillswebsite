const dotenv = require("dotenv");

//if(process.env.NODE_ENV !== 'production'){
dotenv.config();
//}
const companyIndex = parseInt(process.env.company);
console.log("Envirnoment Variable in gatsby-config: " + companyIndex);

module.exports = {
  pathPrefix: "/gatsby-material-ui-business-starter",
  siteMetadata: {
    title: "Fourth Industrial Revolution Education",
    contact: {
      phone: "92-300-826-3374",
      email: "zia@panacloud.com",
    },
    envVars: {
      companyIndex: companyIndex,
    },
    menuLinks: [
      // {
      //   name: "4IR?",
      //   link: "/about4ir",
      // },
      {
        name: "Certification Programs",
        link: "/programs",
      },
      {
        name: "Courses",
        link: "/courses",
      },
      {
        name: "Classes",
        link: "/classes",
      },
      {
        name: "Instructors",
        link: "/instructors",
      },
      {
        name: "FAQs",
        link: "/faqs",
      },
      // {
      //   name: "Management Team",
      //   link: "/team",
      // },
      {
        name: "Contact Us",
        link: "/contactus",
      },
    ],
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6y7x6a0he6ux`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/details/*`] },
    },
    `gatsby-plugin-netlify`,
  ],
};
