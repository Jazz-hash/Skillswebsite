import withRoot from "../../utils/withRoot";
import React from "react";

import SEO from "../../components/SEO";
import Page from "../../components/Page";

import { Box, Typography, TextField, Button } from "@material-ui/core";
import "aos/dist/aos.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../../css/contactus.css";
import Grid from "@material-ui/core/Grid";
import { messageIcon } from "../../assets/mail.png";
import {
  Facebook,
  Twitter,
  Whatsapp,
  Email,
  LocationExit,
  Phone,
} from "mdi-material-ui";

const AOS = typeof window !== `undefined` ? require("aos") : null;

if (AOS) {
  AOS.init({ once: true });
}

const ContactUs = (props) => {
  return (
    <Page title="Contact Us">
      <SEO title="Contact Us" />
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          <div className="contactUsContainer">
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Box m={2}>
                  <Typography variant="h5" className="contactUsTitle">
                    Send us a Message
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={6} className="onMobileHide">
                <div style={{ padding: "10px", textAlign: "right" }}>
                  <Email style={{ fontSize: "44px", color: "#004e92" }} />
                </div>
              </Grid>
            </Grid>

            <form noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <Box m={2}>
                    <TextField
                      fullWidth
                      id="name"
                      label="Your Name"
                      type="text"
                    />
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Box m={2}>
                    <TextField fullWidth id="email" label="Email Address" />
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Box m={2}>
                    <TextField
                      fullWidth
                      id="address"
                      label="Your Address"
                      type="text"
                    />
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <Box m={2}>
                    <TextField fullWidth id="phone" label="Contact Number" />
                  </Box>
                </Grid>

                <Grid item sm={12} xs={12}>
                  <Box m={2}>
                    <TextField
                      fullWidth
                      id="message"
                      label="Message"
                      rows={7}
                      multiline={true}
                    />
                  </Box>
                </Grid>
                <Grid item sm={6}>
                  <Box m={2} mt={3}>
                    <Button variant="contained" className="sButton">
                      Submit Form
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
            <Box m={2}>
              <Typography>
                * One of our representative will contact you within 24 hours
                after you submit the form.
              </Typography>
            </Box>
          </div>
        </Grid>
        <Grid item sm={4} className="onMobileHide">
          <div className="contactUsSecondContainer">
            <Box mt={4}>
              <Typography className="contactInfoTitle" variant="h5">
                Contact Information
              </Typography>
            </Box>
            <Box mt={2} className="contactInfoText">
              <Box mt={1} style={{ display: "flex" }}>
                <LocationExit />
                <Typography style={{ color: "white", marginLeft: "10px" }}>
                  360 King Street FeasterVille Trevose, PA 19053
                </Typography>
              </Box>
              <Box mt={7} style={{ display: "flex" }}>
                <Phone />
                <Typography style={{ color: "white", marginLeft: "10px" }}>
                  (800) 900-200-300
                </Typography>
              </Box>
              <Box mt={10} style={{ display: "flex" }}>
                <Email />
                <Typography style={{ color: "white", marginLeft: "10px" }}>
                  ingo@abc.com
                </Typography>
              </Box>
              <Box mt={10}>
                <Facebook
                  style={{
                    marginRight: "30px",
                    fontSize: "30px",
                  }}
                />
                <Twitter style={{ marginRight: "30px", fontSize: "30px" }} />
                <Whatsapp style={{ fontSize: "30px" }} />
              </Box>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Page>
  );
};

export default withRoot(ContactUs);
