import { error } from "util";

module.exports = app => {
    const repo = app.repositories.sql.CategoryRepository;
    //const validator = app.models.viewmodels.category.CategoryValidationViewModel;


    app.get('/categories', (req, res) => {
        repo.findAll(categories => {
            res.json({ categories: categories });
        })
    });