module.exports = app => {
    const repo = app.repositories.TaskRepository;

    app.get("/tasks", (req, res) => {
        repo.findAll({}, (tasks) => {
            res.json({ tasks: tasks });
        });
    });

    app.post("/tasks", (req, res) => {
        var model = req.body;
        repo.add({}, (result) => {
            res.json({ task: model });
        });
    });
}