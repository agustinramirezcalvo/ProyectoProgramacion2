const data = require("../db/data")

const productController = {
    detail: function(req,res){
        return res.render('product', {productos: data.producto,
        comentarios: data.comentarios})
    },
    add: function(req,res){
        return res.render('product-add')
    }
}
module.exports = productController