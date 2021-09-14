import React from "react";
import Order from "./Order";
function Header(props) {
  return (
    <nav className="navbar  navbar-dark bg-dark">
      <div className="container-fluid">
        <span
          className="navbar-brand mb-0 h1 text-center "
          style={{ textAlign: "center", position: "relative", left: "40%" }}
        >
          Pizza Ordering App 🍕
        </span>
      </div>
    </nav>
  );
}

export default Header;
