"use client";
import { deleteTodo, editTodo } from "@/actions/todos";
import React, { useState } from "react";

const TodosList = ({ data }) => {
  // const [isEdit,setIsEdit] = useState(false)
  console.log("data", data);

  const onEdit = async (item) => {
    const editedData = prompt("enter data", item.task);
    const updatedData = { ...item, task: editedData };
    // console.log(updatedData);
    await editTodo(updatedData);
  };
  const onDelete = async (id) => {
    console.log("id",id);
    
    await deleteTodo(id);
  };

  return (
    <div>
      {data.map((item) => (
        <div className="flex justify-center items-center gap-4 py-2">
          <h1 key={item.id}>{item.task}</h1>
          <button
            className="px-2 bg-green-600 rounded text-white"
            onClick={() => onEdit(item)}
          >
            Edit
          </button>
          <button
            className="px-2 bg-red-600 rounded text-white"
            onClick={() => onDelete(item.id)}
          >
            {" "}
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
