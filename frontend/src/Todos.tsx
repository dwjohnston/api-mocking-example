
import { useTodos } from './serviceHooks/useTodos';

import { beforeAll, afterEach, afterAll} from "vitest";
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
  http.get('http://localhost:3000/v1/todos', () => {
   return HttpResponse.json(
      [
        { id: 1, title: 'Learn TypeScript', completed: false },
        { id: 2, title: 'Build an Express app', completed: false }
      ]
    );
  })
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


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
