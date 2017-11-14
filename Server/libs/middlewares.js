import cors from "cors";
module.exports = app => {
    app.set("port", 2000)
    app.set("json spaces", 4);
    app.use(cors({
        origin: ["http://localhost:8080"],
        methods: ["GET", "POST", "PUT", "DELETE"]
    }))
};