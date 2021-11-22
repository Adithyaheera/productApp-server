const db = require('./db')

const jwt = require("jsonwebtoken")


user = {
    Ram: { uname: "Ram", email: "ram123@gmail.com", ph: 123456, password: "userone", productName: "woodland shoe", price: 2000, Discription: "very good shoe product" },
    Ravi: { uname: "Ravi", email: "ravi456@gmail.com", ph: 456789, password: "usertwo", productName: "Tshirt", price: 1500, Discription: "very good shoe product" },
    Varun: { uname: "Ram", email: "varun789@gmail.com", Ph: 45587, password: "userthree", productName: "sun glass", price: 1000, Discription: "very good shoe product"}

}




const register = (uname, email, ph, password, productName, price, Discription, ) => {
    return db.User.findOne({ uname })
        .then(user => {
            console.log(user)
            if (user) {
                return {
                    statusCode: 422,
                    status: false,
                    message: "already register .... please login"

                }
            }
            else {
                const newUser = new db.User({
                    uname,
                    email,
                    ph,
                    password,
                    productName,
                    price,
                    Discription,
                   

                })
                newUser.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: "register successfull...."
                }
            }


        })


    }
        const login = (uname,password) => {
            return db.User.findOne({uname,password})
        .then(user=>{
            if(user){
                const token = jwt.sign({
                    currentid:  uname
                },'smallscreate123')
        
                return {
                    statusCode: 200,
                    status: true,
                    message:"login successfully.....",
                    token:token
                }
            }
            return{
                statusCode: 401,
                status: false,
                message: "invalid password..."
        
            }
            
        })
        
        }
        











module.exports = {
    register,
    login
}