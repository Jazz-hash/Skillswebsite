export const getDifficultyLevel = (courseNumber) => {
  if (courseNumber < 200) return "Beginner";
  else if (courseNumber >= 400) return "Advanced";
  return "Intermediate";
};
