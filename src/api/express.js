const express = require('express');
const app = express();
const PORT = 3000;

/**
 * Represents a simple in-memory data store for users.
 * @type {Array<Object>}
 */
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

/**
 * Fetches a user by their ID.
 * 
 * @param {number} id - The ID of the user.
 * @returns {Object|null} The user object or null if not found.
 */
const getUserById = (id) => {
    return users.find(user => user.id === id) || null;
};

/**
 * API Endpoint: Get a list of all users.
 * 
 * @name Get Users
 * @route {GET} /users
 */
app.get('/users', (req, res) => {
    res.json(users);
});

/**
 * API Endpoint: Get a user by ID.
 * 
 * @name Get User by ID
 * @route {GET} /users/:id
 * @routeparam {number} :id - The ID of the user.
 */
app.get('/users/:id', (req, res) => {
    const user = getUserById(Number(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

/**
 * Starts the API server.
 */
const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
};

startServer();

