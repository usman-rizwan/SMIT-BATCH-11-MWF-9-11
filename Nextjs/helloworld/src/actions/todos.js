"use server";

const { revalidatePath } = require("next/cache");

export async function addTodo(obj) {
  await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    body: JSON.stringify(obj),
  });
  revalidatePath("/todos");
}
