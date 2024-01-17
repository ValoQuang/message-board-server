const express = require("express");
const app = express();
const messageRouter = require('./routes/message.route');
const cors = require("cors");

app.use(express.json());
app.use(cors());

//app router 
app.use('/', messageRouter);

const PORT = 4005;  
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});