let port = 3001;
let express = require('express');
let app = express();
let Datastore = require('nedb');
let db = new Datastore({filename: 'db/rect.db', autoload: true});

app.get('/api/rect', (req, res) => {
  db.find({}, (err, docs) => {
    if(err) {
      // TODO: Handle err.
    }

    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(docs));
  });
});

app.post('/api/rect', (req, res) => {
  db.insert(req.body, (err, newDoc) => {
    if(err) {
      // TODO: Handle err.
    }
  });
});

// For use in production, served by Node.
app.use(express.static('client/build'));

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
