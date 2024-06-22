const express = require("express");
const app = express();
const Student = require("./models/students");
const port = process.env.PORT || 3000;
require("./db/conn");
app.use(express.json());
const studentRouter = require("./router/student");
app.use(studentRouter);


app.listen(port,()=>{
    console.log(`${port}`);
})