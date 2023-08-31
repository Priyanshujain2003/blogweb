const mongoose = require("mongoose")

const connectDB = async () => {

    mongoose.connect("mongodb+srv://hellopriyanshu2003:JcJkQKdcDsAhV69r@cluster0.8qwlkos.mongodb.net/blogging?retryWrites=true&w=majority").then(() => {
        console.log("connected")
    }).catch((err) => {
        console.log("err", err)
    })

}

module.exports = connectDB;