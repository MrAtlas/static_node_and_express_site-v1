const express = require('express');
const data = require('./data.json');
const path = require('path');
const favicon = require('serve-favicon'); 

const app = express();

// Set the view engine to Pug
app.set('view engine', 'pug');

// Serve static files from the 'public' directory
//credits: https://expressjs.com/en/starter/static-files.html
app.use('/static', express.static(path.join(__dirname, 'public')));

//use the favicon
//credits: https://expressjs.com/en/resources/middleware/serve-favicon.html
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Defining the index route
app.get('/', (req, res) => {
    // Render the 'index' template and pass the 'projects' data to it
    res.render('index', { projects: data.projects });
});

// setting the about page route
app.get('/about', (req, res) => {
    // Render the 'about' template
    res.render('about');
});

// setting the project Page route
app.get('/project/:id', (req, res, next) => {
    const projectId = parseInt(req.params.id);
    const project = data.projects[projectId];
  
    if (project) {
      res.render('project', { project });
    } else {
      next();
    }
});


// Handling the 404 error page
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status || 500);

    if (err.status === 404) {
        res.render('page-not-found');
    } else {
        res.render('error');
    }
});


const port = 3000;
app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
