import mongoose from 'mongoose';
import {User} from "../models/user";

export const connectDb = async () =>{
    
    try{
       const {connection} = await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName: "work_manager",
        });
        console.log("Connected to DB");
        
        //Testinggg & creating new user
        // const NewUser = new User({
        //     name:"Abdul Rehman",
        //     email:"kmani11811@gmail.com",
        //     password:"TestingPassword",
        //     about:"Creating user and testing it"
        // })

        // await NewUser.save();
        // console.log("New User Created");


    }catch(error){
        console.log(error);
        console.log("Failed to connect to DB");
        console.log(error);
   
    }
};