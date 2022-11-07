

const {Router}=require("express");
const { authentication } = require("../Middleware/authentication");
const { TaskModel } = require("./tasks.model");


const app=Router();

app.get("/task",authentication,async(req,res)=>{
    const {user_id}=req.body;
    const taskdata=await TaskModel.find({user_id})
    res.send(taskdata)
})

app.post("/task",authentication,async(req,res)=>{
      const {taskname,status,tag}=req.body;
      const userId=req.body.user_id
      const addtask=new TaskModel({
        taskname,
        status,
        tag,
        user_id:userId
      })

      await addtask.save();

      res.send("Task added successfully")
})

app.patch("/task/:id",authentication,async(req,res)=>{
  const {id}=req.params;
   const updatetask=await TaskModel.updateOne({_id:id},{$set:req.body})
   res.send(updatetask)
})

app.delete("/task/:id",authentication,async(req,res)=>{
  const {id}=req.params;
  const deletetask=await TaskModel.deleteOne({_id:id})
  res.send(deletetask)
})

module.exports=app;