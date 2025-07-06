import Latte from "./latte.jpg";
import Sandwich from "./sandwich.jpg";
import Burger from "./burger.jpeg";
import Pasta from "./pasta.jpg";
import Cro from "./cro.jpg";
import Pizza from "./pizza.jpeg";
import moh from "./moh.jpg";
import cake from "./cake (2).jpg";
import cook from "./cook.jpg";
import beans from "./b5f6a54c-ce6f-4e38-a10e-f007f4636e73-removebg-preview.png";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
  const Love = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-heart-fill"
      // viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
      />
    </svg>
  );
  return (
    <div className="home">
      <h1>Welcome to Barista Cafe</h1>
      
        <div>
          <img src={beans} alt="Coffee Bean" class="falling-bean" />
        </div>
  
      <p>
        Where every cup tells a story and every moment feels like home.
        <br />
        Experience the perfect blend of nostalgia and modern comfort.
      </p>

      <div className="buttons">
        <button className="button1">View Menu</button>
        <button className="button2">Visit Us</button>
      </div>

      <div className="content">
        <h1>Our Special Blends</h1>
      </div>

      <div className="boxx">
        <img src={Latte} className="img1" alt="Latte" />
        <img src={Sandwich} className="img2" alt="Sandwich" />
        <img src={Burger} className="img3" alt="Burger" />
        <img src={Pasta} className="img4" alt="Pasta" />
      </div>
      <div className="box">
        <img src={Cro} className="img5" alt="Croissant" />
        <img src={Pizza} className="img6" alt="Pizza" />
        <img src={moh} className="img7" alt="Mocha" />
        <img src={cake} className="img8" alt="Cake" />
      </div>
      <div className="H1">
        <h1>Our Story</h1>
      </div>
      <div className="story">
        <div>
          <p>
            🌿 Our Story — The Soul Behind Barista Café
            <br />
            Welcome to Barista Café, where every cup tells a story. Barista Café
            began with a simple dream — to create more than just a place to grab
            coffee, but a cozy corner where time slows down, conversations flow,
            and memories are brewed. Founded in 2018 by two friends, Arya and
            Rohan, Barista Café was born out of their shared love for
            handcrafted coffee and soulful spaces. Inspired by European street
            cafés, it’s a conversation starter, and sometimes, a quiet companion
            on busy days. Every item on our menu is made with care, from
            farm-sourced beans to our warm, flaky pastries made fresh each
            morning. So whether you're here for your daily espresso, a first
            date, a brainstorming session, or just a little "me-time"—Barista
            Café is your space.
          </p>
        </div>
        <div>
          <img className="img9" src={cook} alt="Chef preparing food" />
        </div>
      </div>

      <div className="Visit">
        <h3>Visit Us Today</h3>
      </div>

      <div className="near">
        <div className="c1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
          <h4>Location</h4>
          <p>
            123 Coffee Street <br />
            Downtown District
            <br />
            City, State 12345
          </p>
        </div>

        <div className="c2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-clock"
            viewBox="0 0 16 16"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
          </svg>
          <h4>Hours</h4>
          <p>
            Mon-Fri: 8.00 AM - 10.00 PM
            <br />
            Sat-Sun: 6.00 AM - 11.00 PM
          </p>
        </div>

        <div className="c3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-bank"
            viewBox="0 0 18 18"
          >
            <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z" />
          </svg>
          <h4>Career</h4>
          <p>For more info click below</p>
          <button className="job" onClick={ ()=> navigate("/form")}>Job Enroll</button>
        </div>
      </div>
      <div className="footer">
        <h3 className="H3">Barista Cafe</h3>
        <h5 className="Us1">
          Menu
          <h6>
            <a href="#">What's New</a>
          </h6>
          <h6>
            <a href="#">Drinks</a>
          </h6>
          <h6>
            <a href="#">Food</a>
          </h6>
        </h5>
        <h5 className="Us2">
          Get to know us
          <h6>
            <a href="#">Contact us</a>
          </h6>
          <h6>
            <a href="#">privacy policy</a>
          </h6>
          <h6>
            <a href="#">terms and condition</a>
          </h6>
        </h5>
        <h5 className="Us3">
          Connect to us
          <h6>
            <a href="#">Facebook</a>
          </h6>
          <h6>
            <a href="#">Instagram</a>
          </h6>
          <h6>
            <a href="#">Linkedin</a>
          </h6>
        </h5>
      </div>
      <h6 className="last">
        Copyright © 2023 baristacafe. All Rights Reserved.
      </h6>
    </div>
  );
};

export default Home;
