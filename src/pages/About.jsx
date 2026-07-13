import "./About.css";
import Aboutimg1 from "../assets/aboutpageimages/about1.jpg";
import Aboutimg2 from "../assets/homepageimages/homepagehero.jpg";
import team1 from "../assets/teamimages/team1.jpeg"
import team2 from "../assets/teamimages/team2.jpeg";
import team3 from "../assets/teamimages/team3.jpeg";
import { Link } from "react-router-dom";


function About() {
  return (
    <>
      <div className="about">
        <h1 className="abouth1">About Us</h1>
        <br />
        <p className="aboutp">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          accusamus maiores quis libero nam..
        </p>
        <br />
        <div className="firstabout">
          <div className="firstimage">
            <img src={Aboutimg2} alt="a picture of pasta" />
          </div>
          <div className="firsttext">
            <h1>Lorem Ipsum</h1>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              facilis sit beatae. Corrupti repellat est fugiat, saepe culpa
              mollitia ullam omnis obcaecati iure at? Laborum, eligendi eveniet?
              Inventore, id consequatur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nisi iste aperiam asperiores officia similique
              aspernatur tempora corrupti dolorem, incidunt dolorum a aliquid
              praesentium nam sed repellendus ratione sequi, nihil sapiente?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              at, tempora eligendi animi, atque a explicabo soluta harum nihil
              unde iste officia cum hic perspiciatis laboriosam minus dolore
              ducimus consequuntur! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tenetur vitae optio placeat ea nesciunt et
              aliquam magnam quasi eius fugiat tempora accusantium odio
              expedita, debitis modi! Eos veritatis cupiditate quaerat! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia
              odit molestiae a minima alias cum quas? Consequatur, nam provident
              quae ratione nisi fuga, dolorum nemo molestiae, modi quidem quos!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              quod officia quia placeat libero nulla earum, sed odit saepe
              eligendi veritatis enim sunt maiores optio. Consectetur
              necessitatibus explicabo nemo? Perferendis?
            </p>
            <Link to="/contact">
              <button className="cnctbtn">Contact →</button>
            </Link>
          </div>
        </div>
        <div className="secondabout">
          <div className="secondtext">
            <h1>Lorem Ipsum</h1>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              architecto esse quis iste enim quae est ipsam quos vel totam
              numquam ut itaque tempora repellat explicabo voluptates, minima
              vero consequatur. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Fuga, nemo deleniti omnis, laboriosam quia quas
              alias quis at exercitationem accusamus tempora? Eius, nihil. Quo
              quidem temporibus in assumenda. Pariatur, soluta?
            </p>
            <div className="team">
              <h1 className="teamh1">Team</h1>
              <div className="profile">
                <img src={team1} alt="team picture" />
              </div>
              <div className="profile">
                <img src={team2} alt="team picture" />
              </div>
              <div className="profile">
                <img src={team3} alt="team picture" />
              </div>
            </div>
          </div>
          <div className="secondimage">
            <img src={Aboutimg1} alt="a picture of pasta" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
