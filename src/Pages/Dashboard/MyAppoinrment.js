import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const MyAppoinrment = () => {
  const { isLoading, data: services } = useQuery("repoData", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );
  console.log(services);
  if (isLoading) return "Loading...";

  return (
    <div class="overflow-x-auto">
      <h2>My appointments:</h2>
      <table class="table w-full">
        <thead>
          <tr>
            {services.map((service) => (
              <tr>
                <th>1</th>
                <th>{service.name}</th>
                <th>{service.price}</th>
                <th>
                  <Link to={`/dashboard/payment/${service._id}`}>
                    <button className="btn btn-xs">Pay</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default MyAppoinrment;
