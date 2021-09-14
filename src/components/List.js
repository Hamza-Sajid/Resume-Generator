import React from "react";

export default function List(props) {
  return (
    <div className="Container my-5 ">
      <h3 style={{ textAlign: "center" }}>List Of All Orders 🛒</h3>
      <div
        className=""
        style={{
          width: "300px",
          height: "400px",
          display: "block",
          position: "relative",
          left: "30%",
          textAlign: "center",
        }}
      >
        <ul
          className="list-group d-inline-flex p-2 d-flex "
          style={{ width: "500px", height: "00px", display: "block" }}
        >
          {props.order.map((order) => (
            <li className="list-group-item">
              <h5 style={{ display: "inline" }}>Your Orderd</h5>{" "}
              <h4 style={{ display: "inline" }}>
                {" "}
                <u>{order.flavor}</u>{" "}
              </h4>{" "}
              <h5 style={{ display: "inline" }}>Pizza</h5>, <br />{" "}
              <h6 style={{ display: "inline" }}>With Crust Of : </h6>{" "}
              <h4 style={{ display: "inline" }}>
                {" "}
                <u>{order.crust} </u>
              </h4>{" "}
              <h5 style={{ display: "inline" }}> & size of </h5>,{" "}
              <h4 style={{ display: "inline" }}>{order.size} </h4>{" "}
            </li>
          ))}
          <li
            className="list-group-item bg-dark text-white"
            aria-current="true"
          >
            Live, Love , Eat
          </li>
        </ul>
      </div>
    </div>
  );
}
