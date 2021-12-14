import CartItemList from "../CartItemList";

import classes from "./CartModal.module.css";

const CartModal = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <header>Your Shopping Cart</header>
        <CartItemList closeModal={props.closeModal} />
      </div>
    </div>
  );
};

export default CartModal;
