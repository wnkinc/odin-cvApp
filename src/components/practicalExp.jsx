import PropTypes from "prop-types";
import "../styles.css";

function PracticalExp({ formData, onChange }) {
  return (
    <form className="card">
      {[
        "companyName",
        "positionTitle",
        "responsibilities",
        "workStartYear",
        "workEndYear",
      ].map((field) =>
        field === "responsibilities" ? (
          <textarea
            key={field}
            className="practicalExp"
            value={formData[field]}
            onChange={onChange}
            placeholder={`Enter your ${field}`}
            id={field}
            rows="5"
            cols="33"
            required
          />
        ) : (
          <input
            key={field}
            className="practicalExp"
            type="text"
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

PracticalExp.propTypes = {
  formData: PropTypes.shape({
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    responsibilities: PropTypes.string,
    workStartYear: PropTypes.string,
    workEndYear: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PracticalExp;
