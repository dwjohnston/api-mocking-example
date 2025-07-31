import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '../services/todoService';

export function useTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });
}
