import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3000/v1/todos', () => {
   return HttpResponse.json(
      [
        { id: 1, title: 'Learn TypeScript', completed: false },
        { id: 2, title: 'Build an Express app', completed: false }
      ]
    );
  })
];
