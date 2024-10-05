import { connectDb } from "@/helper/db";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDb();
export async function GET(request,{params}){
    const {userId} = params;
    try{
       const tasks = await Task.find({
            userId: userId
        });
        return NextResponse.json(tasks);

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Failed to get User's Task",
            success: false,
        });
    }

}