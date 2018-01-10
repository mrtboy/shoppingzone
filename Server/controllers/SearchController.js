module.exports = app => {
    const repo = app.repositories.SearchRepository;

    //Search the Product
    app.get("/search", (req, res) => {
        let model = req.query
        
        repo.findByQuery(model, (result) => {
            res.json({ product: result });
        });
    });
}