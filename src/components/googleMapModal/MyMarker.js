import React from "react";

export default ({ text }) => {
  return (
    <div
      style={{
        color: "black",
        background: "red",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)"
      }}
    >
      {text}
    </div>
  );
};
