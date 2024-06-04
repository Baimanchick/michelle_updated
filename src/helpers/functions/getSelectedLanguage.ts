export const getSelectedLanguage = () => {
  return localStorage.getItem("selectedLanguage") || "ru";
};
