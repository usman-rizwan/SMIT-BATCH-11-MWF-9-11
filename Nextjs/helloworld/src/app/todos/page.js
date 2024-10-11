import { addTodo } from "@/actions/todos";
import TodoForm from "@/components/TodoForm";

export default async function Todos() {
  let response = await fetch("http://localhost:3000/api/todos");
  response = await response.json();
  const todosData = response.data;

  return (
    <div className={`min-h-screen flex flex-col items-center gap-4`}>
      <h1 className={"text-center my-2 text-3xl"}>Todos</h1>
      <TodoForm />
      {todosData.map((item) => (
        <h1 key={item.id}>{item.task}</h1>
      ))}
    </div>
  );
}
