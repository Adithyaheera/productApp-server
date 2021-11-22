const express= require ('express')


const app = express()

const jwt =require('jsonwebtoken')

const cors = require('cors')


const  dataService =require('./services/data.service')

app.listen(3000,()=>{console.log(" 3000 is working done ,,,,")}) 



app.use(express.json())

app.use((req,res,next)=>{
    console.log("middleware");
    next()
  }) 


app.use(cors({
    origin:"http://localhost:4200",
    Credential:true
  }))



const jwtMiddleWare = (req,res,next)=>{


    try{
      const token = req.headers["x-taken-token"]
      const data = jwt.verify(token,'smallscreate123')
      req.currentAcc =  data.currentid
      next()
  
  
    }
   catch{
  const result=({
  statusCode:200,
  status:true,
  message:"please login...."
  
  })

  res.status(result.statusCode).json(result)
   }
  }
  


  app.post('/token',jwtMiddleWare,(req,res)=>{
    res.send("currentuser:"+ req.currentUname)
  })
  



//Product App

app.post('/register',(req,res)=>{
    console.log(req.body);
dataService.register( req.body.uname, req.body.email, req.body.ph, req.body.password, req.body.productName, req.body.price,req.body.Discription)
.then(result=>{
    res.status(result.statusCode).json(result)
  })

})

app.post('/login',(req,res)=>{
    dataService.login(req.body.uname,req.body.password)
   .then(result=>{
     res.status(result.statusCode).json(result)
   })
   })