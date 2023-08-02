import { useState } from "react";

const Home = () => {

  const customStyles = {
    width: "25rem",
    padding: "10px",
    zIndex: "-1",
  };

  return (
    <>
      <div className="card-container">
        <div className="card" style={customStyles}>
          <h5 className="card-title">BitBank</h5>
          <div className="card-body">
            <p className="card-text">
              Welcome to BitBank - the bank that's only safe for fake virtual currency, and even then, it's slightly questionable.
            </p>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Home;
