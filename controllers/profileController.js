const profileController = {
    index : function (req, res){
        return res.render('profile');
    },
    register : function(req, res){
        return res.render('register');
    },
    login : function(req, res){
        return res.render('login');
    }
}

module.exports = profileController;