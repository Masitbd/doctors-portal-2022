import React from "react";

const TestominialDetail = ({ img }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
      </div>
      <figure>
        <img src={img} alt="people" />
      </figure>
    </div>
  );
};

export default TestominialDetail;
