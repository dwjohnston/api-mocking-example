import express from 'express';

// Module-scoped object as the database
const todosDB = {
  todos: [
    { id: 1, title: 'Learn TypeScript', completed: false },
    { id: 2, title: 'Build an Express app', completed: false }
  ]
};

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/v1/todos', (req, res) => {
  res.json(todosDB.todos);
});

/**
 *  for demonstration purposes, these return the exact same thing
 *  but you can imagine this is a completely different system * 
 */
app.get('/v2/todos', (req, res) => {
  res.json(todosDB.todos);
});

app.get('/v1/profile', (req, res) => {
  res.json({
    id: '12345',
    userType: 'admin'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
