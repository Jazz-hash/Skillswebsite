import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { FormatQuoteClose, FormatQuoteOpen } from "mdi-material-ui";
import man from "../assets/man.png";
import "./../css/home.css";
import map from "../assets/map2.png";

const Testimonials = () => {
  const list = [
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      user: "User 1",
      role: "Student",
    },
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      user: "User 2",
      role: "Student",
    },
    {
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      user: "User 3",
      role: "Student",
    },
  ];
  console.log(list.length);
  return (
    <Box
      style={{
        background: "rgb(224,224,224)",
        background:
          "linear-gradient(180deg, rgba(238,241,243,1) 0%, rgba(238,241,243,1) 35%, rgba(248,250,250,1) 75%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Container style={{ padding: 40 }}>
        <Typography
          variant="h3"
          align="center"
          style={{ fontFamily: "Poppins", fontWeight: "700" }}
          component="h5"
        >
          Testimonials
        </Typography>
        <FormatQuoteOpen style={{fontSize: "100px",color:"#858585"}} />
        <Grid className="backGrid" container spacing={10}>
          {list.map((listData, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              key={index}
              style={{
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 50,
              }}
              className={`${index % 2 !== 0 ? "bordered" : null}`}
            >
              <div>
                <img
                  src={man}
                  alt="man"
                  style={{ display: "block", margin: "auto", width: "90px" }}
                />
              </div>
              <br />
              <br />

              <Typography
                variant="h6"
                component="h5"
                style={{
                  lineHeight: "1.4",
                  letterSpacing: "3px",
                  color: "#363636",
                }}
              >
                {listData.text}
              </Typography>

              <br />
              <br />
              <div
                style={{
                  margin: "auto",
                  width: "20%",
                  borderTop: "3px solid #000",
                }}
              ></div>
              <br />
              <Typography
                variant="body1"
                component="h4"
                style={{ letterSpacing: "4px", textTransform: "uppercase" }}
              >
                {listData.user}
              </Typography>
              <Typography
                variant="body2"
                component="h6"
                style={{ letterSpacing: "4px" }}
              >
                {listData.role}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <FormatQuoteClose style={{fontSize: "100px",float:"right",color:"#858585"}} />
      </Container>
    </Box>
  );
};
export default Testimonials;
