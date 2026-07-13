import {Link} from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navsection">
          <h1 className="name">WestBrook Pasta</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/food" >Food</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/contact" className="contact-pill">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
