import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableApointments = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState([null]);

  const formateDate = format(date, "pp");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formateDate], () =>
    fetch(`http://localhost:5000/available?date=${formateDate}`).then((res) =>
      res.json()
    )
  );
  console.log(services);

  if (isLoading) return "Loading...";
  /*  useEffect(() => {
    //fetch("services.json")
    fetch(`http://localhost:5000/available?date=${formateDate}`)
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, [formateDate]); */

  return (
    <div>
      <div>
        <h1 className="text-xl text-cyan-500 text-center">
          Available Appointments on: {format(date, "PP")}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
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
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableApointments;
