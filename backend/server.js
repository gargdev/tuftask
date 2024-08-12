const express = require('express');
const cors = require('cors');
const { sequelize } = require('./config/db');
const bannerRoutes = require('./routes/bannerRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Sync Sequelize models
sequelize.sync().then(() => console.log('Database synced successfully'));

// Routes
app.use('/api/banner', bannerRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
