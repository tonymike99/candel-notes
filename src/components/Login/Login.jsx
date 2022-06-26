import { useState } from "react";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useAuth } from "../../hooks/context/index";

function Login({ setComponent }) {
  // SET DOCUMENT TITLE
  useDocumentTitle("Login");

  // ****************************************************************************************************

  const { authenticateLoginDetails } = useAuth();
  const [passwordType, setPasswordType] = useState("password");
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleEmailOnChange = (e) => {
    setLoginDetails({ ...loginDetails, email: e.target.value });
  };

  const handlePasswordOnChange = (e) => {
    setLoginDetails({ ...loginDetails, password: e.target.value });
  };

  const handlePasswordType = () => {
    passwordType === "text"
      ? setPasswordType("password")
      : setPasswordType("text");
  };

  const handleGuestLoginOnClick = () => {
    setLoginDetails({
      email: "guest_user@gmail.com",
      password: "12345",
    });
  };

  const handleLoginOnClick = (e) => {
    e.preventDefault();
    authenticateLoginDetails(loginDetails);
  };

  // ****************************************************************************************************

  return (
    <section className="auth">
      <h3 className="h3">LOGIN</h3>

      <form className="form" action="#">
        <div className="form-control">
          <input
            type="email"
            id="emailInput"
            placeholder="Email Address"
            required
            value={loginDetails.email}
            onChange={(e) => handleEmailOnChange(e)}
          />
        </div>

        <div className="form-control relative">
          <input
            type={passwordType}
            id="passwordInput"
            placeholder="Password"
            required
            value={loginDetails.password}
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
            onClick={(e) => handleLoginOnClick(e)}
          >
            Login
          </button>
        </div>

        <small
          className="styled-link pointer"
          onClick={handleGuestLoginOnClick}
        >
          Guest Login
        </small>

        <small
          className="styled-link pointer"
          onClick={() => setComponent("Signup")}
        >
          Don't have an account? Sign up
        </small>
      </form>
    </section>
  );
}

export { Login };
