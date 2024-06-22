const express = require("express");

const router = new express.Router();
const Student = require("../models/students");
router.post("/students",(req,res)=>{
    const std = new Student(req.body );
     std.save().then(()=>{
        res.status(201).send(std);
     }).catch((e)=>{
          res.status(400).send(e);
     })
 
});
router.get("/students",async(req,res)=>{
try{
  const sdata = await Student.find();
  res.send(sdata);
}catch(e){
res.send(e);
}
});

router.get("/students/:id",async(req,res)=>{
    try{
    const _id = req.params.id;
    const sdata = await Student.findById(_id);

    if(!sdata){
        res.status(404).send("invalid data");
    }
    else{
        res.status(200).send(sdata);
    }
  
    }catch(e){
        res.status(500).send(e);
    }

});
router.delete("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const delsdata = await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(400).send();
        }
        res.send(delsdata);

    }catch(e){
        res.status(500).send(e);
    }
    
});
router.patch("/students/:id",async(req,res)=>{
        try{
            const _id = req.params.id;
            const updatesdata = await Student.findByIdAndUpdate(_id,req.body,{
                new:true
            });
            if(!_id){
                return res.status(404).send();
            }
            res.send(updatesdata);
    
        }catch(e){
            res.status(500).send(e);
        }
});

module.exports = router;