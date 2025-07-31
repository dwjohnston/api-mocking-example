export type Todo = {
    id: number; 
    title: string; 
    completed: boolean;
}

export async function fetchTodos() : Promise<Array<Todo>>{
  const res = await fetch('http://localhost:3000/v1/todos');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}
