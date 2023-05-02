import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice';
const Cart = () => {
  const products = useSelector((state) => (state.cart));
  const dispatch=useDispatch();
  const handleRev = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((items) => (
          <div key={items.id} className="cartCard">
            <img src={items.image} alt="img" />
            <h5>{items.title}</h5>
            <h5>{items.price}</h5>
            <button
              onClick={() => {
                handleRev(items.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart
