// const http=require('http');
// const port=process.env.PORT||8080;
// const app=require('./app');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end("Hello")
// }).listen(8080)
// http.listen(port,()=>{
// console.log("Connected")

// });

var express=require('express');
var app=express();
var routes=require('./api/routes/products');
app.use('/',routes);
// app.get("/",(req,res)=>{
//     res.send("Hello user")
// })
app.listen(4040,()=>{
    console.log("connected")
})