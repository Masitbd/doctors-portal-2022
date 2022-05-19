import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch(`http://localhost:5000/service`).then((res) => res.json())
  );
  const imageStorageKey = "ebe1cfec8cdd6cb4cce41d66e04654d1";
  /*
  three ways to store image
  1. Third party storage image bb
  2. In your own sercer or file system
  3. Store in the database like mongodb
  4. YUP: to validate image for react hook form 
   */
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to the database
          fetch("http://localhost:5000/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              //  authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast("Doctor added successfully");
                reset();
              } else {
                toast.error("Fail to add doctor");
              }
            });
        }
      });
  };
  if (isLoading) {
    return "Loading ... ...";
  }
  return (
    <div>
      <h2 className="text-2xl">Add New Doctors</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            class="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-600">
                {errors.name.message}
              </span>
            )}
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            class="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Provide a valid email",
              },
            })}
          />
          <label class="label">
            {errors.email?.type === "required" && (
              <span class="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span class="label-text-alt text-red-600">
                {errors.email.message}
              </span>
            )}
          </label>
          <select
            class="select select-bordered w-full max-w-xs"
            {...register("speciality")}
          >
            <option>Pick your favorite Simpson</option>
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>

          <input
            type="file"
            class="input input-bordered w-full max-w-xs mt-3"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label class="label">
            {errors.password?.type === "required" && (
              <span class="label-text-alt text-red-600">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>

        <input className="btn w-full max-w-xs" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddDoctors;
