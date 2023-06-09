import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const selectedProducts = useSelector((state) => state.cart);

  const dispatch = useDispatch()

  const removeItem = (id) => {
    // dispatch a remove action
    dispatch(remove(id))
  }
  
  console.log(selectedProducts)

  const navigate = useNavigate();
 
  if(selectedProducts.length === 0) {
    navigate("/")
  }

  return (
    <div className="storeCard-wapper">
      {selectedProducts.map((item, i) => (
        <div key={i} className="card mt-5" style={{maxWidth: '640px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">INR: {item.price}</p>
              <button onClick={()=>removeItem(item.id)} className="btn btn-danger store-btn">Remove Item</button>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Cart;
