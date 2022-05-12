import React from "react";
import Appointment from "../Appointment/Appointment";
import ConnectUs from "../ConnectUs/ConnectUs";
import Info from "../Info/Info";
import ServiceCare from "../ServiceCare/ServiceCare";
import Services from "../Services/Services";
import Testominial from "../Testominial/Testominial";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <ServiceCare />
      <Appointment />
      <Testominial />
      <ConnectUs />
    </div>
  );
};

export default Home;
