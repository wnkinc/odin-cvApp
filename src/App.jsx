import { useState } from "react";
import GeneralInfo from "./components/generalInfo.jsx";
import EducationalExp from "./components/educationalExp.jsx";
import PracticalExp from "./components/practicalExp.jsx";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [educationalExps, setEducationalExps] = useState([
    {
      schoolName: "",
      studyTitle: "",
      schoolStartYear: "",
      schoolEndYear: "",
    },
  ]);

  const [practicalExps, setPracticalExps] = useState([
    {
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      workStartYear: "",
      workEndYear: "",
    },
  ]);

  const [currentComponent, setCurrentComponent] = useState("GeneralInfo");

  const handleGeneralInfoChange = (e) => {
    const { id, value } = e.target;
    setGeneralInfo((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleEducationalExpChange = (index, e) => {
    const { id, value } = e.target;
    setEducationalExps((prevData) =>
      prevData.map((exp, i) => (i === index ? { ...exp, [id]: value } : exp))
    );
  };

  const addEducationalExp = () => {
    setEducationalExps([
      ...educationalExps,
      {
        schoolName: "",
        studyTitle: "",
        schoolStartYear: "",
        schoolEndYear: "",
      },
    ]);
  };

  const handlePracticalExpChange = (index, e) => {
    const { id, value } = e.target;
    setPracticalExps((prevData) =>
      prevData.map((exp, i) => (i === index ? { ...exp, [id]: value } : exp))
    );
  };

  const addPracticalExp = () => {
    setPracticalExps([
      ...practicalExps,
      {
        companyName: "",
        positionTitle: "",
        responsibilities: "",
        workStartYear: "",
        workEndYear: "",
      },
    ]);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "GeneralInfo":
        return (
          <GeneralInfo
            formData={generalInfo}
            onChange={handleGeneralInfoChange}
          />
        );
      case "EducationalExp":
        return (
          <div>
            {educationalExps.map((exp, index) => (
              <EducationalExp
                key={index}
                formData={exp}
                onChange={(e) => handleEducationalExpChange(index, e)}
              />
            ))}
            <button onClick={addEducationalExp}>
              Add Another Educational Exp
            </button>
          </div>
        );
      case "PracticalExp":
        return (
          <div>
            {practicalExps.map((exp, index) => (
              <PracticalExp
                key={index}
                formData={exp}
                onChange={(e) => handlePracticalExpChange(index, e)}
              />
            ))}
            <button onClick={addPracticalExp}>Add Another Practical Exp</button>
          </div>
        );
    }
  };

  const [showResume, setShowResume] = useState(false);

  const handlePrint = () => {
    setShowResume(true);
  };

  const handleEdit = () => {
    setShowResume(false);
  };

  const renderResume = () => (
    <div className="resume">
      <h2>
        {generalInfo.firstName} {generalInfo.lastName}
      </h2>
      <p>Email: {generalInfo.email}</p>
      <p>Phone: {generalInfo.phone}</p>

      <h3>Educational Experience</h3>
      {educationalExps.map((exp, index) => (
        <div key={index}>
          <p>
            <strong>{exp.studyTitle}</strong> - {exp.schoolName}
          </p>
          <p>
            {exp.schoolStartYear} - {exp.schoolEndYear}
          </p>
        </div>
      ))}

      <h3>Practical Experience</h3>
      {practicalExps.map((exp, index) => (
        <div key={index}>
          <p>
            <strong>{exp.positionTitle}</strong> - {exp.companyName}
          </p>
          <p>
            {exp.workStartYear} - {exp.workEndYear}
          </p>
          <p>{exp.responsibilities}</p>
        </div>
      ))}

      <button onClick={handleEdit} className="edit-button">
        Edit
      </button>
    </div>
  );

  return (
    <div>
      {!showResume ? (
        <>
          <div className="button-container">
            <button onClick={() => setCurrentComponent("GeneralInfo")}>
              General Info
            </button>
            <button onClick={() => setCurrentComponent("EducationalExp")}>
              Educational Experience
            </button>
            <button onClick={() => setCurrentComponent("PracticalExp")}>
              Practical Experience
            </button>
            <button onClick={handlePrint}>Print</button>
          </div>
          {renderComponent()}
        </>
      ) : (
        renderResume()
      )}
    </div>
  );
}

export default App;
