"use client";
import { addTask } from "@/services/taskService";
import React, { useState } from "react";
import { toast } from "react-toastify";

// import { Image } from 'next/image';
// import loginSvg  from '../../../public/login.svg';

 const metadata = {
  title: "Add Task: Work Manager",
};

const AddTask = () => {
  document.title = metadata.title;
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "",
    userId: "66329791b0734d5dd0809928",
  });

  const handleAddTask= async (event)=>{
    event.preventDefault();
    console.log(task);
    //Validate Task Data

    try{
      const result = await addTask(task);
      console.log(result);

      toast.success("your task has been added",{
        position: "top-center",
      });

      setTask({
        title: "",
        content: "",
        status: "",
        userId: "66329791b0734d5dd0809928",
      });

    }catch(error){
      console.log(error);
      alert("Failed to add task");

      toast.error("Failed to add task",{
        position: "top-center",
      });

    }

  }

  return (
    <>
      <div className=" justify-center grid grid-cols-12">
        <div className="p-5 mt-3 col-span-6 col-start-4 ">
          {/* <div>
            
        <Image src={loginSvg}></Image>
          </div> */}
          <h1>Add your Task here</h1>

          <form action="" onSubmit={handleAddTask}>
            {/* task title */}
            <div className="mt-4">
              <label
                htmlFor="task_title"
                className="block text-sm font-medium mb-2"
              >
                Title
              </label>
              <input
                type="text"
                className="w-full p-0.5 rounded-3xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                id="task-title"
                name="task_title"
                onChange={(event)=>{
                  setTask({
                    ...task,
                    title:event.target.value,

                  });
                }}
                value={task.title}
              />
            </div>

            {/* task Content */}
            <div className="mt-4">
              <label
                htmlFor="task_content"
                className="block text-sm font-medium mb-2"
              >
                Content
              </label>
              <textarea
                className="w-full p-0.5 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                id="task-content"
                rows={5}
                name="task_content"
                onChange={(event)=>{
                  setTask({
                    ...task,
                    content:event.target.value,

                  });
                }}
                value={task.content}
              />
            </div>

            {/* task Status */}
            <div className="mt-4">
              <label
                htmlFor="task_status"
                className="block text-sm font-medium mb-2"
              >
                Status
              </label>
              <select
                id="task-status"
                className="w-full p-0.5 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
                name="task_status"
                onChange={(event)=>{
                  setTask({
                    ...task,
                    status:event.target.value,

                  });
                }}
                value={task.status}
              >
                <option value="none" selected disabled>
                  ---Select Status---
                </option>
                <option value="pending">pending</option>
                <option value="completed">completed</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-center">
              <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
                Add Task
              </button>
              <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">
                Clear
              </button>
            </div>
            {/* {JSON.stringify(task)} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTask;
