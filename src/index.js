
const { urlencoded } = require("express");
const express = require("express");
const path = require("path");

const recipesRouter = require('./routers/recipes');


const app = express();

const host = '127.1.1.0'

// app.use((req, res, next) => {
//   const { method, path } = req;
//   console.log(
//     `New request to: ${method} ${path} at ${new Date().toISOString()}`
//   );
//   next();
// });

// const publicDirectoryPath = path.join(__dirname, './public');
// app.use(express.static(publicDirectoryPath));


app.use((req, res, next) => {
    const { method, path } = req;
    console.log(
      `New request to: ${method} ${path} at ${new Date().toISOString()}`
    );
    next();
  });

  app.use(express.json());
  app.use(urlencoded({ extended: true}));

  app.use('/api/v1/recipes', recipesRouter);


const port = process.env.PORT || 3000;

app.listen(port, ()=>{

    console.log(`Your server is running on host ${host}:${port}`);
});