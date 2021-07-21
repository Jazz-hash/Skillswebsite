import React from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/styles/withStyles";
import programs from "../hooks/useProgramsData";
import { ChevronRight } from "mdi-material-ui";
import ListOfProgramsStyles from "./ListOfPrograms.module.scss";
import slideStyles from "../components/slides.module.css";
import "aos/dist/aos.css";
const AOS = typeof window !== `undefined` ? require("aos") : null;

if (AOS) {
  AOS.init();
}

const styles = {
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cover: {
    height: "400px",
  },
  root: {
    display: "flex",
    boxShadow: "none !important",
  },
  findMore: {
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    marginTop: "10px",
  },
  findMoreImg: {
    marginLeft: "25px",
    width: "53px",
    background: "#f4f5f6",
    padding: "10px",
    borderRadius: "34px",
  },
  contentTitle: {
    color: "black",
    fontWeight: "bolder",
  },
  rootWithMargin: {
    display: "flex",
    boxShadow: "none !important",
    marginTop: "70px",
  },
};

const programListImages = {
  ai: require("../assets/ai.jpeg"),
  iot: require("../assets/iot.jpeg"),
  cn: require("../assets/cn.jpeg"),
  bc: require("../assets/bc.jpeg"),
};

const ListOfPrograms = (props) => {
  const { classes } = props;
  const programsAvailable = programs();
  return programsAvailable.map((program, index) => (
    <div
      data-aos="fade-up"
      key={"/programs/" + program.slug}
      className={ListOfProgramsStyles.programItem}
    >
      <div className={ListOfProgramsStyles.programItemContent}>
        <span className={ListOfProgramsStyles.programItemHeadingContainer}>
          <span style={{ borderBottom: "1px solid grey" }}>
            Certified {program.title} Professional
          </span>
        </span>
        <span className={ListOfProgramsStyles.programItemDetails}>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: program.shortDescription.childMarkdownRemark.html,
            }}
          ></Typography>
        </span>
        <Link
          to={"/programs/" + program.slug}
          style={{ width: "100%" }}
          state={{ program: program }}
        >
          <button
            className={`${slideStyles.butn} ${slideStyles.butnBg}`}
            style={{ width: 100 + "%", marginTop: 10 }}
          >
            <span>Find More </span>
          </button>
        </Link>
      </div>
      <div
        style={{ backgroundImage: `url(${programListImages[program.slug]})` }}
        className={ListOfProgramsStyles.programItemImage}
      >
        {/* <img
          style={{ width: null, height: null, backgroundPosition:'center', ba }}
          src={programListImages[program.slug]}
          alt="program item image"
        /> */}
      </div>
    </div>
    // <Box boxShadow={4}>
    //   <Card
    //     className={index === 0 ? classes.root : classes.rootWithMargin}
    //     data-aos="fade-up"
    //     key={"/programs/" + program.slug}
    //     style={{ borderBottom: "8px solid #111" }}
    //   >
    //     <Grid container justify="center">
    //       {index === 1 || index === 3 ? (
    //         <React.Fragment>
    //           <Grid item md={4} xs={12}>
    //             <CardContent className={classes.content}>
    //               <Typography
    //                 gutterBottom
    //                 variant="h4"
    //                 className={classes.contentTitle}
    //               >
    //                 Certified {program.title} Professional
    //               </Typography>
    //               <Typography
    //                 variant="body1"
    //                 dangerouslySetInnerHTML={{
    //                   __html: program.shortDescription.childMarkdownRemark.html,
    //                 }}
    //               ></Typography>
    //               <Link
    //                 to={"/programs/" + program.slug}
    //                 state={{ program: program }}
    //                 style={{ color: "black" }}
    //               >
    //                 <div className={classes.findMore}>
    //                   Find more <ChevronRight />
    //                 </div>
    //               </Link>
    //             </CardContent>
    //           </Grid>
    //           <Grid item md={8} xs={12} style={{ padding: 20 }}>
    //             <Box boxShadow={4}>
    //               <CardMedia
    //                 className={classes.cover}
    //                 image={program.image.file.url}
    //               />
    //             </Box>
    //           </Grid>
    //         </React.Fragment>
    //       ) : (
    //         <React.Fragment>
    //           <Grid item md={8} xs={12} style={{ padding: 20 }}>
    //             <Box boxShadow={4}>
    //               <CardMedia
    //                 className={classes.cover}
    //                 image={program.image.file.url}
    //               />
    //             </Box>
    //           </Grid>
    //           <Grid item md={4} xs={12}>
    //             <CardContent className={classes.content}>
    //               <Typography
    //                 gutterBottom
    //                 variant="h4"
    //                 className={classes.contentTitle}
    //               >
    //                 Certified {program.title} Professional
    //               </Typography>
    //               <Typography
    //                 variant="body1"
    //                 dangerouslySetInnerHTML={{
    //                   __html: program.shortDescription.childMarkdownRemark.html,
    //                 }}
    //               ></Typography>
    //               <Link
    //                 to={"/programs/" + program.slug}
    //                 state={{ program: program }}
    //                 style={{ color: "black" }}
    //               >
    //                 <div className={classes.findMore}>
    //                   Find more <ChevronRight />
    //                 </div>
    //               </Link>
    //             </CardContent>
    //           </Grid>
    //         </React.Fragment>
    //       )}
    //     </Grid>
    //   </Card>
    // </Box>
  ));
};

export default withStyles(styles)(ListOfPrograms);
