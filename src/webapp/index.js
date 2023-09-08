const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

/**
 * Represents an in-memory task store.
 * Each task has a `taskId` and `description`.
 * @type {Array<Object>}
 */
let tasks = [];

let taskIdCounter = 1;

/**
 * Retrieves all tasks.
 * 
 * @returns {Array<Object>} The list of tasks.
 */
const getAllTasks = () => {
    return tasks;
};

/**
 * Adds a task with a given description.
 * 
 * @param {string} description - The task description.
 * @returns {Object} The created task object.
 */
const addTask = (description) => {
    const task = {
        taskId: taskIdCounter++,
        description
    };
    tasks.push(task);
    return task;
};

/**
 * API Endpoint: Get a list of all tasks.
 * 
 * @name Get Tasks
 * @route {GET} /tasks
 */
app.get('/tasks', (req, res) => {
    res.json(getAllTasks());
});

/**
 * API Endpoint: Add a new task.
 * 
 * @name Add Task
 * @route {POST} /tasks
 */
app.post('/tasks', (req, res) => {
    const description = req.body.description;
    if (!description) {
        return res.status(400).send('Task description is required.');
    }
    const task = addTask(description);
    res.status(201).json(task);
});

/**
 * Starts the web application server.
 */
const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
};

startServer();

