import React, { useContext } from "react";
import { CreateContextData } from "../context/ContextData";

const Cart = () => {
  const { cart, increaseItems, decreaseItems, removeitem } = useContext(CreateContextData);
  // حساب السعر الإجمالي
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div className="container">
      <h1 className="text-center my-4">🛒 Shopping Cart</h1>
      {cart.length === 0 ? (
        <h3 className="text-center">Your cart is empty 🛍</h3>
      ) : (
        <div>
          {cart.map((item) =>(
            <div key={item.id} className="d-flex align-items-center border p-3 mb-3">
              <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px", borderRadius: "8px" }} />
              <div className="ms-3">
                <h5>{item.name}</h5>
                <p>Quantity: {item.quantity}</p>
                <p>price: {item.price}</p>
                <button className="btn btn-success me-2" onClick={() => increaseItems(item.id)}>+</button>
                <button className="btn btn-warning me-2" onClick={() => decreaseItems(item.id)}>-</button>
                <button className="btn btn-danger" onClick={() => removeitem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2 className="text-end fw-bold text-primary" >Total: {totalPrice} جنيه</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
