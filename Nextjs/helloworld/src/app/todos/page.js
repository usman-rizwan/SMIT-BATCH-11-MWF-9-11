import { addTodo } from "@/actions/todos";
import TodoForm from "@/components/TodoForm";
import TodosList from "@/components/TodosList";

export default async function Todos() {
  let response = await fetch("http://localhost:3000/api/todos" ,{ next: { revalidate: 1000 } });
  response = await response.json();
  const todosData = response.data;

  return (
    <div className={`min-h-screen flex flex-col items-center gap-4`}>
      <h1 className={"text-center my-2 text-3xl"}>Todos</h1>
      <TodoForm />
   <TodosList data={todosData} />
    </div>
  );
}
