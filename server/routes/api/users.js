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
      if (rows.length === 0) {
        res.send('Empty database')
      } else {
        rows.forEach(function (row) {
          output.push(row);
        })
        res.json(output)
      }
    }
  })})

router.get('/:id/messages', async function (req, res) {
  const userId = req.params.id;
  if (userId)
  {    db.all(`SELECT * FROM messages WHERE senderId=${userId}`, function (err, rows) {
    var output = []
    if (err) {
      console.log(err)
    } else {
      if (rows.length === 0) {
        res.send('Empty database')
      } else {
        rows.forEach(function (row) {
          output.push(row);
        })
        res.json(output)
      }
    }
  })
}})

router.get('/:id/messagereceived', async function (req, res) {
  const userId = req.params.id;
  if (userId)
  {
    db.all(`SELECT * FROM messages WHERE receiverId=${userId}`, function (err, rows) {
      var output = []
      if (err) {
        console.log(err)
      } else {
        if (rows.length === 0) {
          res.send('Empty database')
        } else {
          rows.forEach(function (row) {
            output.push(row);
          })
          res.json(output)
        }
      }
    })
  }
})

router.get('/:id/media', async function (req, res) {
  const userId = req.params.id;
  if (userId)
  {
    db.all(`SELECT * FROM media WHERE userId=${userId}`, function (err, rows) {
      var output = []
      if (err) {
        console.log(err)
      } else {
        if (rows.length === 0) {
          res.send('Empty database')
        } else {
          rows.forEach(function (row) {
            output.push(row);
          })
          res.json(output)
        }
      } 
    })
  }
})
      

router.patch('/:id/availability', async (req, res, next) => {
  const { payload, body: isDeleted} = req;

  const userId = req.params.id;

  db.all(`UPDATE users SET isDeleted=${isDeleted.isDeleted ? 1 : 0} WHERE id=${userId}`, function (err, rows) {
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
  })


  //  const stmt = db.prepare(`UPDATE users SET isDeleted = 1 WHERE id = ${userId}`); 
  //  const updates = stmt.run({isDeleted: isDeleted.isDeleted ? 1 : 0}, {id: userId});
  //  stmt.finalize();

});



module.exports = router;