import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        unique : true,
        require : true
    },
    fullName : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true,    
    },
    profilePicture : {
        type : String,
        default : ""
    }
}, {timestamps : true});

const userModel = mongoose.model("User", userSchema);

export default userModel;