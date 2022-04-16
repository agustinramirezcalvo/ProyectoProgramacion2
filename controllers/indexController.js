const data = require("../db/data"); // Requiriendo la lista que está en db

const indexController = {
    index : function (req, res) {
        return res.render('index', {productos: data.producto});
    }, // Devuelve renderizndo index y le estoy mandando un objeto con la información de los productos
    search : function (req, res) {
        return res.render('search-results', {productos: data.producto});
    }
}


module.exports = indexController