import React from "react";
import Ownbuylists from "./OwnBuyLists";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <div
            style={{
              marginTop: "20vh",
              width: "450px",
            }}
          >
            <Ownbuylists />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
