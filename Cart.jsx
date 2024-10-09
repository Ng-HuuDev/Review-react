import { Button, Popconfirm } from "antd";
import React from "react";

export default function Cart({
  dataCart,
  handleRemoveFromCart,
  handleChangeTotal,
}) {
  let renderTbody = () => {
    return dataCart.map((item) => {
      return (
        <tr key={item.id}>
          <td> {item.name} </td>
          <td>
            <img className="w-25" src={item.image} alt="" />
          </td>
          <td> {item.price} </td>
          <td>
            {
              // neu total la 1 thi render button xoa
              item.total == 1 ? (
                <Popconfirm
                  title="Xóa sản phẩm ra khỏi giỏ hàng"
                  description={item.name}
                  onConfirm={() => {
                    handleRemoveFromCart(item.id);
                  }}
                  onCancel={() => {}}
                  okText="Yes"
                  showCancel={false}
                >
                  <Button type="primary">-</Button>
                </Popconfirm>
              ) : (
                <button
                  onClick={() => {
                    handleChangeTotal(item.id, -1);
                  }}
                  className="btn btn-danger"
                >
                  -
                </button>
              )
            }

            <span className="mx-3"> {item.total} </span>
            <button
              onClick={() => {
                handleChangeTotal(item.id, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                handleRemoveFromCart(item.id);
              }}
              className="btn btn-danger"
            >
              {" "}
              DELETE{" "}
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className="col-7">
      <table className="table">
        <thead>
          <tr>
            <th> Name</th>
            <th> Image</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTbody()} </tbody>
      </table>
    </div>
  );
}
