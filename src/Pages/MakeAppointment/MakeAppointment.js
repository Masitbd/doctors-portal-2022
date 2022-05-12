import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableApointments from "./AvailableApointments";

const MakeAppointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableApointments date={date} />
      <Footer />
    </div>
  );
};

export default MakeAppointment;
