import React from "react";
import Congratulation from "./Components/Congratulation";
import Home from "./Components/Home";
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const navigateToContrats = () => {
    navigate('/contacts');
  };

  const navigateHome = () => {
    navigate('/');
  };
  return (
    <div className="App">

        <Routes>
          <Route path="/Congratulation" element={<Congratulation />} />
          <Route path="/" element={<Home />} />
        </Routes>

    </div>
  );
}

export default App;
