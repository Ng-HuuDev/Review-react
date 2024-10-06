import React from "react";

export default function List(props) {
  console.log("🚀 ~ List ~ props:", props);
  let { dataShoe, handleRemoveFromList } = props;
  let renderList = () => {
    // img, name, btn add
    return dataShoe.map((shoe, index) => {
      return (
        <div key={index} className="col-3">
          <img className="w-100" src={shoe.image} alt="" />
          <button className="btn btn-success"> ADD</button>
          <button
            onClick={() => {
              handleRemoveFromList(shoe.id);
            }}
            className="btn btn-danger"
          >
            {" "}
            DELETE
          </button>
        </div>
      );
    });
  };
  return <div className="row col-5">{renderList()}</div>;
}
