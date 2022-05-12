module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/bg.png')",
        "appointment-pattern": "url('/src/assets/images/appointment.png')",
      },
    },
    daisyui: {
      themes: [
        {
          doctortheme: {
            primary: "#0FCFEC",
            secondary: "#19D3AE",
            accent: "#3A4256",
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
        "dark",
        "cupcake",
      ],
    },
  },
  plugins: [require("daisyui")],
};
