import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GeneralInfo from "./components/generalInfo.jsx";
import EducationalExp from "./components/educationalExp.jsx";
import PracticalExp from "./components/practicalExp.jsx";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralInfo />
    <EducationalExp />
    <PracticalExp />
  </StrictMode>
);
