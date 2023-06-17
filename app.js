
const express=require('express');  //it is a toplevel function exported by vlsur 
const app =express();
const port=5000  //port number it is 
const path=require('path')
const ejs=require('ejs')
const mysql=require('mysql');
const { connect } = require('http2');
const { error } = require('console');

app.use(express.static(path.join(__dirname,'/public')))

// app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/',(req,res)=>{
    let email=req.body.youremail;
    let name =req.body.yourname;

})

const connection=mysql.createConnection(
    {
        host :'localhost',
        user:'root',
        password:'root',
        database:'demo'
    }
)

// connection.connect((err)=>{
//     if(err){
//         console.log('error')
//     }
//     else{
//         console.log('connected')
//     }
// })
// connection.query()
let data_base=`SELECT * FROM data`
connection.query(data_base,(err,res)=>{
    if(err){
        console.warn('error')
    }
    else{
        console.log(res)
    }
})

app.listen(port,()=>{
    console.log("my server port number is  3000")
})