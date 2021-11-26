import React, { useState } from "react";
import "../css/BuyList.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

const Buylist = () => {
  const [addToCart, setAddToCart] = useState("");
  const itemToBuyList = useSelector((state) => state.toDoReducer);
  const dispatch = useDispatch();
  const params = useParams();
  const listId = params.id;

  const actualList = itemToBuyList.find((list) => list.id === listId);
  const indexOfList = itemToBuyList.indexOf(actualList);

  const handleClick = () => {
    if (addToCart.length >= 4) {
      dispatch({
        type: "ADD_ITEM",
        payload: addToCart,
        indexOfList,
      });
      setAddToCart("");
    } else {
      alert("Nombre del item muy corto!");
    }
  };

  const handleDoneItem = (id) => {
    dispatch({
      type: "DONE_ITEM",
      payload: id,
      listId,
    });
  };

  const handleRemoveItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
      listId,
    });
  };

  console.log(itemToBuyList);
  return (
    <div className="col-lg-12 d-flex justify-content-center">
      <div
        style={{
          marginTop: "10vh",
        }}
        className="itemsToBuy"
      >
        <div>
          <Link
            className="btn btn-outline-danger"
            style={{
              textDecoration: "none",
              float: "right",
            }}
            to="/"
          >
            Home
          </Link>

          <h2>{actualList && actualList.name}</h2>

          <div className="input-group mb-3">
            <input
              value={addToCart}
              onChange={(e) => {
                setAddToCart(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Agregar"
              aria-label="add item to  cart"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-transparent"
              type="button"
              id="button-addon2"
              onClick={handleClick}
            >
              <i className="fas fa-search-plus"></i>
            </button>
          </div>
        </div>

        <div className="itemsBox">
          <ul>
            {actualList && actualList.items.length > 0 ? (
              actualList.items.map((item) => {
                return (
                  !item.bought && (
                    <li key={item.id}>
                      <div className="form-check">
                        <input
                          onChange={() => handleDoneItem(item.id)}
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkItem"
                        />
                        <label className="form-check-label" htmlFor="checkItem">
                          {item.itemName}
                        </label>
                      </div>
                    </li>
                  )
                );
              })
            ) : (
              <li style={{ textAlign: "center" }}>Agrega un item!</li>
            )}

            {actualList &&
              actualList.items.length > 0 &&
              actualList.items.map((item) => {
                return (
                  item.bought && (
                    <li
                      style={{
                        color: "grey",
                        textDecoration: "line-through",
                      }}
                      key={item.itemName}
                    >
                      <i className="fas fa-check bought"></i> {item.itemName}
                      <i
                        onClick={() => handleRemoveItem(item.id)}
                        className="fas fa-minus-circle notBought "
                      ></i>
                    </li>
                  )
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Buylist;
