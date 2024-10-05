import { useState } from "react";
import GeneralInfo from "./components/generalInfo.jsx";
import EducationalExp from "./components/educationalExp.jsx";
import PracticalExp from "./components/practicalExp.jsx";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [currentComponent, setCurrentComponent] = useState("GeneralInfo");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "GeneralInfo":
        return <GeneralInfo formData={formData} handleChange={handleChange} />;
      case "EducationalExp":
        return <EducationalExp />;
      case "PracticalExp":
        return <PracticalExp />;
    }
  };

  return (
    <div>
      {renderComponent()}
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
