import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formatedDate = format(date, "pp");
  //console.log(user);
  const handkeBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(slot);
    const bookig = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookig),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(bookig.date);
        if (data.success) {
          toast(`Appointment is set${formatedDate} at ${slot}`);
        } else {
          toast.error(
            `You have already have an appointmrnt on ${bookig?.date}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg my-2">Booking for: {name}</h3>
          <form
            onSubmit={handkeBooking}
            className="grid grid-cols-1 gap-3 justify-items-center"
          >
            <input
              disabled
              type="text"
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots?.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              class="input input-bordered w-full max-w-xs"
            />

            <input
              type="submit"
              value="Submit"
              class="btn btn-primary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
