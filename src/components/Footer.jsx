import "./Navbar.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="name">WestBrook Pasta</div>
        <div className="first">
          <h3>Contact</h3>
          <br />
          <br />
          <p>
            Lorem, ipsum dolor sit amet <br />
            consectetur adipisicing elit.
          </p>
        </div>
        <div className="second">
          <h3>Classic Pasta</h3>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit.
          </p>
        </div>

        <div className="iconsection">
          <a
            href="https://github.com/Charlton-Lenso2"
            target="_blank"
            className="icon-github"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/charlton-lenso-1678353ab/"
            target="_blank"
            className="icon-linkedin"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:lensocharlton63@gmail.com" className="icon-email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p>&copy; Charlton Lenso | 2026</p>
      </div>
    </>
  );
}

export default Footer;
