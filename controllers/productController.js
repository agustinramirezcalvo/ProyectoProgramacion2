const data = require("../db/data")

const productController = {
    detail: function(req,res){
        return res.render('product', {productos: data.producto,
        comentarios: data.comentarios, usuario: data.usuario})
    },
    add: function(req,res){
        return res.render('product-add', {usuario: data.usuario})
    }
}
module.exports = productController