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



module.exports = router;