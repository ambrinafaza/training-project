const express=require('express');
const router=express.Router();

router.get('/get',(req,res)=>{
    res.status(200).json({
        message:'Handling  GET requests to /products'
       
    });

});
router.post('/post',(req,res)=>{
    console.log(req.body);
    res.status(200).json({
        message:'Handling  POST requests to /products'
    });

});
router.get('get/:productId',(req,res)=>{
    const id=req.params.productsId;
    
    if(id==='special'){
        res.status(200).json({
            message:'you discovered special id',
            id:id
        });
    }else{
        res.status(200).json({
            message:'you passed an id'
        });
    }
} );


module.exports=router;
