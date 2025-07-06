import nugget from "./nuggets.jpeg";

const ChickenPage = () => {
    return ( 
         <div className="Non">
        <div className="Chic">
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
        </div>
     );
}
 
export default ChickenPage;