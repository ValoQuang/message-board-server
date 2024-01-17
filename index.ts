import express from "express";
import cors from 'cors';
import messageRouter from './routes/message.route';

const app = express();
app.use(express.json());
app.use(cors());

//app router 
app.use('/', messageRouter);

const PORT = 4005;  
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});