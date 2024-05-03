import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
<React.StrictMode></React.StrictMode>;
