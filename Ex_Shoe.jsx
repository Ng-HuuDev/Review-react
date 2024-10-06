import React, { useState } from "react";
import { shoeArr } from "./dataShoe";
import List from "./List";
export default function Ex_Shoe() {
  console.log(shoeArr);
  const [listShoe, setListShoe] = useState(shoeArr);
  // state o dau thi setState o do

  let handleRemoveFromList = (idShoe) => {
    console.log("🚀 ~ handleRemove ~ idShoe:", idShoe);
    let newListShoe = listShoe.filter((shoe) => {
      return shoe.id !== idShoe;
    });
    //setState => render lai layout
    setListShoe(newListShoe);
  };
  return (
    <div className="row">
      <List dataShoe={listShoe} handleRemoveFromList={handleRemoveFromList} />
    </div>
  );
}
