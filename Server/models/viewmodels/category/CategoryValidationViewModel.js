const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

//a model to match the data coming from the client
module.exports = app => {
    return {
        validate: () => {
            //rules to validate
            return [
                check('name').exists().withMessage("name can not be empty"),
                check('description').exists().withMessage("description can not be empty")
            ]
        },
        response: (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return { result: true, errors: errors.mapped(), respone: res.status(422).json({ errors: errors.mapped() }) };
            } else {
                return { result: false, errors: null };
            }
        }
    };
}