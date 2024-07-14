import React from "react";

const FooterHead = () => {
  return (
    <section className="d-flex justify-content-between text-white p-4 bg-black">
      <div className="me-5">
        <span>Get connected with us on social media</span>
      </div>
      <div>
        <a href="" className="text-white me-4">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </section>
  );
};

export default FooterHead;
