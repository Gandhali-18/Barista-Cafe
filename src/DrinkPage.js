import coffee from "./coffee.jpeg";
import shake from "./shake.jpeg";

const DrinkPage = () => {
    return ( 
         <div className="Drink">
            <div className="milk">
          <img src={shake} alt="Chocolate Milkshake" />
          <h2>Chocolate Milkshake</h2>
          <h5>Rich and creamy milkshake topped with whipped cream</h5>
          <h2 className="red">
            $4.49
            <span>
              <button className="add">Add to cart</button>
            </span>
          </h2>
        </div>
        <div className="milk">
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
     );
}
 
export default DrinkPage;