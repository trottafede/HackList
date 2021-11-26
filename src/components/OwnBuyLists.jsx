import "../css/OwnBuyLists.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Ownbuylists = () => {
  const [listName, setListName] = React.useState("");
  const listOfLists = useSelector((state) => state.toDoReducer);
  const dispatch = useDispatch();

  const handleAddList = (name) => {
    dispatch({
      type: "ADD_LIST",
      payload: name,
    });

    setListName("");
  };

  console.log(listOfLists);

  return (
    <div className="listOfLists">
      <div>
        <h2>Mis listas de compra</h2>

        <ol className="list-group list-group-numbered">
          {listOfLists.length > 0 ? (
            listOfLists.map((list) => {
              return (
                <Link
                  key={list.id}
                  style={{
                    textDecoration: "none",
                  }}
                  to={`/list/${list.id}`}
                >
                  <li
                    key={list.id}
                    className="list-group-item d-flex justify-content-between align-items-start listItem"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{list.name}</div>
                      {list.createdAt}
                    </div>
                    <span className="badge bg-primary rounded-pill">
                      1/
                      {list.items.length}
                    </span>
                  </li>
                </Link>
              );
            })
          ) : (
            <li>Ingrese un item</li>
          )}
        </ol>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Agregar item
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Agregar Lista
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    value={listName}
                    onChange={(e) => {
                      setListName(e.target.value);
                    }}
                    className="form-control"
                    placeholder="Nueva lista"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    onClick={() => {
                      handleAddList(listName);
                    }}
                    className="btn btn-outline-danger"
                    type="button"
                    id="button-addon2"
                    data-bs-dismiss="modal"
                  >
                    Agregar
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ownbuylists;
