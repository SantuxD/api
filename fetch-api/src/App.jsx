import { userData } from "./api/Userdata";
import { useEffect, useState} from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Example public API
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // empty dependency array = runs once on mount

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div>
        <h2>Users List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name},{user.username},{user.email}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
