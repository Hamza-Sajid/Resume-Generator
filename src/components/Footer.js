import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white">
    

        <div class="col-md-1 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase ">Contact</h6>
          <p>
            <i class="fas fa-home me-3"></i> Islamabad , G-8 /Markaz
          </p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            Pizza@Circle.Pk
          </p>
          <p>
            <i class="fas fa-phone me-3"></i> + 92 111 222 88
          </p>
          <p>
            <i class="fas fa-print me-3"></i> + 92 111 222 89
          </p>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white">Circle Pizza</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
