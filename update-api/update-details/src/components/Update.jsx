// import { Updatedata } from "../api/Update";
import React, { useEffect, useState } from "react";
import Fetchuserdetails from "./Fetchuserdetails";

const Update = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  const Updatedata = async () => {
    const response = await fetch("http://localhost:3000/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    if (response) {
      alert("New user add");
    }
    return await response.json();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add new user</h1>
      <input
        onChange={(event) => setname(event.target.value)}
        type="text"
        placeholder="Enter your name"
      />
      <br />
      <br />
      <input
        onChange={(event) => setemail(event.target.value)}
        type="email"
        placeholder="Enter your email"
      />
      <br />
      <br />
      <input
        onChange={(event) => setage(event.target.value)}
        type="text"
        placeholder="Enter your age"
      />
      <br />
      <br />
      <button onClick={Updatedata}>Submit</button>
    </div>
  );
};

export default Update;
