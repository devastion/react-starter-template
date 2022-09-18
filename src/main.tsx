import React from "react";
import ReactDOM from "react-dom/client";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container as HTMLDivElement);

root.render(
  <React.StrictMode>
    <h1>Hello, world!</h1>
    <h2>MODE: {import.meta.env.ENV_MODE}</h2>
    <h3>VERSION: {import.meta.env.ENV_VERSION}</h3>
  </React.StrictMode>
);
