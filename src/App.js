import { useState, useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Event from "./components/Event.jsx";
import Burger from "./components/Burger.jsx";
import "./styles/App.scss";

function App() {
  const [nav, setNav] = useState(false);

  const closeNav = () => {
    window.innerWidth > 1200 ? setNav(false) : null;
  };

  useEffect(() => {
    window.addEventListener("resize", closeNav);

    return () => {
      window.removeEventListener("resize", closeNav);
    };
  }, []);

  return (
    <div className="App">
      <Nav nav={nav} setNav={setNav} />
      <Event nav={nav} setNav={setNav} />
      <Burger nav={nav} setNav={setNav} />
    </div>
  );
}

export default App;
