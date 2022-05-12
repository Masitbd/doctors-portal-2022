import React from "react";

const TestominialDetail = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl pb-2">
      <div className="card-body">
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
      </div>
      <div className="flex items-center pl-8">
        <figure>
          <img src={review.img} alt="people" />
        </figure>
        <p className="ml-3">{review.name}</p>
      </div>
    </div>
  );
};

export default TestominialDetail;
