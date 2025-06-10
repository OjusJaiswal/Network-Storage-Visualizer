const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/storage', (req, res) => {
  exec('python3 ../scanner/scanner.py', (error, stdout, stderr) => {
    if (error) {
      console.error(stderr);
      return res.status(500).send('Error fetching storage data');
    }
    const result = JSON.parse(stdout);
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});