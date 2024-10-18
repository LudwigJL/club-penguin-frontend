import { useEffect, useState } from "react";
import "./App.css";

function App() {
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

  return <></>;
}

export default App;

