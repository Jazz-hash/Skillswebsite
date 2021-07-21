import withRoot from "../../utils/withRoot";
import React, { useState } from "react";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import useFAQData from "../../hooks/useFAQData";

import "aos/dist/aos.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import FAQItem from "../../components/faq-item/faqItem";
import { Container, TextField } from "@material-ui/core";

const AOS = typeof window !== `undefined` ? require("aos") : null;

if (AOS) {
  AOS.init({ once: true });
}

const FAQs = (props) => {
  const faqData = useFAQData();
  console.log("Let's see what we have in faqData: " + JSON.stringify(faqData));

  const [filteredFAQs, setFilteredFAQs] = React.useState(faqData);
  const [expanded, setExpanded] = React.useState(faqData[0].id);
  const [isOpen, setisOpen] = React.useState(false);

  const handleChange = (newExpanded, newIsOpen) => {
    setExpanded(newExpanded);
    if (expanded !== newExpanded) {
      setisOpen(true);
    } else {
      setisOpen(newIsOpen);
    }
  };

  return (
    <Page title="Frequently Asked Questions">
      <SEO title="Frequently Asked Questions" />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <TextField
            style={{ width: "60%" }}
            label="Search"
            onChange={(ev) =>
              setFilteredFAQs(
                faqData.filter((faq) =>
                  faq.heading.heading
                    .toLowerCase()
                    .includes(ev.target.value.toLowerCase())
                )
              )
            }
          />
        </div>
        {filteredFAQs.map((faq) => (
          <FAQItem
            faq={faq}
            expanded={expanded}
            isOpen={isOpen}
            handleChange={handleChange}
            setFilteredFAQs={setFilteredFAQs}
            faqData={faqData}
          />
        ))}
      </Container>
    </Page>
  );
};

export default withRoot(FAQs);
