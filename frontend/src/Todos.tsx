
import { useTodos } from './serviceHooks/useTodos';

export function Todos() {
  const { data, isLoading, error } = useTodos();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>
          {todo.title} {todo.completed ? '(done)' : ''}
        </li>
      ))}
    </ul>
  );
}
