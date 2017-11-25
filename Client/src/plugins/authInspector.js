const auth = {
    tokenExist: () => {
        const token = localStorage.getItem('authToken');
        console.log(token);
    },
    createToken: (token) => {
        localStorage.setItem("authToken", token);
    }
}




module.exports.install = (Vue) => {
    Vue.prototype.$authInspector = auth;
};