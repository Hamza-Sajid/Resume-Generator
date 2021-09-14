import React from "react";
import { useHistory } from "react-router-dom";
export default function Option(props) {
  function clear(props) {}
  const history = useHistory();

  return (
    <div className="Container align d-flex align-items-center justify-content-lg-center ">
      <div className="d-grid gap-1 col-5 my-5  ">
        <button
          onClick={() => history.push("/List")}
          className="btn btn-dark my-3"
          type="button"
        >
          View All Orders
        </button>
        <button
          onClick={() => history.push("/Order")}
          className="btn btn-dark my-3"
          type="button"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
