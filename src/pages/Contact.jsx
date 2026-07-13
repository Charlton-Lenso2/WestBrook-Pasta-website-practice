import "./Contact.css";
import contactimg from "../assets/contactpageimages/contact1.jpg";

function Contact() {
  return (
    <>
      <div className="contact">
        <h1 className="conh1">Contact Us</h1>
        <br />
        <p className="conp">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          error dolor amet modi corporis fuga optio nobis.
        </p>
        <br />
        <div className="conitems">
          <div className="conimg">
            <img src={contactimg} alt="" />
          </div>
          <div className="conform">
            <form>
              <div className="conrow">
                <input type="text" placeholder="Bob steve" id="name" required />
                <input
                  type="email"
                  placeholder="bobsteve@example.com"
                  required
                />
              </div>
              <div className="context">
                <textarea
                  id="formtextarea"
                  placeholder="Hello, I..."
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
      </div>
    </>
  );
}

export default Contact;
