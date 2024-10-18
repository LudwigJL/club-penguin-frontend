import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PenguinPage from "./PenguinPage";
import RoomsPage from "./RoomsPage";
import Homepage from "./Homepage";

function App() {
  const baseUrl = "http://localhost:5000/";

  const [penguins, setPenguins] = useState([]);
  const [rooms, setRooms] = useState([]);

  const fetchAllPenguins = async () => {
    const response = await fetch(baseUrl + "penguins");

    const data = await response.json();
    setPenguins(data);
  };

  const fetchRooms = async () => {
    const response = await fetch(baseUrl + "rooms");

    const data = await response.json();
    setRooms(data);
  };

  useEffect(() => {
    fetchAllPenguins();
    fetchRooms();
  }, []);

  console.log(penguins);
  console.log(rooms);

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/penguins" element={<PenguinPage />}></Route>
      <Route path="/rooms" element={<RoomsPage />}></Route>
    </Routes>
      
    </>
  );
}

export { App  };
