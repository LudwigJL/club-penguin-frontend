import { Link } from "react-router-dom";
import "./style.css";

export default function Homepage() {
  return (
    <>
      <header>
        <div className="logo-image">
          <img
            src="https://cdn.prod.website-files.com/631c05c192aded085d20e9e8/632ad06579b9d3fb62347ccc_logo-p-500.png"
            alt=""
          />
        </div>
        <nav>
          <ul className="nav-links">
            <div className="link-container">
              <Link className="link" to={"/penguins"}>
                Explore the penguins!
              </Link>
            </div>

            <div className="link-container">
              <Link to={"/rooms"} className="link">
                See what is happening in some of our rooms!
              </Link>
            </div>

            <div className="link-img">
              <img src="https://cdn.prod.website-files.com/631c05c192aded085d20e9e8/63293ab4889a145e015cd7f4_playbutton.png" alt="" />
            </div>
          </ul>
        </nav>
      </header>

      <video
        id="video"
        src="https://media.cplegacy.com/assets/media/website/homepagescene_CPL.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        style={{
          display: "block",
          margin: "0 auto",
          minHeight: "100%",
          maxHeight: "100%",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <source
          src="https://media.cplegacy.com/assets/media/website/homepagescene_CPL.webm"
          type="video/webm"
        />
        Oops should have been a video here...
      </video>

      <div className="lower-body">
        <div className="content-container">
          <div className="content-post-container">
            <div className="image-container">
              <img
                src="https://cdn.prod.website-files.com/631c05c192aded085d20e9e8/63599bd000a766bb3d7c30f0_cp2.png"
                alt=""
              />
            </div>
            <h2>Explore</h2>
            <p>
              Want to start waddling around and create new friends? Make sure to
              create a Penguin and log in to start your adventure!
            </p>
            <Link to="/penguins">
              <button className="content-button">Explore the penguins!</button>
            </Link>
          </div>

          <div className="content-post-container">
            <div className="image-container">
              <img
                src="https://cdn.prod.website-files.com/631c05c192aded085d20e9e8/6359a46e39925d53e2db6105_cp3.png"
                alt=""
              />
            </div>
            <h2>Waddle away</h2>
            <p>
            Learn all about what our snowy island has to offer in this section designed specifically for parents and other Penguins.
            </p>
            <Link to="/penguins">
              <button className="content-button">Start your journeys!</button>
            </Link>
          </div>

          
          <div className="content-post-container">
            <div className="image-container">
              <img
                src="https://www.bleepstatic.com/content/hl-images/2024/06/05/club-penguin-hacker.jpg"
                alt=""
              />
            </div>
            <h2>This is the Villains</h2>
            <p>
              Quick guide of all villains you might encounter on your journeys.
            </p>
            <Link to="/penguins">
              <button className="content-button">Explore the villains!</button>
            </Link>
          </div>

          
          <div className="content-post-container">
            <div className="image-container">
              <img
                src="https://cdn.prod.website-files.com/631c05c192aded085d20e9e8/63599be81b4148449582b6d3_cp1.png"
                alt=""
              />
            </div>
            <h2>Help</h2>
            <p>
            Feeling lost, or need help with your Penguin? You can find answers to the most frequently asked questions here.
            </p>
            <Link to="/penguins">
              <button className="content-button">Help me!</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="web-end">
          
          </div>
    </>
  );
}

