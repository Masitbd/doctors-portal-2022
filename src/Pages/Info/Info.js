import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "../InfoCard/InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <InfoCard cardTitle="Opening hours" bgClass="bg-teal-400" img={clock} />
      <InfoCard
        cardTitle="Visit out location"
        bgClass="bg-sky-400"
        img={marker}
      />
      <InfoCard cardTitle="Contact us now" bgClass="bg-teal-400" img={phone} />
    </div>
  );
};

export default Info;
