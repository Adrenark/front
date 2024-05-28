import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Players from "./Players";
import NewPlayer from "./NewPlayer";
import Protocols from "./Protocols";
import About from "./About";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carousel from './Carousel';


function App() {
    const players = [
      {
        id: "1",
        name: "Adam",
        surname: "Burzynski",
        possition: "Prawy obrońca"
      },
      {
        id: "2",
        name: "Jan",
        surname: "Kowalski",
        possition: "Bramkarz"
      }
    ];

    return (
      <Router>
      <div className="body-bg">
        <Header />  
        <Carousel/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Players" element={<Players players={players} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Protocols" element={<Protocols />} />
          <Route path="/NewPlayer" element={<NewPlayer />} />
        </Routes>

      </div>
      </Router>
  );
}

export default App;
