const express=require("express")
const router=express.Router()
const connection=require('./dbConnection')


router.get("/products",(req,res)=>{
    connection.query("select * from product",(err,data)=>{
        if(err){
            res.status(500).send("failed to load product"+JSON.stringify(err))
        }else{
            res.send(data)
        }
    })
})

router.get("/products/:pid",(req,res)=>{
    connection.query("select * from product where pid=?",[req.params.pid],(err,data)=>{
        if(err){
            res.status(500).send("failed to load product"+JSON.stringify(err))
        }else{
            res.send(data)}
    })
})

router.post("/products/add",(req,res)=>{
    var pid=req.body.pid
    var pname=req.body.pname
    var price=req.body.price
    connection.query("insert into product values(?,?,?)",[pid,pname,price],(err,result)=>{
        console.log(result)
        if(err){
            res.status(500).send("failed to add product"+JSON.stringify(err))
        }else{
           res.redirect("/products")
        }
    })
})
router.put("/products/update/:pid",(req,res)=>{
    var pid=req.params.pid
    var pname=req.body.pname
    var price=req.body.price
    connection.query("update product set pname=?,price=? where pid=?",[pname,price,pid],(err,result)=>{
        console.log(result)
        if(err){
            res.status(500).send("failed to update product"+JSON.stringify(err))
        }else{
            res.redirect("/products")
        }
    })
})
router.delete("/products/:pid",(req,res)=>{
    connection.query("delete from product where pid=?",[req.params.pid],(err,result)=>{
        console.log(result)
        if(err){
            res.status(500).send("failed to delete product"+JSON.stringify(err))
        }else{
            res.redirect("/products")
        }
    })

})
module.exports=router