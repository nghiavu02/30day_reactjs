import React from "react";
import { useGallery } from "../../context/gallery-context";
import PropTypes from "prop-types";
const CartList = ({ open = false, handleClose = () => {} }) => {
  const { cart, handleDelete } = useGallery();

  return (
    <div
      className={`modal fixed inset-0 z-[999] flex justify-end items-center ${open ? "" : "opacity-0 invisible"}`}
    >
      <div
        className="overlay absolute inset-0 bg-black bg-opacity-20"
        onClick={handleClose}
      ></div>
      <div className="content relative z-10 bg-white p-10 max-w-[500px] h-full w-full">
        <button
          className="px-10 py-3 rounded-lg bg-red-700 absolute top-0 right-0"
          onClick={handleClose}
        >
          X
        </button>
        <table border={0} className="w-full" cellSpacing={10}>
          <tr className="">
            <th>ID</th>
            <th>Image</th>
            <th>Sự kiện</th>
          </tr>
          {cart.length > 0 &&
            cart.map((item) => (
              <tr key={item.id} className="text-center mb-5">
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.url}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td>
                  <button
                    className="py-2 px-5 bg-purple-600 rounded-lg hover:opacity-80"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};
CartList.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
};
export default CartList;
