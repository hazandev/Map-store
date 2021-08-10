import React from "react";
import { ImLocation } from "react-icons/im";

export const LocationPin = ({ text }) => (
  <div className="pin">
    <ImLocation className="pin-icon" />
    {text && <p className="pin-text">{text}</p>}
  </div>
);
