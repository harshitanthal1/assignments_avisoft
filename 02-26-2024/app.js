const express = require('express');
const fs = require('fs').promises;
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const TASKS_FILE = 'tasks.json';

app.use(bodyParser.json());

const readTasksFromFile = async () => {
    try {
        const data = await fs.readFile(TASKS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

const writeTasksToFile = async (tasks) => {
    await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
};

app.get('/tasks', async (req, res) => {
    const tasks = await readTasksFromFile();
    res.json(tasks);
});

app.get('/tasks/:id', async (req, res) => {
    const tasks = await readTasksFromFile();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
});

app.post('/tasks', async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }
    const tasks = await readTasksFromFile();
    const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title,
        description,
        completed: false
    };
    tasks.push(newTask);
    await writeTasksToFile(tasks);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', async (req, res) => {
    const { title, description, completed } = req.body;
    if (!title || !description || completed === undefined) {
        return res.status(400).json({ message: 'Title, description, and completed status are required' });
    }
    const tasks = await readTasksFromFile();
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    tasks[taskIndex] = { id: taskId, title, description, completed };
    await writeTasksToFile(tasks);
    res.json(tasks[taskIndex]);
});

app.patch('/tasks/:id', async (req, res) => {
    const { completed } = req.body;
    if (completed === undefined) {
        return res.status(400).json({ message: 'Completed status is required' });
    }
    const tasks = await readTasksFromFile();
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    tasks[taskIndex].completed = completed;
    await writeTasksToFile(tasks);
    res.json(tasks[taskIndex]);
});

app.delete('/tasks/:id', async (req, res) => {
    const tasks = await readTasksFromFile();
    const taskId = parseInt(req.params.id);
    const updatedTasks = tasks.filter(t => t.id !== taskId);
    if (tasks.length === updatedTasks.length) {
        return res.status(404).json({ message: 'Task not found' });
    }
    await writeTasksToFile(updatedTasks);
    res.status(204).send();
});

fs.access(TASKS_FILE)
    .then(() => console.log('Tasks file already exists, skipping pre-population'))
    .catch(async () => {
        console.log('Pre-populating tasks file with sample data');
        const sampleTasks = [
            { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
            { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
            { id: 3, title: 'Task 3', description: 'Description 3', completed: false }
        ];
        await writeTasksToFile(sampleTasks);
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
