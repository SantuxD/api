import { Updatedata } from "../api/Update";
import React, { useState } from "react";

const Update = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  return (
    <div className="update-user">
      <h1>Add new user</h1>
      <input
        onChange={(event) => setname(event.target.value)}
        type="text"
        placeholder="Enter your name"
      />
      <input
        onChange={(event) => setemail(event.target.value)}
        type="email"
        placeholder="Enter your email"
      />
      <input
        onChange={(event) => setage(event.target.value)}
        type="text"
        placeholder="Enter your age"
      />
      
      <button>Submit</button>
    </div>
  );
};

export default Update;
