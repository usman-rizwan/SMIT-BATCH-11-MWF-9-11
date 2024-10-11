"use client";

import { addTodo } from "@/actions/todos";
import { useForm } from "react-hook-form";

export default function TodoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await addTodo(data);
    reset();
  };

  return (
    <div className="w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  mx-auto gap-3 "
      >
        <input
          name={"task"}
          {...register("task", { required: true, minLength: 3 })}
          placeholder={"Todo"}
          className="border-2 flex flex-grow p-2"
        />

        <input
          type="submit"
          value={isSubmitting ? "Loading.." : "Add Todo"}
          className="bg-blue-200 cursor-pointer rounded p-2 px-3"
        />
      </form>
      {errors["task"] ? (
        <h1 className={"text-red-500"}>Please add task correctly</h1>
      ) : null}
    </div>
  );
}
