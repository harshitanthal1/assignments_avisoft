const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/api/data', async (req, res) => {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/data/:id', async (req, res) => {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        const records = JSON.parse(data);
        const record = records.find(r => r.id === parseInt(req.params.id));
        if (!record) {
            res.status(404).json({ error: 'Record not found' });
            return;
        }
        res.json(record);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/data', async (req, res) => {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        const records = JSON.parse(data);
        const newRecord = req.body;
        newRecord.id = Date.now(); // Generate a unique ID
        records.push(newRecord);
        await fs.writeFile('data.json', JSON.stringify(records, null, 2));
        res.status(201).json(newRecord);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/data/:id', async (req, res) => {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        let records = JSON.parse(data);
        const updatedRecord = req.body;
        const index = records.findIndex(r => r.id === parseInt(req.params.id));
        if (index === -1) {
            res.status(404).json({ error: 'Record not found' });
            return;
        }
        records[index] = { ...records[index], ...updatedRecord };
        await fs.writeFile('data.json', JSON.stringify(records, null, 2));
        res.json(records[index]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/data/:id', async (req, res) => {
    try {
        const data = await fs.readFile('data.json', 'utf8');
        let records = JSON.parse(data);
        const index = records.findIndex(r => r.id === parseInt(req.params.id));
        if (index === -1) {
            res.status(404).json({ error: 'Record not found' });
            return;
        }
        const deletedRecord = records.splice(index, 1);
        await fs.writeFile('data.json', JSON.stringify(records, null, 2));
        res.json(deletedRecord[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
