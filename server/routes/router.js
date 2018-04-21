const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET reflections
router.get('/', (req, res) => {
    const queryText = `SELECT id, topic, description, bookmarked, date FROM reflection`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error GET reflections', error);
        res.sendStatus(500);
    });
}); // end GET reflections



// POST reflection
router.post('/', (req, res) => {
    let reflection = req.body;
    const queryText = `INSERT INTO "reflection" ("topic", "description")
                        VALUES ($1, $2)`;
    pool.query(queryText, [ reflection.topic, reflection.description] )
    .then((result) => {
        console.log(result.rows);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error POST reflection', error);
        res.sendStatus(500);  
    }) 
}) // end POST reflection

// DELETE post


module.exports = router;