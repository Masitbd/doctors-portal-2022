import React, { useState } from "react";
import Chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div class="hero my-5">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={Chair} alt="" class="max-w-sm rounded-lg shadow-2xl" />
        <div className="mr-24">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
