import "./AboutRest.css";
import Aboutimg from "../../assets/homepageimages/home3.jpg";
import { useState } from "react";

function AboutRest() {
  const [text, setText] = useState("");

  const viewLesstext = () => {
    setText("");
  };

  const moreText = () => {
    setText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quaerat odit voluptates amet ipsa doloremque quisquam, fuga iure recusandae accusantium quidem unde facilis ex obcaecati aliquam voluptatem sed, id placeat. explicabo aperiam excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit vero ipsam placeat facere, commodi enim reprehenderit omnis nulla eaque in incidunt libero eligendi perferendis. Laboriosam nesciunt fugit vero nostrum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae labore quam illum praesentium tempora voluptatibus sequi, quos impedit earum vero nulla, a at eum, nobis modi itaque rerum. Impedit, perferendis!  explicabo aperiam excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit vero ipsam placeat facere, commodi enim reprehenderit omnis nulla eaque in incidunt libero eligendi perferendis. Laboriosam nesciunt fugit vero nostrum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae labore quam illum praesentium tempora voluptatibus sequi, quos impedit earum vero nulla, a at eum, nobis modi itaque rerum. Impedit, perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus exercitationem amet sint fuga consequuntur aperiam voluptatem est eos debitis nemo! Quis aliquid blanditiis dolorum temporibus, cumque accusantium dignissimos quas non? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores impedit minus recusandae aperiam earum assumenda error ducimus maxime quidem! Iusto officia sunt quia animi recusandae! Nemo eveniet libero voluptatum ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ab, facere nam impedit, nostrum alias deleniti, quod itaque dignissimos velit illum porro. Ratione, placeat deleniti. Repellat nam fugit in aliquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis est voluptatum autem dolor doloribus neque saepe sint hic necessitatibus, tempore eligendi doloremque recusandae omnis unde. Omnis molestiae obcaecati iure labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem voluptate soluta officiis laborum, ratione aliquid sed fugit inventore beatae qui totam tempore quo iure blanditiis laboriosam. Et, facilis natus. ",
    );
  };
  return (
    <>
      <div className="aboutrest">
        <div className="aboutrestimg">
          <img
            src={Aboutimg}
            alt="a picture of a chef holding a bowl of pasta"
          />
        </div>
        <div className="aboutresttext">
          <div className="textrest">
            <h1>About the Restraunt</h1>
            <br />
            <br />
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
              explicabo aperiam excepturi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nostrum sit vero ipsam placeat
              facere, commodi enim reprehenderit omnis nulla eaque in incidunt
              libero eligendi perferendis. Laboriosam nesciunt fugit vero
              nostrum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae labore quam illum praesentium tempora voluptatibus
              sequi, quos impedit earum vero nulla, a at eum, nobis modi itaque
              rerum. Impedit, perferendis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Doloribus exercitationem amet sint
              fuga consequuntur aperiam voluptatem est eos debitis nemo! Quis
              aliquid blanditiis dolorum temporibus, cumque accusantium
              dignissimos quas non? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Asperiores impedit minus recusandae aperiam
              earum assumenda error ducimus maxime quidem! Iusto officia sunt
              quia animi recusandae! Nemo eveniet libero voluptatum ipsum? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Vitae ab,
              facere nam impedit, nostrum alias deleniti, quod itaque
              dignissimos velit illum porro. Ratione, placeat deleniti. Repellat
              nam fugit in aliquam. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Nobis est voluptatum autem dolor doloribus neque
              saepe sint hic necessitatibus, tempore eligendi doloremque
              recusandae omnis unde. Omnis molestiae obcaecati iure labore!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque exercitationem voluptate soluta officiis laborum,
              ratione aliquid sed fugit inventore beatae qui totam tempore quo
              iure blanditiis laboriosam. Et, facilis natus.
            </p>
            <br />
            <br />
            <br />
            <button onClick={moreText} onDoubleClick={viewLesstext}>
              View More
            </button>
          </div>
          <div className="othertext">{text}</div>
        </div>
      </div>
    </>
  );
}

export default AboutRest;
