var mongoose = require("mongoose");

var Task = new mongoose.Schema({
taskTitle:{
type:String,
default: "",
required: true
},
taskDesc:{
type:String,
default: "",
required: true
},
uid:{
type:Number,
required: true
}
});

module.exports = mongoose.model("Task", Task);