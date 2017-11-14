module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { title: "t1" },
                { title: "t2" },
                { title: "t3" }
            ]);
        }
    };
};