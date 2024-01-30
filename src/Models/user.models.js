const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    Name:{
        type: String,
        require: true
        
    },
    Url:{
        type: String,
        require: true
        
    },
    Price :{
        type : Number,
        require : true
    }

})

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel
