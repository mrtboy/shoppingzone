import jwt from "jwt-simple";
import bcrypt from "bcrypt";

module.exports = app => {
    const cfg = app.libs.configuration;
    const Profiles = app.libs.db.init.models.Profiles;
    app.post("/token", (req, res) => {
        if (req.body.email && req.body.password) {
            const email = req.body.email;
            const password = req.body.password;
            console.log(email, password);
            Profiles.findOne({ where: { email: email } })
                .then(profile => {
                    if (Profiles.isPassword(profile.password, password)) {
                        const payload = { id: profile.id };
                        res.json({
                            token: jwt.encode(payload, cfg.jwtSecret)
                        });
                    } else {
                        res.sendStatus(401);
                    }
                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(401);
                });
        } else {
            res.sendStatus(401);
        }
    });
};