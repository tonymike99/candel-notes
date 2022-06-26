import "./Header.css";
import { Link } from "react-router-dom";
import { useTheme, useAuth } from "../../hooks/context/index";

function Header() {
  const { theme, setTheme } = useTheme();
  const { encodedToken, logoutUserDetails } = useAuth();

  /* **************************************************************************************************** */

  // To handle logout button onClick
  const handlerLogout = () => {
    logoutUserDetails();
  };

  // To handle theme button onClick
  const handlerTheme = () => {
    document.body.classList.toggle(theme);
    setTheme(theme === "dark-theme" ? "light-theme" : "dark-theme");
  };

  /* **************************************************************************************************** */

  return (
    <header className="header">
      <Link to="/" className="brand-name">
        Candel Notes
      </Link>

      <nav>
        <ul className="list list-horizontal">
          <li>
            {encodedToken ? (
              <Link to="/" className="styled-link" onClick={handlerLogout}>
                Logout <i className="fa-solid fa-right-from-bracket fa-lg"></i>
              </Link>
            ) : (
              <Link to="/auth" className="styled-link">
                Login <i className="fas fa-user fa-lg" />
              </Link>
            )}
          </li>
          <li>|</li>
          <li>
            <a
              className="styled-link"
              href="https://github.com/tonymike99/candel-notes"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-lg" />
            </a>
          </li>
          <li>
            <Link to="#" className="styled-link" onClick={handlerTheme}>
              <i
                id="theme-icon"
                className={
                  theme === "dark-theme"
                    ? "fas fa-sun fa-lg"
                    : "fas fa-moon fa-lg"
                }
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
