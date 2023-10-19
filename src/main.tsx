import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
import StarRating from "./components/StarRating";
import Rating from "./components/Rating";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating defaultRating={2} />
    <StarRating size={36} color="#485b62" maxRating={10} defaultRating={4} />
    <StarRating
      size={48}
      color="#542c49"
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <Rating />
  </React.StrictMode>
);
