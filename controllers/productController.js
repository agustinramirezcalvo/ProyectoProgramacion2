const data = require("../db/data")

const productController = {
    detail: function(req,res){ // Mostrarme el detalle del producto. Cuando me aparezca esto yo voy a querer que me responda algo
        return res.render('product', {productos: data.producto, // Voy a querer que me renderice la vista de product. Lo que quiero que vea el usuario
        comentarios: data.comentarios, usuario: data.usuario})
    },
    add: function(req,res){
        return res.render('product-add', {usuario: data.usuario})
    } // Metodo
}
module.exports = productController