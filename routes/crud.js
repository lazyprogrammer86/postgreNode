const router = require('express').Router();
const pool = require('../postgreS/connection');


//get all the users
router.get('/', async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users');
        !users.rows.length && res.status(404).json("No users found")
        res.status(200).json(users.rows)
    } catch (err) {
        res.status(500).json(err);
    }
});


//get specific user
router.get('/:id', async (req, res) => {
    const userID = req.params.id;
    try {
        const user = await pool.query('SELECT * FROM users WHERE id = $1', [userID]);
        !(user.rows).length && res.status(404).json('No user found');
        res.status(200).json(user.rows[0]);
    } catch (err) {
        res.status(500).json(err);
    }
});


//inserting new user
router.post('/', async (req, res) => {
    //destructuring req.body object
    const {
        name,
        email
    } = req.body;
    try {
        const newUser = await pool.query('INSERT INTO users (name,email) VALUES($1,$2)', [name, email]);
        !newUser.rowCount && res.status(400).json('No new user has been created');
        res.status(200).json('New user has been created');
    } catch (err) {
        res.status(500).json(err);
    }
});

// update a user
router.put('/:id', async (req, res) => {
    const userID = req.params.id;
    //destructuring req.body object
    const {
        name,
        email
    } = req.body;
    try {
        const updatedUser = await pool.query('UPDATE users SET name = $1 , email = $2 WHERE ID=$3', [name, email, userID]);
        !updatedUser.rowCount && res.status(404).json('User has not been updated');
        res.status(201).json('User updated successfully');
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a user
router.delete('/:id', async (req, res) => {
    const userID = req.params.id;
    try {
        const deletedUser = await pool.query('DELETE FROM USERS WHERE ID = $1', [userID]);
        !deletedUser.rowCount && res.status(400).json('No user has been deleted');
        res.status(201).json(`User with the id ${userID} has been deleted`);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;