import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [signInWithGoogle, GoogleUser, googleLoading, GoogleError] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [updateProfile, ProfileUpdating, profileError] = useUpdateProfile(auth);

  const [token] = useToken(GoogleUser || user);
  const navigate = useNavigate();
  let SignInError;
  if (GoogleError || error || profileError) {
    return (SignInError = (
      <p className="text-red-500 text-sm">
        {error?.message || GoogleError?.message || profileError?.message}
      </p>
    ));
  }
  if (googleLoading || loading || ProfileUpdating) {
    return <Loading />;
  }
  if (token) {
    navigate("/makeapplintment");
  }
  const onSubmit = async (data) => {
    console.log(data.password);
    //const user = data.
    await createUserWithEmailAndPassword(data.email, data.password);

    await updateProfile({ displayName: data.name });
    console.log("Update user successfully");
    navigate("/makeappointment");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center font-bold">SignUp</h2>
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
              <input
                type="password"
                placeholder="Enter your password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be six character or longer is required",
                  },
                })}
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span class="label-text-alt text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {SignInError}
            <input
              className="btn w-full max-w-xs"
              type="submit"
              value="SignUp"
            />
          </form>
          <p>
            Already have an account
            <Link className="text-green-700" to="/login">
              Please login
            </Link>
          </p>
          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
