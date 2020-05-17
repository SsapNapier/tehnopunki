const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add posts
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    pathName: req.body.pathName,
    text: req.body.text,
    name: req.body.name,
    createdAt: new Date()
  });
  res.status(201).send();
});


async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb+srv://someUserName:somePassword123@01games-zszvu.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
  });

  return client.db('vue_express').collection('posts');
}

module.exports = router;
