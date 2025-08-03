import { userData } from "./api/Userdata";
import { useEffect, useState } from "react";
import "./App.css";
import Postcard from "./api/Postcard";

function App() {
  // const [post, setpost] = useState([]);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchpost = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts/1"
  //     );
  //     const data = await response.json();
  //     setpost(data);
  //     console.log(data);
  //   };

  //   fetchpost();
  // }, []);

  useEffect(() => {
    userData().then((posts) => setData(posts));
  }, []);

  return (
    <>
      <div>
        <h1>User Details</h1>

        {data ? (
          data.map((e, index) => (
            <Postcard key={index} title={e.title} body={e.body} />
          ))
        ) : (
          <p>nodata</p>
        )}

        {/* {data.map((e) => (
          <li key={e.id}>
            {e.userId},{e.title},{e.body}
          </li>
        ))} */}
      </div>
    </>
  );
}

export default App;
