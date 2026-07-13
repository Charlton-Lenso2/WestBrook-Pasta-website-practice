import "./Reservation.css";

function Reservation() {
  return (
    <>
      <div className="reservation">
        <div className="reservation-text">
          <h1>Reservation Form</h1>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
            facere consequatur officiis nisi modi libero dolore odit reiciendis
            assumenda optio voluptates ad quod deserunt fugit. Hic doloribus at
            deserunt eaque. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Tempore vero nulla hic eaque, ab libero aspernatur, eligendi
            tenetur sed distinctio, a maxime. Quaerat tempora, harum magnam
            nulla dolore ullam ea. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Similique natus ex sequi, aliquam saepe non eum
            ratione a! Officiis, doloremque autem dolorem voluptatum porro
            ducimus eligendi repellendus reiciendis magnam cupiditate! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
            porro rerum hic! Dolores consequuntur animi libero, perferendis
            delectus qui itaque non iste aspernatur, quo a nam, quidem repellat
            possimus labore!
          </p>
        </div>
        <div className="reservationform">
          <form>
            <h1>Form</h1>
            <br />
            <div className="firstrow">
              <input type="text" placeholder="Bob steve" id="name" required />
              <input type="email" placeholder="bobsteve@example.com" required />
            </div>
            <div className="secondrow">
              <input type="date" id="formdate" required />
              <input type="time" id="formtime" required />
            </div>
            <div className="restext">
              <textarea
                id="formtextarea"
                placeholder="I want some..."
                required
              ></textarea>
            </div>
            <br />
            <br />
            <div className="resbtn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reservation;
