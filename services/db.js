const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/productApp',{
useNewUrlParser:true
})


const User = mongoose.model('User',{
uname: String,
email:String,
ph:Number,
password:String,
productName:String,
price:Number,
Discription:String
})



module.exports ={
    User
}
     
