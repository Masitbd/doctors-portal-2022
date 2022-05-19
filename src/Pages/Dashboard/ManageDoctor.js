import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const ManageDoctor = () => {
  const {
    isLoading,
    error,
    refetch,
    data: doctors,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor").then((res) => res.json())
  );

  const handleDelete = (email) => {
    window.confirm("Do you want to delete?");
    if (true) {
      fetch(`http://localhost:5000/doctor/${email}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast("Successfully deleted this record");
            refetch();
          }
        });
    }
  };
  if (isLoading) return "Loading...";
  return (
    <div>
      <h2>doctors lenth {doctors.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <th>{index + 1}</th>
                <td>{doctor.name}</td>
                <td>
                  <img className="w-16" src={doctor.img} alt="" />
                </td>
                <td>{doctor.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(doctor.email)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
