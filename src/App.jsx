import { Routes, Route } from "react-router-dom";
import PenguinPage from "./PenguinPage";
import RoomsPage from "./RoomsPage";
import Homepage from "./Homepage";

function App() {

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

export { App };
