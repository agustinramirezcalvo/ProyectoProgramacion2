let productos = require("../db/data").producto

const indexController = {
    index : function (req, res) {
        return res.render('index', {productos:productos});
    },
    search : function (req, res) {
        return res.render('search-results');
    }
}


module.exports = indexController