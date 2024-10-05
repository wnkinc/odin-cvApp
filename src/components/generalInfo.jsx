import "../styles.css";
import PropTypes from "prop-types";

function GeneralInfo({ formData, onChange }) {
  return (
    <form className="card">
      {["firstName", "lastName", "email", "phone"].map((field) => (
        <input
          key={field}
          className="generalInfo"
          type={field === "email" ? "email" : "text"}
          value={formData[field]}
          onChange={onChange}
          placeholder={`Enter your ${field}`}
          id={field}
          required
        />
      ))}
    </form>
  );
}

GeneralInfo.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GeneralInfo;
