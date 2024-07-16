import React from "react";

const LoadingSkeleton = () => {
  return (
    <div
      className="card skeleton"
      aria-hidden="true"
      style={{ width: "28rem", height: "20rem" }}
    >
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7 text-danger"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4 text-danger"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8 text-danger"></span>
        </p>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
