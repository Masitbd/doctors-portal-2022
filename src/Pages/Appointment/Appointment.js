import React from "react";
import doctor from "../../assets/images/doctor-small.png";

const Appointment = () => {
  return (
    <div className="hero bg-base-200 bg-appointment-pattern my-16 text-white">
      <div className="hero-content flex-col lg:flex-row ">
        <img
          src={doctor}
          alt=""
          className="max-w-sm rounded-lg shadow-2xl -mt-16 hidden lg:block"
        />
        <div>
          <h1>Appointment</h1>
          <h1 className="text-5xl font-bold">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
