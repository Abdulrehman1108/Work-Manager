import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email:{
        type:String,
        required:[true,"Email Required"],
        unique: true,
    },
    password:{
        type:String,
        required:[true,"Password Required"]
    },
    about: String,
    profileURL:String,
    // address:{
    //     street:String,
    //     city:String,
    //     country:String,
    //     pincode:Number,
    // }
});

export const User = mongoose.models.users || mongoose.model("users",UserSchema);