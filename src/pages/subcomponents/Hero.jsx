import { Link } from "react-router-dom";
import Heroimg from "../../assets/homepageimages/homepagehero.jpg"
import "./Hero.css"

function Hero() {
    return (
      <>
        <div className="hero">
          <div className="text">
            <h1 className="herotext">Taste the Art of</h1>
            <h1 className="pasta">Organic Pasta</h1>
            <p className="hero-p">
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              doloremque temporibus at maiores asperiores repellendus
              accusantium magni omnis aperiam placeat dolore ab, praesentium
              autem, consectetur distinctio nostrum. Doloribus, nulla saepe!
            </p>
            <br />
            <br />
            <br />
            <div className="btnsec">
              <Link to="/food">
                <button className="viewbtn">View Food →</button>
              </Link>
              <Link to="/about">
                <button className="abtbtn">About</button>
              </Link>
            </div>
          </div>
          <div className="heroimage">
            <img src={Heroimg} alt="a photo of spaghetti" />
          </div>
        </div>
      </>
    );
}

export default Hero;