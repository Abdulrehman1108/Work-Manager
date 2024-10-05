import { User } from "@/models/user";
import { NextResponse } from "next/server";

//Get User by ID
export async function GET(request,{params}){
    const {userId} = params;
    try{
        const user = await User.findById(userId);
        return NextResponse.json(user);

    }catch(error){
        return NextResponse.json({
            status:false,
            message:"Failed to Fetch User",
        });
    }
}


//Update User by ID
export async function PUT(request,{params}){
    const {userId} = params;
    const {name,password,about,profileURL} = await request.json();

    try{
        const user = await User.findById(userId);
        user.name = name;
        user.password = password;
        user.about = about;
        user.profileURL = profileURL;

        const updatedUser = await user.save();
        return NextResponse.json(updatedUser);

    }catch(error){
        return NextResponse.json({
            status:false,
            message:"Failed to Update User",
        });
    }
}



//Delete User by ID
export  async function DELETE(request,{params}){
    const {userId} = params;
    try{
        await User.deleteOne({
            _id:userId,
        })
        return NextResponse.json({
            status:true, 
            message:"User Deleted Successfully",
        });

    }catch(error){
        return NextResponse.json({
            status:false,
            message:"Failed to Delete User",
        });
    }
}