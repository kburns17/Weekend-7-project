const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET reflections
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM reflection ORDER BY "date" DESC`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error GET reflections', error);
        res.sendStatus(500);
    });
}); 


// POST reflection
router.post('/', (req, res) => {
    let reflection = req.body;
    const queryText = `INSERT INTO "reflection" ("topic", "description")
                        VALUES ($1, $2)`;
    pool.query(queryText, [ reflection.topic, reflection.description] )
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error POST reflection', error);
        res.sendStatus(500);  
    }) 
}) 


// DELETE post
router.delete('/:id', (req, res) => {
    let reflectionId = req.params.id;
    const queryText = `DELETE from "reflection" WHERE id = $1`;
    pool.query(queryText, [reflectionId])
    .then((response) => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log('DELETE error', error);
        res.sendStatus(500)
    })
}) 

 //UPDATE/BOOKMARK reflection
router.put('/:id', (req, res) => {
    let bookmarkId = req.params.id;
    const queryText = `UPDATE "reflection" SET "bookmarked" = NOT bookmarked WHERE "id" = $1`;
    pool.query(queryText, [bookmarkId])
    .then((response) => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log('bookmark error', error);
        res.sendStatus(500)
    })
});

router.get('/bookmarks', (req, res)=>{
    const queryText = `SELECT * FROM reflection WHERE "bookmarked" = true ORDER BY "date" DESC`;
    pool.query(queryText).then((result)=>{
        res.send(result.rows);
    }).catch((error)=> {
        console.log('error GET bookmarks', error);
        res.sendStatus(500);
    });
});




module.exports = router;