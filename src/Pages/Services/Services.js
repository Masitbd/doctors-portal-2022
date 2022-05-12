import React from "react";
import floride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whiting from "../../assets/images/whitening.png";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fruride Treatment",
      description: "",
      img: floride,
    },
    {
      _id: 1,
      name: "Cavity Filling",
      description: "",
      img: whiting,
    },
    {
      _id: 1,
      name: "Teeth Whiteing",
      description: "",
      img: cavity,
    },
  ];
  return (
    <div className="my-12">
      <h3 className="text-center font-bold text-xl text-cyan-700">
        OUR SERVICES
      </h3>
      <h2 className="text-center text-red-900 text-3xl">Services we provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
