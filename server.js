const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/contacts', contactRoutes);

app.get('/', (req, res) => {
  res.send('Contact backend running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
