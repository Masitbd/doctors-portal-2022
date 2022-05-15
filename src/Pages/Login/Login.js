import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithGoogle, GoogleUser, googleLoading, GoogleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let SignInError;
  if (GoogleError || error) {
    return (SignInError = (
      <p className="text-red-500 text-sm">
        {error?.message || GoogleError.message}
      </p>
    ));
  }
  if (googleLoading || loading) {
    return <Loading />;
  }
  if (GoogleUser) {
    return (
      <div>
        <p>Signed In GoogleUser: {GoogleUser.displayName}</p>
      </div>
    );
  }
  const onSubmit = (data) => {
    console.log(data.email);
    //const user = data.
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
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

            <input className="btn w-full max-w-xs" type="submit" />
          </form>
          {SignInError}
          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
