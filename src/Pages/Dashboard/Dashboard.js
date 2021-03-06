import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <h2 className="text-3xl text-red-500 font-bold">
          Welcome To Our Dasboard
        </h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/*  <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Reviews</Link>
          </li>
          <li>
            <Link to="/dashboard/addDoctor">Add a doctor</Link>
          </li>
          <li>
            <Link to="/dashboard/users">All Users</Link>
          </li>
          <li>
            <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
