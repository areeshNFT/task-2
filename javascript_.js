const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to My DevOps Internship Project!</h1>
    <p>Version: ${process.env.VERSION || '1.0.0'}</p>
    <p>Server: ${process.env.HOSTNAME || 'local'}</p>
    <p>Build Date: ${new Date().toISOString()}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});