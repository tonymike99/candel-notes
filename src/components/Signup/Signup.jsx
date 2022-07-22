import { useState } from "react";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useAuth } from "../../hooks/context/index";

function Signup({ setComponent }) {
  // SET DOCUMENT TITLE
  useDocumentTitle("Signup");

  // ****************************************************************************************************

  const { authenticateSignupDetails } = useAuth();
  const [passwordType, setPasswordType] = useState("password");
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleFirstNameOnChange = (e) => {
    setSignupDetails({ ...signupDetails, firstName: e.target.value });
  };

  const handleLastNameOnChange = (e) => {
    setSignupDetails({ ...signupDetails, lastName: e.target.value });
  };

  const handleEmailOnChange = (e) => {
    setSignupDetails({ ...signupDetails, email: e.target.value });
  };

  const handlePasswordOnChange = (e) => {
    setSignupDetails({ ...signupDetails, password: e.target.value });
  };

  const handlePasswordType = () => {
    passwordType === "text"
      ? setPasswordType("password")
      : setPasswordType("text");
  };

  const handleGuestSignupOnClick = () => {
    setSignupDetails({
      firstName: "Tony",
      lastName: "Mike",
      email: "tonymike@gmail.com",
      password: "12345",
    });
  };

  const handleSignupOnClick = (e) => {
    e.preventDefault();
    authenticateSignupDetails(signupDetails);
  };

  // ****************************************************************************************************

  return (
    <section className="auth">
      <h3 className="h3">SIGN UP</h3>

      <form className="form" action="#">
        <div className="form-control">
          <input
            type="text"
            id="firstNameInput"
            placeholder="First Name"
            required
            value={signupDetails.firstName}
            onChange={(e) => handleFirstNameOnChange(e)}
          />
        </div>

        <div className="form-control">
          <input
            type="text"
            id="lastNameInput"
            placeholder="Last Name"
            required
            value={signupDetails.lastName}
            onChange={(e) => handleLastNameOnChange(e)}
          />
        </div>

        <div className="form-control">
          <input
            type="email"
            id="emailInput"
            placeholder="Email Address"
            required
            value={signupDetails.email}
            onChange={(e) => handleEmailOnChange(e)}
          />
        </div>

        <div className="form-control relative">
          <input
            type={passwordType}
            id="passwordInput"
            placeholder="Password"
            required
            value={signupDetails.password}
            onChange={(e) => handlePasswordOnChange(e)}
          />
          <span
            className="absolute badge-inside-center-right color-black"
            onClick={handlePasswordType}
          >
            {passwordType === "password" ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </span>
        </div>

        <div className="form-control">
          <button
            className="btn btn-primary btn-width-100 pointer"
            type="submit"
            onClick={(e) => handleSignupOnClick(e)}
          >
            Sign up
          </button>
        </div>

        <small
          className="styled-link pointer"
          onClick={handleGuestSignupOnClick}
        >
          Guest Signup
        </small>

        <small
          className="styled-link pointer"
          onClick={() => setComponent("Login")}
        >
          Have an account? Log in
        </small>
      </form>
    </section>
  );
}

export { Signup };
