import { useState } from "react";
import "../styles.css";

function EducationalExp() {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [startOfStudy, setStartOfStudy] = useState("");
  const [endOfStudy, setEndOfStudy] = useState("");

  return (
    <form className="card">
      <input
        className="educationalExp"
        type="text"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
        placeholder="Enter your school's name"
        id="schoolName"
        required
      />
      <input
        className="educationalExp"
        type="text"
        value={titleOfStudy}
        onChange={(e) => setTitleOfStudy(e.target.value)}
        placeholder="Enter your title of study"
        id="titleOfStudy"
        required
      />
      <input
        className="educationalExp"
        type="text"
        value={startOfStudy}
        onChange={(e) => setStartOfStudy(e.target.value)}
        placeholder="Enter your starting year of study"
        id="startOfStudy"
        required
      />
      <input
        className="educationalExp"
        type="text"
        value={endOfStudy}
        onChange={(e) => setEndOfStudy(e.target.value)}
        placeholder="Enter your ending year of study"
        id="endOfStudy"
        required
      />
    </form>
  );
}

export default EducationalExp;
