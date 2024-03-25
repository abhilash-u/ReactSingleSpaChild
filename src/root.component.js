import "./style.css";
export default function Root(props) {
  //return <section>{props.name} is mounted!</section>;
  function requestBarcodePermission() {
    window.Android.requestBarcodePermission();
  }
  function requestCameraPermission() {
    window.Android.requestCameraPermission();
  }
  function requestLocationPermission() {
    window.Android.requestLocationPermission();
  }
  return (
    <div style={{ textAlign: "center", border: "3px", padding: "20px" }}>
      {props.name} is mounted
      <div
        className="buttonView"
      >
        <Button onClick={requestBarcodePermission}>Scan BarCode</Button>
        <Button onClick={requestLocationPermission}>Get GeoLocation</Button>
        <Button onClick={requestCameraPermission}>Open Camera</Button>
      </div>
    </div>
  );
}

// Button.jsx
import React from "react";

// interface ButtonProps {
//   children: React.Node;
//   onClick: () => void;
//   className?: string;
//   // Add optional props for customization (e.g., button type, disabled state)
//   type?: 'button' | 'submit' | 'reset'; // Common button types
//   disabled?: boolean;
// }

const Button = ({
  children,
  onClick,
  className,
  type = "button", // Set default type
  disabled = false,
  ...rest
}) => {
  const buttonStyles = {
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    cursor: disabled ? "not-allowed" : "pointer",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} ${disabled ? "disabled" : ""}`} // Add a class for disabled state (optional)
      onClick={onClick}
      style={buttonStyles}
      {...rest}
    >
      {children}
    </button>
  );
};
