const profileController = {
    index : function (req, res){
        return res.render('profile');
    },
    register : function(req, res){
        return res.render('register');
    }
}

module.exports = profileController;