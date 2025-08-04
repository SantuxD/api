const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample user data
let users = [
  { id: 1, name: "Santu Mondal", age: 24, email: "santu@example.com" },
  { id: 2, name: "Riya Sharma", age: 22, email: "riya@example.com" },
  { id: 3, name: "Amit Roy", age: 27, email: "amit@example.com" }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET a single user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// POST a new user
app.post('/api/users', (req, res) => {
  const { name, age, email } = req.body;

  // Simple validation
  if (!name || !age || !email) {
    return res.status(400).json({ message: "Name, age, and email are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    age,
    email
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
