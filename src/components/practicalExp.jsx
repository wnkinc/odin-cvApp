import { useState } from "react";
import "../styles.css";

function PracticalExp() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [startOfJob, setStartOfJob] = useState("");
  const [endOfJob, setEndOfJob] = useState("");

  return (
    <section className="card">
      <input
        className="practicalExp"
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Enter company name"
        id="companyName"
        required
      />
      <input
        className="practicalExp"
        type="text"
        value={positionTitle}
        onChange={(e) => setPositionTitle(e.target.value)}
        placeholder="Enter your position title"
        id="positionTitle"
        required
      />
      <input
        className="practicalExp"
        type="text"
        value={responsibilities}
        onChange={(e) => setResponsibilities(e.target.value)}
        placeholder="Enter your responsibilities"
        id="responsibilities"
        required
      />
      <input
        className="practicalExp"
        type="text"
        value={startOfJob}
        onChange={(e) => setStartOfJob(e.target.value)}
        placeholder="Enter your starting year of job"
        id="startOfJob"
        required
      />
      <input
        className="practicalExp"
        type="text"
        value={endOfJob}
        onChange={(e) => setEndOfJob(e.target.value)}
        placeholder="Enter your ending year of job"
        id="endOfJob"
        required
      />
    </section>
  );
}

export default PracticalExp;
