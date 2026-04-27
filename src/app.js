const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

// GET all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST new task
app.post('/tasks', (req, res) => {
    const task = {
        id: tasks.length + 1,
        name: req.body.name
    };
    tasks.push(task);
    res.status(201).json(task);
});

// DELETE task
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.json({ message: "Task deleted" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
