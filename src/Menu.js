import Burger from "./burger.jpeg";
import Cburger from "./Cburger.jpeg";
import fries from "./fries.jpeg";
import shake from "./shake.jpeg";
import nugget from "./nuggets.jpeg";
import salad from "./salad.jpeg";
import pie from "./pie.jpeg";
import coffee from "./coffee.jpeg";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="Menu_Div">
      <h1>Barista Dinner</h1>
      <h4>Delicious food, Fast delivery</h4>

      <div className="MButton">
        <button>All</button>
        <button onClick={() => navigate("/burgers")}>Burger</button>
        <button onClick={() => navigate("/chicken")}>Chicken</button>
        <button onClick={() => navigate("/side")} >Sides</button>
        <button onClick={()=> navigate("/salad")}>Salads</button>
        <button  onClick={()=> navigate("/drink")}>Drinks</button>
        <button onClick={()=> navigate("/dessert")}>Desserts</button>
      </div>

      <div className="Food2">
        <div className="MFood1">
          <img src={Burger} alt="Big Max deluxe" />
          <h2>Big Max deluxe</h2>
          <h5>aloo patties, lettuce, cheese, pickles, onions and sesame seed bun</h5>
          <h2 className="red">
            $8.99{" "}
            <span>
              <button className="add">Add to cart</button>
            </span>
          </h2>
        </div>

        <div className="MFood1">
          <img src={Cburger} alt="Crispy Chicken deluxe" />
          <h2>Crispy Chicken deluxe</h2>
          <h5>
            Crispy chicken patties with fresh lettuce and mayo with tomato and
            toasted bun
          </h5>
          <h2 className="red">
            $7.49{" "}
            <span>
              <button className="add">Add to cart</button>
            </span>
          </h2>
        </div>

        <div className="MFood1">
          <img src={fries} alt="Crispy Golden Fries" />
          <h2>Crispy Golden Fries</h2>
          <h5>
            Crispy golden french fries with seasoned salt, and choice of your
            dipping sauces
          </h5>
          <h2 className="red">
            $3.99{" "}
            <span>
              <button className="add">Add to cart</button>
            </span>
          </h2>
        </div>

        <div className="MFood1">
          <img src={shake} alt="Chocolate Milkshake" />
          <h2>Chocolate Milkshake</h2>
          <h5>Rich and creamy milkshake topped with whipped cream</h5>
          <h2 className="red">
            $4.49{" "}
            <span>
              <button className="add">Add to cart</button>
            </span>
          </h2>
        </div>
      </div>

      <div className="Food2">
        <div className="MFood2">
          <img src={nugget} alt="Chicken Nuggets" />
          <h2>Chicken McNuggets</h2>
          <h5>
            Tender and crispy Chicken nuggets with your choice of special sauces
          </h5>
          <h2 className="red">
            $6.99
            <span>
              <button className="add">Add to cart</button>
            </span>
          </h2>
        </div>

        <div className="MFood2">
          <img src={salad} alt="Caesar Salad" />
          <h2>Caesar Salad</h2>
          <h5>
            Fresh romaine lettuce with Caesar dressing, croutons and parmesan
            cheese
          </h5>
          <h2 className="red">
            $5.99
            <span>
              <button className="add">Add to cart</button>
            </span>
          </h2>
        </div>

        <div className="MFood2">
          <img src={pie} alt="Apple Pie" />
          <h2>Apple Pie</h2>
          <h5>Warm apple pie with flaky crust and cinnamon flavor</h5>
          <h2 className="red">
            $2.99
            <span>
              <button className="add">Add to cart</button>
            </span>
          </h2>
        </div>

        <div className="MFood2">
          <img src={coffee} alt="Iced Coffee" />
          <h2>Cold Iced Coffee</h2>
          <h5>Premium iced cold coffee with your choice of sugar and cream</h5>
          <h2 className="red">
            $2.49
            <span>
              <button className="add">Add to cart</button>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Menu;
