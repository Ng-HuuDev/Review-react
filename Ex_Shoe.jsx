import React, { useState } from "react";
import { shoeArr } from "./dataShoe";
import List from "./List";
import Cart from "./Cart";
export default function Ex_Shoe() {
  console.log(shoeArr);
  const [listShoe, setListShoe] = useState(shoeArr);
  const [cart, setCart] = useState([]);
  // state o dau thi setState o do

  let handleRemoveFromList = (idShoe) => {
    console.log("🚀 ~ handleRemove ~ idShoe:", idShoe);
    let newListShoe = listShoe.filter((shoe) => {
      return shoe.id !== idShoe;
    });
    //setState => render lai layout
    setListShoe(newListShoe);
  };

  let handleAddToCart = (shoe) => {
    // let data = { ...shoe, total: 1 };
    // console.log("🚀 ~ handleAddToCart ~ shoe:", shoe);
    // let newCart = [...cart, data];
    // setCart(newCart);
    // findIndex de biet la da co trong gio hang chua
    let cloneCart = [...cart];
    let index = cloneCart.findIndex((item) => item.id == shoe.id);
    if (index == -1) {
      // khong tim thay
      // th1: chua co trong gio hang => them vao gio hang
      let data = { ...shoe, total: 1 };
      cloneCart.push(data);
    } else {
      cloneCart[index].total++;
    }
    // th2: da co trong gio hang => tang so luong
    setCart(cloneCart);
  };

  let handleRemoveFromCart = (idShoe) => {
    let newCart = cart.filter((shoe) => shoe.id != idShoe);
    setCart(newCart);
  };

  let handleChangeTotal = (idShoe, option) => {
    // option: +1 hoac -1 / tang giam so luong
    let cloneCart = [...cart];
    // tim vi tri cua san pham can tang so luong
    let index = cloneCart.findIndex((item) => item.id == idShoe);
    // cap nhat lai value cua object vua tim thay
    cloneCart[index].total = cloneCart[index].total + option;
    // kiem tra neu so luong = 0 thi xoa khoi gio hang
    // if (cloneCart[index].total == 0) {
    //   cloneCart.splice(index, 1);
    // }
    // setState => render lai giao dien
    setCart(cloneCart);
  };
  return (
    <div className="row align-items-start">
      <List
        dataShoe={listShoe}
        handleRemoveFromList={handleRemoveFromList}
        handleAddToCart={handleAddToCart}
      />
      <Cart
        dataCart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleChangeTotal={handleChangeTotal}
      />
    </div>
  );
}
