const { comentarios } = require("../db/data")

let data = require("../db/data")

let productController = {
    detail: (req,res)=>{
        return res.render("product", {productos: data.producto,
        comentarios: data.comentarios})
    },
    add: (req,res)=>{
        return res.render("product-add")
    },
    edit: (req,res)=>{
        return res.render("product-edit")
    }
}
module.exports = productController