
const express=require('express');  //it is a toplevel function exported by vlsur 
const app =express();
const port=5000  //port number it is 
const path=require('path')
const ejs=require('ejs')
const mysql=require('mysql');
const { error } = require('console');
// const { connect } = require('http2');
// const { error } = require('console');
const bodyParser = require('body-parser')
const connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'form'
})

const query=()=>{
    return new Promise((resolve,reject)=>{
        connection.query('SELECT*FROM formdata',(error,element)=>{
            if(error){
                return reject(error)
            }
           return resolve(element)
        })
    })
}
const p=query()
p.then((result)=>{
    console.log(result)
})
app.use(express.static(path.join(__dirname,'/public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
// app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/',(req,res)=>{
    let email=req.body.youremail;
    let name=req.body.yourname;
    let form_data=`INSERT INTO formdata (email,name) VALUES ("${email}", "${name}")`;
    connection.query(form_data,(err,result)=>{
        if(err) throw err
        // console.log(result)
        res.send("register sucessfull")
        // res.redirect('/')
        
    })
})

app.listen(port,()=>{
    console.log("my server port number is  5000")
})



































































// / creating a mysql conncetion
// const connection=mysql.createConnection(
//     {
//         host :'localhost',
//         user:'root',
//         password:'root',
//         database:'demo'
//     }
// )
// managing connection
// connection.connect((err)=>{
//     if(err){
//         console.log('error')
//     }
//     else{
//         console.log('connected')
//     }
// })
// connection.query()
// let data_base=`SELECT * FROM data`
// connection.query(data_base,(err,res)=>{
//     if(err){
//         console.warn('error')
//     }
//     else{
//         console.log(res)
//     }
// })