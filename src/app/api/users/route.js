import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

connectDb();

export async function GET(request){
    let users=[]; 
    try{
        users = await User.find();

    }catch(error){
        console.log(error);
        return NextResponse.json({
            message: "Failed to get User",
            success: false,
        });
    }
return NextResponse.json(users);
}



export async function POST(request){
    
    //fetch user details from request
    const {name,email,password,about,profileURL}= await request.json();
    
    //create user object with user model
    
    try{
        const user = new User({
        name,
        email,
        password,
        about,
        profileURL,
    });
    //Save The object to database

    user.password = bcrypt.hashSync(user.password,parseInt(process.env.BCRYPT_SALT));

    const createdUser = await user.save();
    const response = NextResponse.json(user,{
        status:201,
    });
    return response; 
}catch(error){
    console.log(error);
   return NextResponse.json({ 
    message : "failed to create user",
    status:false,
},{
    status:500,
    
});
}




    // console.log(body);
    //  return NextResponse.json({
    //     message:"Posting User Data",
    //  });

}
export function DELETE(request){
    console.log("Delete API Called");
    return NextResponse.json({
        message:'Deleted !!',
        status:true,
    });

}
export function PUT(){

}