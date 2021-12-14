import React, { useContext } from "react";

import MenuContext from "../../Store/menu-context";

import CartItem from "./CartItem";

import Button from "../../UI/Button";

// function cartReducer(state, action) {
//   if (action.name === "Humble Pie") {
//   } else if (action.name === "Grumblecakes") {
//   } else if (action.name === "Tumblepuppies, Hush") {
//   }
// }

const CartItemList = (props) => {
  const ctx = useContext(MenuContext);

  //item in cart = {name: , price: , amount: }
  //   const [totalPrice, setTotalPrice] = useState(0);

  // function displayName(){
  //     console.log(props.)
  // }


  function setNumber(itemName, number) {
    ctx.yourCart.forEach((item) => {
      if (item.name === itemName) {
        item.number = number;
      }
    });
  }

  // useEffect(() => 
  //   setTotalPrice(totals)
  // , [totals, setNumber()] );

  // useEffect(() => {
  //   return () => {
  //     setSubtotalList(subtotalList);
  //   }
  // }, [subtotalList] )


  let cartDisplay = <p>No items in cart</p>;

  if (ctx.yourCart.length > 0) {
    cartDisplay = ctx.yourCart.map((item) => (
      <CartItem
        name={item.name}
        price={item.price}
        number={item.number}
        key={item.key}
        setItemNumber={setNumber}
      />
    ));
  }

  return (
    <>
      {cartDisplay}
      <footer>
        <p>Total Amount</p>
        <p>{ctx.totalPrice.toFixed(2)}</p>
        <Button buttonLabel={"Close"} buttonFunction={props.closeModal} />
        <Button buttonLabel={"Order"} />
      </footer>
    </>
  );
};

export default CartItemList;
