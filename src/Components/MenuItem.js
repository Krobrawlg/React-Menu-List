import React, { useState, useContext } from "react";

import Button from "../UI/Button";
import MenuContext from "../Store/menu-context";

import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  const [number, setNumber] = useState(0);
  // const fullPrice = props.price * amount;

  const item = {
    name: props.name,
    price: props.price,
    number: parseInt(number),
    key: Math.random(),
    subtotal: props.price * parseInt(number),
  };

  const ctx = useContext(MenuContext);

  function numberChangeHandler(event) {
    setNumber(event.target.value);
  }

  // const timer = setTimeout(() => {
  //   console.log(ctx.yourCart);
  // }, 3000);

  function addToCart() {
    // for (let cartItem of ctx.yourCart) {
    //   console.log(cartItem.name === item.name);
    //   if (cartItem.name === item.name) {
    //     cartItem.number = cartItem + item.number;
    //     break;
    //   }
    // }

    if (number > 0) {
      ctx.addItem(item);
      console.log("item added");
      ctx.setTotalPrice(ctx.totalPrice + item.price * item.number);
      // clearTimeout(timer);
    } else {
      console.log("There was an error");
    }
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log(ctx.yourCart);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [ctx.yourCart]);

  return (
    <>
    <li className={classes.itemwrapper}>
      <div className={classes.description}>
        <p>{props.name}</p>
        <p className={classes.price}>${props.price}</p>
      </div>

      <div className={classes.amount}>
        <label> Amount</label>
        <input onChange={numberChangeHandler} type="number"></input>
        <Button buttonFunction={addToCart} buttonLabel="+ Add" />
      </div>
    </li>
    <hr className={classes.hr}></hr>
    </>
  );
};

export default MenuItem;
