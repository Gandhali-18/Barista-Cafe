import Burger from "./burger.jpeg";
import Cburger from "./Cburger.jpeg";

const burger = () => {
  return (
   
    <div className="burger">

      <div className="veg">
        <img src={Burger} alt="Burger" title="popular"></img>
        <h2>Big Max deluxe</h2>
        <h5>
          aloo patties, lettuce, cheese, pickles, onions and sesame seed bun
        </h5>
        <h2 className="red">
          $8.99
          <span>
            <button className="add">Add to cart</button>
          </span>
        </h2>
          
      </div>

      <div className="veg">
        <img src={Cburger} alt="Crispy Chicken deluxe" />
        <h2>Crispy Chicken deluxe</h2>
        <h5>
          Crispy chicken patties with fresh lettuce and mayo with tomato and
          toasted bun
        </h5>
        <h2 className="red">
          $7.49
          <span>
            <button className="add">Add to cart</button>
          </span>
        </h2>
      
      </div>
      
    </div> //main
  );
};

export default burger;
