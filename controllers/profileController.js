const data = require('../db/data');
const profileController = {
    index : function (req, res){
        return res.render('profile', {usuario: data.usuario, productos: data.producto});
    },
    register : function(req, res){
        return res.render('register', {usuario: data.usuario});
    },
    login : function(req, res) {
        return res.render('login', {usuario: data.usuario});
    },
    edit : function(req, res){
        return res.render('profile-edit', {usuario: data.usuario});
    },
};

module.exports = profileController;