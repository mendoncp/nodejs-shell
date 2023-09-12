const express = require('express');
const app = express();
const testRoute = require('./routes/testRoutes')

const port = 3000;

app.use("/test", testRoute);


app.listen(port, function () {
    console.log('Example app listening on port 3000!')
  })