import pie from "./pie.jpeg";

const DessertPage = () => {
    return (
         <div className="Dessert">
          <div className="Pie">
          <img src={pie} alt="Pie" />
          <h2>Apple Pie</h2>
          <h5>Warm apple pie with flaky crust and cinnamon flavor</h5>
          <h2 className="red">
            $2.99
            <span>
              <button className="add">Add to cart</button>
            </span>
          </h2>
          </div>
        </div>
      );
}
 
export default DessertPage;