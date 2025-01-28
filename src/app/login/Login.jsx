"use client";

import { login, signUp } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {

  const router = useRouter();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
      });
    
      const doLogin = async (event) => {
        event.preventDefault();
        console.log(event);
        console.log(loginData);
    
        if (loginData.email.trim() === "" || loginData.password.trim() === "") {
          toast.info(" Fields are empty !!! Please Enter all the information needed ", {
            position: "top-center",
          });
          
          return;
    
        }

        //form Submit
        try {
            const result = await login(loginData);
            console.log(result);
            toast.success("Logged-In Successfully ", {
              position: "top-center",
            });
            //redirect
            router.push("/Profile/User");

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, {
              position: "top-center",
            });
        }
      };

    return (
        <>
            <div className="grid grid-cols-12 ">
        <div className="col-span-4 col-start-5">
          <div className="py-5">
            <h1 className="text-center">Login Here</h1>

            <form action="" onSubmit={doLogin}>
              

              {/* Email-Field */}
              <div className="mt-3">
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium mb-2 ps-1" >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter here"
                  id="user_email"
                  className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                  name="user_email"
                  onChange={(event) => {
                    setLoginData({
                      ...loginData,
                      email: event.target.value,
                    });
                  }}
                  value={loginData.email}
                />
              </div>

              {/* Pasword-Field */}
              <div className="mt-3">
                <label
                  htmlFor="user_password"
                  className="block text-sm font-medium mb-2 ps-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter here"
                  className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                  name="user_password"
                  onChange={(event) => {
                    setLoginData({
                      ...loginData,
                      password: event.target.value,
                    });
                  }}
                  value={loginData.password}
                />
              </div>


              <div className="mt-3 flex justify-center">
                <button
                  type="submit"
                  className="px-3 py-2 bg-green-600 rounded-lg hover:bg-green-400"
                >
                  Signup
                </button>
                <button  type="button" className="px-3 py-2 bg-orange-600 rounded-lg hover:bg-orange-400 ms-2">
                  Reset
                </button>
              </div>

              {/* {JSON.stringify(loginData)} */}
            </form>
          </div>
        </div>
      </div>
        </>
    )
}

export default Login




  

