import { connectDb } from "@/helper/db";
import { Task } from "@/models/task";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

connectDb();

//Create a Task
export async function POST(request){
    const {title,content,status,userId} = await request.json();

try{
    const task = new Task({
        title,
        content,
        status,
        userId,
    });

    const createdTask = await task.save();
    return NextResponse.json(createdTask,{
        status:201,
    });

}catch(error){
    console.log(error);
   return NextResponse.json({
    message : "failed to create task",
    status:false,
   });
}
}


//Get all the tasks
export async function GET(request) {
    try {
        const tasks = await Task.find();
        return NextResponse.json(tasks);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to get Tasks", success: false },
         { status: 500 });
    }
}


