import React, { useState } from "react";
import faqStyles from "./faqItem.module.scss";

const FAQItem = ({ faq, expanded, isOpen, handleChange }) => {
  return (
    <div className={faqStyles.faqItem}>
      <div
        onClick={() => handleChange(faq.id, !isOpen)}
        className={faqStyles.itemHeader}
      >
        <span className={faqStyles.itemHeaderTag}>Q.</span>
        <span
          className={faqStyles.itemHeading}
          dangerouslySetInnerHTML={{
            __html: faq.heading.childMarkdownRemark.html,
          }}
        ></span>
        <span className={faqStyles.icon}>
          {expanded === faq.id && isOpen ? "-" : "+"}
        </span>
      </div>
      <div
        className={`${expanded === faq.id && isOpen ? "" : faqStyles.hide} ${
          faqStyles.itemDetails
        }`}
      >
        <span className={faqStyles.itemDetailsTag}>A.</span>
        <span
          className={faqStyles.itemContent}
          dangerouslySetInnerHTML={{
            __html: faq.description.childMarkdownRemark.html,
          }}
        ></span>
      </div>
    </div>
  );
};

export default FAQItem;
