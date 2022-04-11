const profileController = {
    index : function (req, res){
        return res.render('profile');
    },
    register : function(req, res){
        return res.render('register');
    },
    login : function(req, res) {
        return res.render('login');
    },
    edit : function(req, res){
        return res.render('profile-edit');
    }
};

module.exports = profileController;