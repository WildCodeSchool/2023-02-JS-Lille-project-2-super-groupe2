import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
=======
      <Home />
>>>>>>> 8354eaa (first API working)
    </div>
  );
}

export default App;
