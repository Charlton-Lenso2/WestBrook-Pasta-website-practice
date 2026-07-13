import "./Food.css";
import first from "../assets/foodpageimages/food1.jpg";
import second from "../assets/foodpageimages/food2.jpg";
import third from "../assets/foodpageimages/food3.jpg";
import fourth from "../assets/foodpageimages/food4.jpg";
import fifth from "../assets/foodpageimages/food5.jpg";
import sixth from "../assets/foodpageimages/food6.jpg";
import seventh from "../assets/foodpageimages/food7.jpg";
import eight from "../assets/foodpageimages/food8.jpg";

function Food() {
  return (
    <>
      <div className="food">
        <h1>The Food We Serve</h1>
        <br />
        <p className="supporttext">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia odio
          pariatur, ad ea doloribus autem officiis quod.
        </p>
        <div className="foodcontainer">
          <div className="firstfood">
            <div className="food1">
              <a href={first} target="_blank" rel="noopener noreferrer">
                <img src={first} alt="pasta picture" />
              </a>

              <p>lorem ipsum</p>
              <h5>$0.00</h5>
            </div>
            <div className="food1">
              <a href={second} target="_blank" rel="noopener noreferrer">
                <img src={second} alt="pasta picture" />
              </a>

              <p>lorem ipsum</p>
              <h5>$0.00</h5>
            </div>
            <div className="food1">
              <a href={third} target="_blank" rel="noopener noreferrer">
                <img src={third} alt="pasta picture" />
              </a>

              <p>lorem ipsum</p>
              <h5>$0.00</h5>
            </div>
            <div className="food1">
              <a href={fourth} target="_blank" rel="noopener noreferrer">
                <img src={fourth} alt="pasta picture" />
              </a>

              <p>lorem ipsum</p>
              <h5>$0.00</h5>
            </div>
          </div>

          <div className="secondfood">
            <div className="food1">
              <a href={fifth} target="_blank" rel="noopener noreferrer">
                <img src={fifth} alt="pasta picture" />
              </a>

              <p>lorem ipsum</p>
              <h5>$0.00</h5>
            </div>
            <div className="food1">
              <a href={sixth} target="_blank" rel="noopener noreferrer">
                <img src={sixth} alt="pasta picture" />
              </a>

              <p>lorem ipsum</p>
              <h5>$0.00</h5>
            </div>
            <div className="food1">
              <a href={seventh} target="_blank" rel="noopener noreferrer">
                <img src={seventh} alt="pasta picture" />
              </a>

              <p>lorem ipsum</p>
              <h5>$0.00</h5>
            </div>
            <div className="food1">
              <a href={eight} target="_blank" rel="noopener noreferrer">
                <img src={eight} alt="pasta picture" />
              </a>

              <p>lorem ipsum</p>
              <h5>$0.00</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Food;
