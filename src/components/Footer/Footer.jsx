import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <small>
        Made with
        <i className="fa-solid fa-heart color-heart" />
        and
        <i className="fa-solid fa-code color-code" />
        by
      </small>

      <span className="my-name">Tony Mike Auxen</span>

      <div className="footer-icons">
        <a
          href="https://github.com/tonymike99/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-github fa-lg color-github"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://linkedin.com/in/tonymike99"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-linkedin fa-lg color-linkedin"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://twitter.com/tonymike07"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-twitter fa-lg color-twitter"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://facebook.com/profile.php?id=100009973660727"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-facebook fa-lg color-facebook"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://instagram.com/tonymike99"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-instagram fa-lg color-instagram"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://stackoverflow.com/users/15880393/tony-mike"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-stack-overflow fa-lg color-stackoverflow"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://hashnode.com/@tonymike99"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-hashnode fa-lg color-hashnode"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://medium.com/@tonymike99"
          target="_blank"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-medium fa-lg color-medium"
            aria-hidden="true"
          />
        </a>
        <a href="mailto:tonymike99@gmail.com" target="_blank" rel="noreferrer">
          <i
            className="fa-solid fa-envelope fa-lg color-email"
            aria-hidden="true"
          />
        </a>
      </div>

      <small>No copyright © issues. Feel free to copy.</small>

      <small>
        <a href="https://storyset.com/web">Web illustrations by Storyset</a>
      </small>
    </footer>
  );
}

export { Footer };
