import "./SubHero.css"
import firstpic from "../../assets/homepageimages/homepageimg1.jpg"
import secondpic from "../../assets/homepageimages/home2.jpg"
import { Link } from "react-router-dom";

function SubHero() {
  return (
    <>
      <div className="subhero">
        <div className="menu-highlights">
          <h2>Menu Highlights</h2>
          <br />
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            delectus modi libero, velit numquam rerum laborum facere et! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Excepturi esse
            qui vel, necessitatibus, velit eaque ipsam dolor nostrum quae ipsum
            nulla quia in, aperiam nam deserunt rem officia accusantium ullam.
          </p>
        </div>
        <div className="pic1">
          <img src={firstpic} alt="a picture showing some pasta" />
        </div>
        <div className="pic2">
          <img
            src={secondpic}
            alt="a picture showing uncooked spaghetti in a basket"
          />
        </div>
        <div className="chef-story">
          <h2>Chef's Story</h2>
          <br />
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus ut eum deleniti, aut dignissimos cupiditate.
          </p>
          <br />
          <br />
          <Link to="/about">
            <button className="viewbtn">View Story →</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SubHero;
