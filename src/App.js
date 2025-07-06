import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Menu from "./Menu";
import "./design.css";
import "./Menu_Design.css";
import "./burger_design.css";
import BurgerPage from "./BurgerPage";
import ChickenPage from "./ChickenPage";
import SidePage from "./SidePage";
import SaladPage from "./SaladPage";
import DrinkPage from "./DrinkPage";
import DessertPage from "./DessertPage";
import Form from "./Form";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="main">
          <div className="title">
            <h1>Barista Cafe</h1>
          </div>

          <div className="cafe">
            <Link to="/" className="A">
              Home
            </Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/About">About Us</Link>
            <Link to="/Contact">Contact Us</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/burgers" element={<BurgerPage />} />
        <Route path="/chicken" element={<ChickenPage />} />
        <Route path="/side" element={<SidePage />} />
        <Route path="/salad" element={<SaladPage />} />
        <Route path="/drink" element={<DrinkPage />} />
        <Route path="/dessert" element={<DessertPage />} />
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
