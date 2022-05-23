import { Aside } from "../../components/index";
import { useDocumentTitle } from "../../hooks/custom/index";
const girlTakingNotesPic = require("../../assets/images/Taking notes-bro.png");

function Landing() {
  // SET DOCUMENT TITLE
  useDocumentTitle("Landing");

  // ****************************************************************************************************

  return (
    <div className="main-container">
      <Aside />

      <main className="main">
        <section className="landing-content">
          <div className="text-hero">
            <h1>Meet your modern </h1>
            <h1 className="h2">
              <span className="color-blue">Note Taking App</span>
            </h1>
            <small className="text-center">
              Manage your daily tasks and workflow in a modern way and boost
              your efficiency without any efforts.
            </small>
            <button className="btn btn-primary btn-width-100 pointer">
              Sign up
            </button>
            <small className="styled-link pointer">
              Have an account? Log in
            </small>
          </div>

          <div className="image-hero">
            <img
              className="image-responsive"
              src={girlTakingNotesPic.default}
              alt=""
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export { Landing };
