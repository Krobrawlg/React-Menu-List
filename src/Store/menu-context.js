import React, { useState } from "react";

const MenuContext = React.createContext({
  yourCart: [{ name: "", price: "", number: "" }],
  numOfItems: 0,
  itemCount: 0,
  subtractItem: () => {},
  addItem: () => {},
  modifyNumber: () => {},
});

export const MenuContextProvider = (props) => {
  const [itemCount, setItemCount] = useState(0);
  const [yourCart, setYourCart] = useState([]);
  //item in cart = {name: , price: , amount: }

  const [nameArray, setNameArray] = useState([
    // yourCart.forEach((item) => {
    //   nameArray.push(item.name);
    // }),
  ]);

  const [cartNumber, setCartNumber] = useState(0);



  function addItem(item) {
    if (!nameArray.includes(item.name)) {
      setYourCart(() => [...yourCart, item]);
      setNameArray(() => [...nameArray, item.name]);
      setItemCount(itemCount + 1);
      setCartNumber(cartNumber + item.number);
      console.log(item);
    } else {
      yourCart.forEach((cartItem) => {
        if (cartItem.name === item.name) {
          cartItem.number = cartItem.number + item.number;
          setCartNumber(cartNumber + item.number);
        }
      });
    }

    // console.log(yourCart)
  }

  const [totalPrice, setTotalPrice] = useState(0);

  function subtractItem() {
    setItemCount(itemCount - 1);
    setCartNumber(cartNumber - 1);
  }

  function modifyNumber(name, number) {
    yourCart.forEach((item) => {
      if (item.name === name) {
        item.number = number;
      }
    });
  }

  //   useEffect(() => {

  //     const timer = setTimeout(() => {
  //         console.log(yourCart)
  //     },3000)
  //     return () => {
  //           clearTimeout(timer);
  //       };
  //   }, [yourCart])

  return (
    <MenuContext.Provider
      value={{
        itemCount: itemCount,
        subtractItem: subtractItem,
        addItem: addItem,
        yourCart: yourCart,
        cartNumber: cartNumber,
        setCartNumber: setCartNumber,
        modifyNumber: modifyNumber,
        totalPrice: totalPrice,
        setTotalPrice: setTotalPrice
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
