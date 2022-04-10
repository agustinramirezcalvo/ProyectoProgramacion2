
let productController = {
    detail: (req,res)=>{
        return res.render("product")
    },
    add: (req,res)=>{
        return res.render("product-add")
    },
    edit: (req,res)=>{
        return res.render("product-edit")
    }
}
module.exports = productController