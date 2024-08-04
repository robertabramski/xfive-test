let port = 8083;
let endpoint = '/api/rect';
let express = require('express');
let app = express();
let Datastore = require('nedb');
let db = new Datastore({filename: 'db/rect.db', autoload: true});

app.use(express.json());
app.use(express.static('client/build'));

app.get(endpoint, (req, res) => {
  db.find({}, (err, docs) => {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(err ? {err: err.message} : docs));
  });
});

app.post(endpoint, (req, res) => {
  db.insert(req.body, (err, newDoc) => {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(err ? {err: err.message} : newDoc));
  });
});

app.delete(endpoint, (req, res) => {
  db.remove({_id: req.body['_id']}, {}, (err, numRemoved) => {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(err ? {err: err.message} : {success: numRemoved}));
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
