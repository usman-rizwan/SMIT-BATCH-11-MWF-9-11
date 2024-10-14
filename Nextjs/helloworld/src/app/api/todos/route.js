const todos = [
  {
    id: 1,
    task: "Task 1",
    isCompleted: true,
  },  
  {
    id: 2,
    task: "Task 2",
    isCompleted: true,
  },
  {
    id: 3,
    task: "Task 3",
    isCompleted: true,
  },
  {
    id: 4,
    task: "Task 4",
    isCompleted: true,
  },
];

export async function GET(request) {
  return Response.json({
    data: todos,
    msg: "Todos fetched successfully",
  });
}

export async function POST(request) {
  const data = await request.json();
  let todoObj = {
    id: todos.length + 1,
    task: data.task,
    isCompleted: false,
  };
  todos.push(todoObj);
  return Response.json({
    data: todos,
    msg: "Todos Added successfully",
  });
}

export async function PUT(req) {
  const data = await req.json();
  // console.log("dtraa " , data);

  const todoIndex = todos.findIndex((items) => items.id == data.id);
  console.log(todoIndex);

  todos[todoIndex] = data;

  return Response.json({ msg: "Successfully edited", status: 200 });
}
export async function DELETE(req) {
  const data = await req.json();
  console.log("data " , data);

  const todoIndex = todos.findIndex((items) => items.id == data);
   console.log(todoIndex);

   todos.splice(todoIndex, 1);

  return Response.json({ msg: "Successfully Deleted", status: 200 });
}
