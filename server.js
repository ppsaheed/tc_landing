const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'services.json');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Login Endpoint
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'tc' && password === 'Syd@44') {
        res.json({ success: true, token: 'fake-jwt-token-for-demo' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

// Get Services
app.get('/api/services', (req, res) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// Save Services
app.post('/api/services', (req, res) => {
    const newServices = req.body;
    fs.writeFile(DATA_FILE, JSON.stringify(newServices, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save data' });
        }
        res.json({ success: true });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Admin Dashboard: http://localhost:${PORT}/admin.html`);
});
