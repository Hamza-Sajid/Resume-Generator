import { React, useState } from "react";
import List from "./List";

function Order(props) {
  //state at the top

  const [size, setSize] = useState(0);

  const [crust, setCrust] = useState("");

  const [flavor, setFlavor] = useState("");

  //Functions to handle data
    function handleSizeChange(e) {
    setSize(e.target.value);
  }

  function handleCrustChange(e) {
    setCrust(e.target.value);
  }

  function handleFlavorChange(e) {
    setFlavor(e.target.value);
  }

  function handleData(e) {
    console.log(e);

    e.preventDefault();

    alert("Order has been placed!");

    props.setOrder({
      crust,
      flavor,
      size,
    });
  }
  return (
    <div className="container my-5">
      <div
        className="container"
        style={{
          width: "35em",
          height: "25em",
          border: "0px solid black",
          boxShadow: "1px 1px  3px  2px gray",
          borderRadius: "5px",
        }}
      >
        <div className="row row justify-content-md-center">
          <div className="col-9">
            <form className="my-5" onSubmit={handleData}>
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  <b>Crust</b>{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    placeholder="cornicione"
                    onChange={handleCrustChange}
                    value={crust}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  <b>Flavor</b>
                </label>
                <div className="col-sm-10">
                  <input
                    placeholder="fajita"
                    onChange={handleFlavorChange}
                    value={flavor}
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                  />
                </div>
              </div>

              <div className="row mb-3">
                <label
                  htmlFor="inputPassword3"
                  className="col-sm-2 col-form-label"
                >
                  <b>Size</b>{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={handleSizeChange}
                    value={size}
                    type="number"
                    className="form-control"
                    id="inputPassword3"
                  />
                </div>
              </div>
              <div class="d-grid gap-2 d-md-block my-5 ">
                <button
                  onClick={handleData}
                  type="submit"
                  class="btn btn-dark bg-dark"
                  style={{ margin: "auto", display: "block" }}
                  type="button"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
