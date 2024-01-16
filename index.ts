const express = require("express");
const app = express();
require("dotenv").config();
const messageRouter = require('./routes/message.route');

app.use(express.json());

//app router 
app.use('/', messageRouter);

const PORT = process.env.PORT || 4005;  
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});