import mongoose, { Schema } from "mongoose";
import { NextResponse } from "next/server";

const TaskSchema = new Schema({
    title:{
        type:String,
        required:[true,"Title Required"]
    },
    content:{
        type:String,
        required:[true,"Content Required"]
    },
    addedDate:{
        type:Date,
        required: true,
        default:Date.now()
    },
    status:{
        type:String,
        enum: ["pending","completed","just_added"],
        default:"pending"
    },
    userId : {
       type: mongoose.ObjectId, 
       required: true,  

    }
});

export const Task = mongoose.models.tasks || mongoose.model("tasks",TaskSchema);