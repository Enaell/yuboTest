const passport = require('passport');
const router = require('express').Router();
// const auth = require('../auth');

const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./db/db.sqlite');

router.get('/', async function (req, res) {
  db.all('SELECT * FROM users', function (err, rows) {
    var output = []
    if (err) {
      console.log(err)
    } else {
      console.log('pass here')
      if (rows.length === 0) {
        res.send('Empty database')
      } else {
        console.log('rows : ')
        console.log(rows)
        rows.forEach(function (row) {
          output.push(row);
        })
        res.json(output)
      }
    }
  })})

  router.get('/:id/messages', async function (req, res) {
    const userId = req.params.id;
    console.log('-----------------------------------');
    console.log(userId);
    if (userId)
{    db.all(`SELECT * FROM messages WHERE senderId=${userId}`, function (err, rows) {
      var output = []
      if (err) {
        console.log(err)
      } else {
        console.log('pass here')
        if (rows.length === 0) {
          res.send('Empty database')
        } else {
          console.log('rows : ')
          console.log(rows)
          rows.forEach(function (row) {
            output.push(row);
          })
          res.json(output)
        }
      }
    })}})

    router.get('/:id/messagereceived', async function (req, res) {
      const userId = req.params.id;
      console.log('-----------------------------------');
      console.log(userId);
      if (userId)
  {    db.all(`SELECT * FROM messages WHERE receiverId=${userId}`, function (err, rows) {
        var output = []
        if (err) {
          console.log(err)
        } else {
          console.log('pass here')
          if (rows.length === 0) {
            res.send('Empty database')
          } else {
            console.log('rows : ')
            console.log(rows)
            rows.forEach(function (row) {
              output.push(row);
            })
            res.json(output)
          }
        }
      })}})


router.patch('/', async (req, res, next) => {
  const { payload, body: updates} = req;

  delete updates.username;

  try {
    const user = undefined;
    return res.json({ user });
  }
  catch( error ){
    console.log(error);
    return res.status(500).json({ error });
  }
});



module.exports = router;