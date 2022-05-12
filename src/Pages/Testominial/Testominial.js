import React from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import TestominialDetail from "../TestominialDetail/TestominialDetail";

const Testominial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review: "",
      img: people1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      review: "",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      review: "",
      img: people3,
    },
  ];
  return (
    <div>
      <h4 className="text-xl text-cyan-600 font-bold">Testominial</h4>
      <h1 className="text-3xl">What Our Patients Says</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
        {reviews.map((review) => (
          <TestominialDetail key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Testominial;
