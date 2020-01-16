const express = require('express'),
      ctrl = require('./controllers/controller'),
      app = express();


app.use(express.json());

app.get('/api/movies', ctrl.getMovies);
app.post('/api/movie', ctrl.addMovie);
app.put('/api/movie/:id', ctrl.editMovie);


const port = 3456;
app.listen(port, () => console.log(`Movies playing on ${port}`));