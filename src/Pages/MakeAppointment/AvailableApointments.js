import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableApointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState([null]);

  useEffect(() => {
    //fetch("services.json")
    fetch("http://localhost:5000/service")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div>
        <h1 className="text-xl text-cyan-500 text-center">
          Available Appointments on: {format(date, "PP")}{" "}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableApointments;
