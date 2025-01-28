import { connectDb } from "@/helper/db";
import { Task } from "@/models/task";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
connectDb();
export async function GET(request,{params}){
    const {taskId} = params;
    try{
        const task = await Task.findById(taskId);
        return NextResponse.json(task);

    }catch(error){
        return NextResponse.json({
            message: "Failed to get Task",
            success: false,
        });

    }

}

export async function PUT(request,{params}){
    const {taskId} = params;
    const {title,content,status} = await request.json();

    try{
        const task = await Task.findById(taskId);
       task.title = title;
       task.content = content;
       task.status = status;

        const updatedTask = await task.save();
        return NextResponse.json(updatedTask);

    }catch(error){
        return NextResponse.json({
            status:false,
            message:"Failed to Update Task",
        });
    }
}

export async function DELETE(request,{params}){
    const {taskId} = params;
    try{
        await Task.deleteOne({
            _id:taskId,
        })
        return NextResponse.json({
            status:true, 
            message:"Task Deleted Successfully",
        });

    }catch(error){
        return NextResponse.json({
            status:false,
            message:"Failed to Delete Task",
        });
    }
}

