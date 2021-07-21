import withRoot from "../utils/withRoot";
import React from "react";
import Page from "../components/Page";
import image from "./bg0.jpg";
import "../css/utilities.css";

const Component = () => {
  return (
    <Page title="Not Found">
      <p className="text-center text-3xl">
        <b>Hey!</b> You just hit a page that doesn't exist...
      </p>
    </Page>
  );
};

export default withRoot(Component);
