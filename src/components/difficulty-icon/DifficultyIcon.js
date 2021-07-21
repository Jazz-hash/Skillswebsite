import React from "react";

export const DifficultyIcon = ({ DifficultyLevel }) => {
  let emphasisColor = "black";
  let nonEmphasisColor = "#D2D2D6";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 20V10"
        stroke={
          DifficultyLevel === "Beginner" ? nonEmphasisColor : emphasisColor
        }
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M18 20V4"
        stroke={
          DifficultyLevel === "Advanced" ? emphasisColor : nonEmphasisColor
        }
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M6 20V16"
        stroke={emphasisColor}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
