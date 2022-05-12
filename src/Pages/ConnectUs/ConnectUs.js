import React from "react";

const ConnectUs = () => {
  return (
    <div className="hero bg-appointment-pattern my-6">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h3 className="mb-2 text-2xl font-bold">Contact Us</h3>
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <form>
            <input
              className="my-2 w-full"
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
            />

            <input
              className="w-full"
              type="text"
              name=""
              id=""
              placeholder="Enter your message"
            />
            <br />
            <textarea
              className="my-2 w-full h-24"
              placeholder="Enter your message"
            ></textarea>
            <br />
            <input
              className="btn btn-primary mt-0"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
