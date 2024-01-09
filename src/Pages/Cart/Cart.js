// Cart.js

import React from 'react';
// import Delete from '@material-ui/icons/Delete';
import { useCart, useDispatchCart } from '../../ContextReducer';
import './Cart.css'; // Import the CSS file for styling

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    );
  }

  let totalPrice = data.reduce((total, info) => total + info.price, 0);

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");

    let response = await fetch("http://localhost:5000/api/auth/guideInfo", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });

    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  return (
    <div className='table-container'>
      <table className='table table-hover'>
        <thead className='text-success fs-4'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Quantity</th>
            <th scope='col'>Option</th>
            <th scope='col'>Amount</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((info, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{info.name}</td>
              <td>{info.qty}</td>
              <td>{info.size}</td>
              <td>{info.price}</td>
              <td>
                <button type="button" className="btn p-0" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>
                  {/* <Delete /> */}Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='total-price'>
        <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
      </div>

      <div>
        <button className='btn bg-success mt-5 checkout-btn' onClick={handleCheckOut}>
          Check Out
        </button>
      </div>
    </div>
  );
}
