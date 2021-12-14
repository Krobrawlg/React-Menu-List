import React, { useState, useContext } from "react";

import Button from "../UI/Button";
import CartModal from "./Cart/CartModal/CartModal";

import MenuContext from "../Store/menu-context";

import classes from './Cart.module.css';
// let itemNumber = 0

const Cart = () => {
  //   const [itemCount, setItemCount] = useState(itemNumber);

  //   function increaseItem(){
  //       setItemCount(itemNumber++)
  //   }

  const [cartModalOpen, setCartModalOpen] = useState(false);
  function openModal() {
    setCartModalOpen(true);
  }
  function closeModal(){
    setCartModalOpen(false);
  }

  const ctx = useContext(MenuContext);

  return (
    <>
      {cartModalOpen && <CartModal closeModal={closeModal}/>}
      <div className={classes.cartWrapper}>
        <Button className={classes.cartbutton} buttonFunction={openModal} buttonLabel={"Your Cart"} />
        <p>{ctx.cartNumber}</p>
      </div>
    </>
  );
};

export default Cart;
