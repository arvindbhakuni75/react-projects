import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product() {

  const dipatch = useDispatch();

  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = (item) => {
    //dispatch an add action 
    dipatch(add(item))
  }

  return (
    <div className="card-wapper">
      { 
        products?.map((item, i) => (
          
          <Card key={i} style={{ width: "18rem" }} className="cart" >
            <Card.Img className="cart-img" variant="top" src={item.image}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>INR: {item.price}
              </Card.Text>
              <Button onClick={() => addToCart(item)} className="cart-btn" variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
          
        ))
      }
    </div>
  );
}

export default Product;
