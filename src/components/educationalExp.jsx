import PropTypes from "prop-types";
import "../styles.css";

function EducationalExp({ formData, onChange }) {
  return (
    <form className="card">
      {["schoolName", "studyTitle", "schoolStartYear", "schoolEndYear"].map(
        (field) => (
          <input
            key={field}
            className="educationalExp"
            type={"text"}
            value={formData[field]}
            onChange={onChange}
            placeholder={`Enter your ${field}`}
            id={field}
            required
          />
        )
      )}
    </form>
  );
}

EducationalExp.propTypes = {
  formData: PropTypes.shape({
    schoolName: PropTypes.string,
    studyTitle: PropTypes.string,
    startYear: PropTypes.string,
    endYear: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EducationalExp;
