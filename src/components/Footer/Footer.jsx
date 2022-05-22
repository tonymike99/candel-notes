import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <small>
          Made with
          <span>
            <i className="fa-solid fa-heart footer-heart-icon"></i>
          </span>
          and
          <span>
            <i className="fa-solid fa-code footer-code-icon" />
          </span>
          by
        </small>
      </div>
      <div className="footer-item">
        <span className="my-name">Tony Mike Auxen</span>
      </div>
      <div className="footer-item footer-icons">
        <a
          className="social-icon"
          href="https://github.com/tonymike99/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github fa-lg footer-github-icon"
            aria-hidden="true"
          />
        </a>
        <a
          className="social-icon"
          href="https://linkedin.com/in/tonymike99"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-linkedin fa-lg footer-linkedin-icon"
            aria-hidden="true"
          />
        </a>
        <a
          className="social-icon"
          href="https://twitter.com/tonymike07"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-twitter fa-lg footer-twitter-icon"
            aria-hidden="true"
          />
        </a>
        <a
          className="social-icon"
          href="mailto:tonymike99@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-solid fa-envelope fa-lg footer-email-icon"
            aria-hidden="true"
          />
        </a>
      </div>
      <div className="footer-item">
        <small>No copyright © issues. Feel free to copy.</small>
      </div>
      <div className="footer-item">
        <small>
          <a href="https://storyset.com/work">Work illustrations by Storyset</a>
        </small>
      </div>
    </footer>
  );
}

export { Footer };
