import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Heros from "./components/Heros.jsx";
import Hero2 from "./components/Hero2.jsx";
import Stars from "./components/Stars.jsx";
import Book from "./components/Book.jsx";


function App() {
  const [active, setActive] = useState(() => localStorage.getItem('active') || 'Home')

  useEffect(() => {
    localStorage.setItem('active', active)
  }, [active])

  useEffect(() => {
    if (active === 'Meet') window.scrollTo(0, 0)
  }, [active])

  return (
    <div className="bg-black h-[170vh]">
      <Navbar active={active} setActive={setActive} />
      {active === 'Meet' ? <Stars /> : active === 'Book' ? <Book /> : <><Heros setActive={setActive} /><Hero2 setActive={setActive} /></>}

    </div>
  );
}

export default App;
