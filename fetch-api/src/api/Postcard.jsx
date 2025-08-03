import React from "react";

const Postcard = (props) => {
  return (
    <>
      <div
        style={{
          padding: "20px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
    </>
  );
};

export default Postcard;
