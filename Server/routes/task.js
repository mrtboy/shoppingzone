import mongoose from 'mongoose';



module.exports = app => {
    const Task = app.models.task;
    var mtask = mongoose.model("Task");




    app.get("/tasks", (req, res) => {
        Task.findAll({}, (tasks) => {
            res.json({ tasks: tasks });
        });
    });

    app.post("/tasks", (req, res) => {
        var model = req.body;
        var task = new mtask();
        task.title = model.title;
        task.description = model.description;
        task.save();
        res.json({ task: model });
    });
};