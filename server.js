const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');
const errorHandler = require('./utils/errorHandler');
const { port } = require('./config/config');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', weatherRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
