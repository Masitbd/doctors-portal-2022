import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl text-center">
      <div class="card-body">
        <h2 class="font-bold text-center">{name}</h2>
        <p>
          {slots.length ? (
            slots[0]
          ) : (
            <span className="text-red-500">No slots rmaining</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available now
        </p>
        <div class="card-actions justify-center">
          <label
            for="booking-modal"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            class="btn modal-button btn-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
