var express = require("express");
var bodyParser = require("body-parser")
var taskController = require("./controller/tasks");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/taskmaker");

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({
extended:true
}));

app.use("/api", router);

router.route("/tasks/:uid").get(taskController.getTasks);
router.route("/task/:id").get(taskController.getTask);
router.route("/add").post(taskController.addTasks);
router.route("/update/:id").post(taskController.updateTasks);
router.route("/delete/:id").get(taskController.deleteTasks);

app.listen(3000);

