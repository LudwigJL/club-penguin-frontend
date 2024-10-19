import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function PenguinPage() {
  const baseUrl = "http://localhost:5000/";
  const [penguins, setPenguins] = useState([]);

  const fetchAllPenguins = async () => {
    const response = await fetch(baseUrl + "penguins");

    const data = await response.json();
    setPenguins(data);
  };

  useEffect(() => {
    fetchAllPenguins();
  }, []);

  console.log(penguins);

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

      <div className="page-body">
        <div className="title-container">
          <h1>Meet the penguins roaming our world</h1>
        </div>

        <div className="profile-feed">
          {penguins.map((penguin, index) => (
            <li key={index} className="profile-li">
              <div className="profile-container">
                <div className="profile-img">

                {console.log(penguin.pictureUrl)}
                <img src={penguin.pictureUrl} alt="penguin" />
                </div>

                <div className="profile-info">
                  {penguin ? <p>{"Name: " + penguin.username}</p> : <p>?</p>}
                  {penguin ? (
                    <p>{"First appearence: " + penguin.firstAppearance}</p>
                  ) : (
                    <p>?</p>
                  )}
                  {penguin ? (
                    <p>
                      {"Most Recent Giveaway: " + penguin.mostRecentGiveaway}
                    </p>
                  ) : (
                    <p>?</p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
