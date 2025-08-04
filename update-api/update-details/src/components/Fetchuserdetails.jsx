import React, { useEffect, useState } from "react";
import { fetchdata } from "../api/fetch";
// import Deletedata from "./Deletedata";
import { data } from "react-router";

const Fetchuserdetails = () => {
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    fetchdata().then((data) => setuserdata(data));
  }, []);

  const DeleteData = async (id) => {
    const response = await fetch("http://localhost:3000/users" + "/" + id, {
      method: "delete",
    });
    const resdata = await response.json();
    if (response) {
      alert("Record Deleted");
    }
    console.log(id);
 
    
  };

  return (
    <>
      <div>
        <h1>User Details</h1>
        {userdata ? (
          userdata.map((data, index) => (
            <li key={index}>
              {data.name} {data.age} {data.email}
            </li>
          ))
        ) : (
          <p>No data find</p>
        )}

        <button onClick={() => DeleteData(data.id)}>Delete</button>
      </div>
    </>
  );
};

export default Fetchuserdetails;
