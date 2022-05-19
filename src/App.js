import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import MakeAppointment from "./Pages/MakeAppointment/MakeAppointment";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Review from "./Pages/Dashboard/Review";
import MyAppoinrment from "./Pages/Dashboard/MyAppoinrment";
import Users from "./Pages/Dashboard/Users";
import AddDoctors from "./Pages/Dashboard/AddDoctors";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";

function App() {
  return (
    <div className="px-12 max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/makeappointment"
          element={
            <RequireAuth>
              <MakeAppointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppoinrment />}></Route>
          <Route path="review" element={<Review />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="AddDoctor" element={<AddDoctors />}></Route>
          <Route path="manageDoctors" element={<ManageDoctor />}></Route>
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
