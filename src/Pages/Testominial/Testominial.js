import React from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import TestominialDetail from "../TestominialDetail/TestominialDetail";

const Testominial = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
      <TestominialDetail img={people1} />
      <TestominialDetail img={people2} />
      <TestominialDetail img={people3} />
    </div>
  );
};

export default Testominial;
