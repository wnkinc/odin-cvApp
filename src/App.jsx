import { useState } from "react";
import GeneralInfo from "./components/generalInfo.jsx";
import EducationalExp from "./components/educationalExp.jsx";
import PracticalExp from "./components/practicalExp.jsx";

function App() {
  // State management for all form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  // State to track which component is currently active
  const [currentComponent, setCurrentComponent] = useState("GeneralInfo");

  // Function to render the current component
  const renderComponent = () => {
    switch (currentComponent) {
      case "GeneralInfo":
        return (
          <GeneralInfo
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPhone={setPhone}
          />
        );
      case "EducationalExp":
        return <EducationalExp />;
      case "PracticalExp":
        return (
          <PracticalExp
            responsibilities={responsibilities}
            setResponsibilities={setResponsibilities}
          />
        );
      default:
        return <GeneralInfo />;
    }
  };

  return (
    <div>
      {/* Render the current component */}
      {renderComponent()}

      {/* Buttons to switch components */}
      <div>
        <button onClick={() => setCurrentComponent("GeneralInfo")}>
          General Info
        </button>
        <button onClick={() => setCurrentComponent("EducationalExp")}>
          Educational Experience
        </button>
        <button onClick={() => setCurrentComponent("PracticalExp")}>
          Practical Experience
        </button>
      </div>
    </div>
  );
}

export default App;
