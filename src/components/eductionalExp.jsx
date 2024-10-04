import { useState } from "react";

function EducationalExp() {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");

  return (
    <form>
      <input
        className="generalInfo"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter your first name"
        id="firstName"
        required
      />
    </form>
  );
}

export default EducationalExp;
