import React, { useState, useContext } from "react";

import Button from "../../UI/Button";

import MenuContext from "../../Store/menu-context";

const CartItem = (props) => {

  const [number, setNumber] = useState(props.number);

  const ctx = useContext(MenuContext);

  const subtotals = ctx.yourCart.map((item) => item.price * item.number);

  const reducer = (a, b) => a + b;
  const totals = subtotals.reduce(reducer);

  function incrementItem() {
    ctx.yourCart.forEach((item) => {
      if (item.name === props.name) {
        props.setItemNumber(props.name, (item.number = item.number + 1));
        setNumber(number + 1);
        ctx.setCartNumber(ctx.cartNumber + 1);
        ctx.setTotalPrice(totals + item.price);
      }
    });
  }

  function decrementItem() {
    if (number > 0) {
      ctx.yourCart.forEach((item) => {
        if (item.name === props.name) {
          props.setItemNumber(props.name, (item.number = item.number - 1));
          setNumber(number - 1);
          ctx.setCartNumber(ctx.cartNumber - 1);
          ctx.setTotalPrice(totals - item.price);
        }
      });
    }
  }

  return (
    <li>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <p>{number}</p>
      <Button buttonLabel="+" buttonFunction={incrementItem} />
      <Button buttonLabel="-" buttonFunction={decrementItem} />
    </li>
  );
};

export default CartItem;
