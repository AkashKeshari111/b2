const { default: mongoose } = require("mongoose");


const taskSchema=new mongoose.Schema({
    taskname:{type:String},
    status:{type:String},
    tag:{type:String},
    user_id:{type:String}
})
const TaskModel=mongoose.model("task",taskSchema);

module.exports={TaskModel}