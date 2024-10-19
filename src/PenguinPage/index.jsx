import { useEffect, useState } from "react";
import "./style.css";
import Header from "../Header";

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
      <Header />

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
