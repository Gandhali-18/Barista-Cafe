import fries from "./fries.jpeg";

const SidePage = () => {
    return (
        <div className="gol-fries">
        <div className="side-fries">
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
        </div>
     );
}
 
export default SidePage;