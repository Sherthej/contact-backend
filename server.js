const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use the routes
app.use('/api/contacts', contactRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Event management API!');
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  console.log("Received message:", { name, email, message });
  res.status(200).json({ message: "Message received!" });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
