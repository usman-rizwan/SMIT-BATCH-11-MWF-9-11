"use server";

const { revalidatePath } = require("next/cache");

export async function addTodo(obj) {
  try {
    await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    revalidatePath("/todos");
  } catch (error) {
    console.log("error in adding todo",error);
    
  }
 
}


export async function editTodo(obj) {
  try {
    await fetch("http://localhost:3000/api/todos", {
      method: "PUT",
      body: JSON.stringify(obj),
    });
    revalidatePath("/todos");
  } catch (error) {
    console.log("error in Updating todo",error);
    
  }

}

export async function deleteTodo(obj) {
  // console.log(obj );
  
  try {
    await fetch("http://localhost:3000/api/todos", {
      method: "DELETE",
      body: JSON.stringify(obj),
    });
    revalidatePath("/todos");
  } catch (error) {
    console.log("error in deleteing todo",error);
    
  }

}
