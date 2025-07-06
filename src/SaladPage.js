import salad from "./salad.jpeg";

const SaladPage = () => {
    return ( 
        <div className="Fresh">
        <div className="Salad">
          <img src={salad} alt="Salad" />
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
        </div>
     );
}
 
export default SaladPage;