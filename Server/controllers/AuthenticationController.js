import jwt from "jwt-simple";
import bcrypt from "bcrypt";
import { validator } from 'express-validator';
const { check, validationResult } = require('express-validator/check');
//the endpoint for authentication => token generation
module.exports = app => {
    const cfg = app.libs.configuration;


    //repositories to deal with relevant entities
    const Profiles = app.libs.db.init.models.Profiles;
    const repo = app.repositories.sql.ProfileRepository;
    const validator = app.models.viewmodels.authentication.RegisterValidationViewModel;
    app.post("/authentication/token", (req, res) => {
        if (req.body.email && req.body.password) {
            const email = req.body.email;
            const password = req.body.password;
            //console.log("request arrived")
            Profiles.findOne({ where: { email: email } })
                .then(profile => {
                    if (Profiles.isPassword(profile.password, password)) {
                        const content = { id: profile.id };
                        var token = jwt.encode({ id: content.id }, cfg.jwtSecret);
                        //response back to client including 3 fields => token, isSuccessfull, and email
                        res.json({
                            token: token,
                            isSuccessfull: true,
                            email: email
                        });
                        // {
                        //     id: content.id,
                        //     expiresIn: "2min"
                        // }, jwt.encode(content, cfg.jwtSecret));
                    } else {
                        res.json({
                            isSuccessfull: false
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                    res.json({
                        isSuccessfull: false
                    })
                });
        } else {
            res.sendStatus(401);
        }
    });
    //registration endpoint
    app.post("/authentication/register", validator.validate(), (req, res) => {
        const errors = validator.response(req, res);
        var model = req.body;

        repo.profileExistsByEmail(model, (result) => {
            console.log(result)
                //to check whether email currently exits
            if (result === true)
                res.status(500).json({ "message": "please choose another email address" });
            else {
                repo.add(model, result => {
                    res.status(201).json({
                        id: result.id,
                        email: result.email
                    });
                })
            }
        });
    });
};