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

            <div className="content-feed">
                <div className="content-post">


                </div>


            </div>
    
        </div>

      </div>
    </>
  );
}
