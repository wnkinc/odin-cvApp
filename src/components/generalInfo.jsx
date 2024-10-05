import "../styles.css";

function GeneralInfo({
  firstName,
  lastName,
  email,
  phone,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
}) {
  return (
    <section className="card">
      <input
        className="generalInfo"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter your first name"
        id="firstName"
        required
      />
      <input
        className="generalInfo"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter your last name"
        id="lastName"
        required
      />
      <input
        className="generalInfo"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        id="email"
        required
      />
      <input
        className="generalInfo"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Enter your phone number"
        id="phone"
        required
      />
    </section>
  );
}

export default GeneralInfo;
