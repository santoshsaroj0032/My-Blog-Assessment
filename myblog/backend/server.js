const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/posts', async (req, res) => {
  const result = await pool.query('SELECT * FROM posts');
  res.json(result.rows);
});

app.get('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
  res.json(result.rows[0]);
});

app.post('/api/posts', async (req, res) => {
  const { title, author, content } = req.body;
  await pool.query(
    'INSERT INTO posts (title, author, content) VALUES ($1, $2, $3)',
    [title, author, content]
  );
  res.status(201).send();
});

app.put('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author, content } = req.body;
  await pool.query(
    'UPDATE posts SET title = $1, author = $2, content = $3 WHERE id = $4',
    [title, author, content, id]
  );
  res.status(200).send();
});

app.delete('/api/posts/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM posts WHERE id = $1', [id]);
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});