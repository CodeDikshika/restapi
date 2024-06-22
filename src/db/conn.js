const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/studentsapi",{
   
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("fulfil");
}).catch((e)=>{
    console.log(`not fulfil ${e}`);
})