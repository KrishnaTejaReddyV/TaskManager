var Task = require("../models/tasks");

exports.getTasks = function(req, res)
{
 Task.find({uid:req.params.uid},function(err,tasks){
 if(err){
 res.send(err);
 }
 res.json(tasks);
 });
}
exports.getTask = function(req, res)
{
 Task.find({_id:req.params.id},function(err,tasks){
 if(err){
 res.send(err);
 }
 res.json(tasks);
 });
}
exports.addTasks = function(req, res)
{
 var task = new Task();
 task.taskTitle = req.body.title;
 task.taskDesc = req.body.desc;
 task.uid = req.body.uid;
 
 task.save(function(err){
 if(err){
 res.send(err);
 }
 res.json({message:"task added", data:task});
 });

}
exports.updateTasks = function(req, res)
{
Task.update({_id:req.params.id},
{
taskTitle:req.body.title,
taskDesc:req.body.desc,
uid:req.body.uid
}, function(err,num,row){
if(err)
{
res.send(err)
}
res.json(num);
}
);

}
exports.deleteTasks = function(req, res)
{
Task.remove({_id:req.params.id},function(err){
if(err){
res.send(err);
}
res.json({message:"Deleted"});
});

}
