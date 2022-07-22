import { Link } from "react-router-dom";
import { Aside } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
import { useAuth } from "../../hooks/context/index";
const takingNotesImage = require("../../assets/images/taking_notes.svg");

function Home() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Home");

  // ****************************************************************************************************

  const { encodedToken } = useAuth();

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="hero-content">
          <div className="hero-text">
            <h3 className="h3">Meet your modern </h3>

            <h2 className="h2">
              <span className="color-blue">Note Taking App</span>
            </h2>

            <p className="text-grey text-center">
              Manage your daily tasks and workflow in a modern way and boost
              your efficiency without any efforts.
            </p>

            {!encodedToken && (
              <Link to="/auth">
                <button className="btn btn-primary btn-fixed pointer">
                  Log in
                </button>
              </Link>
            )}
          </div>

          <div className="hero-image">
            <img
              className="image-responsive"
              src={takingNotesImage.default}
              alt=""
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export { Home };
