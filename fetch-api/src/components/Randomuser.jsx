import React from "react";
import { randomuser } from "../api/Randomusergenerator";
import { useEffect, useState } from "react";

const Randomuser = () => {
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    randomuser().then((user) => setuserdata(user.results));
  }, []);

  const refresh = () => {
    randomuser().then((user) => setuserdata(user.results));
  };

  return (
    <>
      {userdata ? (
        userdata.map((e, index) => (
          <li key={index}>
            {" "}
            Name: {e.name.title} {e.name.first} {e.name.last} Age: {e.dob.age}{" "}
            email: {e.email} gender: {e.gender} City: {e.location.city} Country:{" "}
            {e.location.country} Postcode: {e.location.postcode} State:{" "}
            {e.location.state} Phone: {e.phone} 
            UserId: {e.login.username}{" "}
          </li>
        ))
      ) : (
        <p>No data found</p>
      )}

      <button onClick={refresh}>Refresh user details</button>
    </>
  );
};

export default Randomuser;

